// Define the images
const images = [
    'assets/img/background_01.jpg',
    'assets/img/background_02.jpg',
    'assets/img/background_03.jpeg',
]

// App State
let index = 0;
const max = images.length;

// Get the DOM elements
const containerElement = document.querySelector('.container');
const prevSlide = document.querySelector('.prevSlide');
const nextSlide = document.querySelector('.nextSlide');

//Listen for arrow events
prevSlide.addEventListener('click',function(){
    index--
    // Set Images Index
        setImagesIndex();
    // Changes Background Images
        changesBackgroundImages(images[index], containerElement);
});

nextSlide.addEventListener('click',function(){
    index++
    // Set Images Index
        setImagesIndex();
    // Changes Background Images
        changesBackgroundImages(images[index], containerElement);
});

//Utilities function
function setImagesIndex(){
    if (index < 0) index = max - 1;
    if (index === max) index = 0;
};

// Changes Background Images function
function changesBackgroundImages(backgroundImage, element){
    element.style.backgroundImage = `url(${backgroundImage})`;
};