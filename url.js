const readline = require('readline');
const isgd = require('isgd');
const vgd = require('vgd');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function shortenUrl() {
    console.log('\x1b[36m%s\x1b[0m', '--------------------');
    console.log('\x1b[36m%s\x1b[0m', '   Shortener by Trhacknon');
    console.log('\x1b[36m%s\x1b[0m', '--------------------');
    console.log('\x1b[33m%s\x1b[0m', 'Ce script vous permet de raccourcir une URL en utilisant is.gd ou v.gd.');
    console.log('\x1b[33m%s\x1b[0m', 'Veuillez suivre les étapes suivantes :');

    rl.question('\x1b[32mEntrez l\'URL à raccourcir : \x1b[0m', (url) => {
        rl.question('\x1b[32mChoisissez le service de raccourcissement (is.gd ou v.gd) : \x1b[0m', (service) => {
            if (service === 'is.gd') {
                isgd.shorten(url, (res) => {
                    console.log('\x1b[36m%s\x1b[0m', '-------------------');
                    console.log('\x1b[36m%s\x1b[0m', '   Résultat');
                    console.log('\x1b[36m%s\x1b[0m', '-------------------');
                    console.log('\x1b[34m%s\x1b[0m', 'URL raccourcie avec is.gd :', res);
                    rl.close();
                });
            } else if (service === 'v.gd') {
                vgd.shorten(url, (res) => {
                    console.log('\x1b[36m%s\x1b[0m', '-------------------');
                    console.log('\x1b[36m%s\x1b[0m', '   Résultat');
                    console.log('\x1b[36m%s\x1b[0m', '-------------------');
                    console.log('\x1b[34m%s\x1b[0m', 'URL raccourcie avec v.gd :', res);
                    rl.close();
                });
            } else {
                console.log('\x1b[31m%s\x1b[0m', 'Service non pris en charge. Veuillez choisir entre is.gd et v.gd.');
                rl.close();
            }
        });
    });
}

shortenUrl();
