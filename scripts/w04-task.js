/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Samuel Smith",
    photo: "images/pp.jpg",
    favoriteFoods: ["Tres Leches", "Watermelon", "Steak", "Honeycomb Icecream"],
    hobbies: ["Singing","Acting","Composing","Gaming","Serving"],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "New Braunfels, TX",
        length: "18 Years"
    }
)
myProfile.placesLived.push(
    {
        place: "Ammon, ID",
        length: "6 Months"
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src",myProfile.photo);
document.querySelector("#photo").setAttribute("alt",myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(fooditem => 
    {
        let li = document.createElement('li');
        li.textContent = fooditem;
        document.querySelector("#favorite-foods").appendChild(li);
    }
    );

/* Hobbies List */
myProfile.hobbies.forEach(hobby => 
    {
        let li = document.createElement('li');
        li.textContent = hobby;
        document.querySelector("#hobbies").appendChild(li);
    }
    );

/* Places Lived DataList */
myProfile.placesLived.forEach(object => 
    {
        let dt = document.createElement('dt');
        dt.textContent = object.place;

        let dd = document.createElement('dd');
        dd.textContent = object.length

        document.querySelector("#places-lived").appendChild(dt);
        document.querySelector("#places-lived").appendChild(dd);
    }
    );

