/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let ar = document.createElement('article');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');

        h3.innerHTML = temple.templeName;
        img.setAttribute('src',temple.imageUrl);
        img.setAttribute('alt',temple.location);

        ar.appendChild(h3);
        ar.appendChild(img);
        templesElement.appendChild(ar);
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://run.mocky.io/v3/5bb6e031-e523-42fa-910a-60ed31688981');
    templeList = await response.json()
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
} 

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector('#sortBy').value;
    switch (filter) {
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.includes('Utah')));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => !temple.location.includes('Utah')));
            break;
        case "older":
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(templeList);
            break;
    }
}


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});