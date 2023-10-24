export default function displayCars(carList, carsElement) {
    carList.forEach(car => {
        let ar = document.createElement('article');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let p = document.createElement('p');
        

        h3.innerHTML = `${car.Make} ${car.Model}`;
        img.setAttribute('src',car.src);
        img.setAttribute('alt',`${car.Make} ${car.Type}`);
        p.innerHTML = `&bull; Year: ${car.Year}<br>&bull; Engine: ${car.Engine}<br>&bull; Horsepower: ${car.Horsepower}<br>&bull; 0-60 Time: ${car["0-60 Time"]}<br>&bull; Top Speed: ${car["Top Speed"]}<br>&bull; Type: ${car.Type}<br>&bull; Curb Weight: ${car["Curb Weight"]}<br>&bull; Power to Weight Ratio: ${car["Power to Weight Ratio"]}<br>&bull; Drivetrain: ${car.Drivetrain}`;

        ar.appendChild(h3);
        ar.appendChild(img);
        ar.appendChild(p);
        carsElement.appendChild(ar);
    });
}