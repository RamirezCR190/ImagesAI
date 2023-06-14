const backgroundElement = document.querySelector('.background');
const images = [
    'C:\Users\marco\OneDrive\Pictures\Test.png',
    'C:\Users\marco\OneDrive\Pictures\TestAI.png',
    'C:\Users\marco\OneDrive\Pictures\IMG_0913.jpg',
    // Add more dark images as needed
];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newBackgroundImage = `url(${images[randomIndex]})`;
    backgroundElement.style.backgroundImage = newBackgroundImage;
}

// Change the background image every 10 seconds
setInterval(changeBackground, 10000);

// Set an initial background image
changeBackground();
