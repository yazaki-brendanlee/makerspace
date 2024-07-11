let button = document.getElementById("menu");
let image = document.getElementById("gallery-img");

let index = 0;
let size = 0;
let timer = setInterval(getImage, 5000);
let photos = ['1.png', '2.png', '3.png', '4.jpg'];
let nav_buttons = ['0', '1', '2', '3'];

// Navigation Menu
button.addEventListener("click", () => {

});

function setImage(pos) {
    document.getElementById(nav_buttons[index]).src = "img/gallery-button.png";
    document.getElementById(nav_buttons[pos]).src = "img/black-logo.png";
    clearInterval(timer);
    index = pos;
    image.src = 'img/gallery/' + photos[index];
    timer = setInterval(getImage, 5000);
}

function getImage() {
    document.getElementById(nav_buttons[index]).src = "img/gallery-button.png";

    index++;
    if (index == photos.length) {
        index = 0;
    }

    image.src = 'img/gallery/' + photos[index];
    document.getElementById(nav_buttons[index]).src = "img/black-logo.png";
}