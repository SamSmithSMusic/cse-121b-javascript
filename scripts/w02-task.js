/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Samuel Smith";
let currentYear = (new Date()).getFullYear();
let profilePicture = "images/pp.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);



/* Step 5 - Array */
let fFoods = ["Tres Leches", "watermelon", "steak", "honeycomb icecream"]; 
foodElement.innerHTML = `${fFoods}`;
let singleFfood = "Funeral Potatos";
fFoods.push(singleFfood);
foodElement.innerHTML += `<br>${singleFfood}`
fFoods.shift()
foodElement.innerHTML += `<br>${fFoods}`
fFoods.pop()
foodElement.innerHTML += `<br>${fFoods}`






