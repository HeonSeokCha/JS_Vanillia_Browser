const images = ["0.jpg", "1.jpg", "2.jpg"];

const chooseImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize="100% 100%";
document.body.style.backgroundImage = `url(img/${chooseImage})`;