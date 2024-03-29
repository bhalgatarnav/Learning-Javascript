// JavaScript code​​​​​​‌​‌​‌‌‌​‌‌​​​‌‌‌‌​​‌‌​​‌​ below
// Write your answer here, then test your code.


// Aim: To understand the template literals and integrating with strings to output things in the HTML.

function Camera(brand, model, year, format, lens, filmType) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.format = format;
    this.lens = lens;
    this.filmType = filmType;
}

const getCurrentYear = () => new Date().getFullYear();

const cameraAge = (year) => getCurrentYear() - year -1;

// Goal output:
// My camera is a [brand] [model] made in [year] making it [age] years old. It's a [format] camera with a [lens] lens using [filmtype] film.`
const cameraHTML = (myCamera) => {
    // Your code goes between the backticks in `cameraStory` below.
    const cameraStory = 
    `My camera is a ${myCamera.brand} ${myCamera.model} made in ${myCamera.year} making it ${cameraAge(myCamera.year)} years old. It's a ${myCamera.format} camera with a ${myCamera.lens} lens using ${myCamera.filmType} film.`;
    return cameraStory;
}    
