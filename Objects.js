import UC_room from "./class";
const room509 = new Room(
    "Deacon:- 509",
    4,
    ["Pradnyesh", "Vedant", "JT", "Evan"],
    true,
    false,
    ["Alcohol","Coffee", "Indian Snacks"],
    false,
    true,
    3,
    "August 14, 2023 12:00:00 EST"
)


console.log("Testing the Class created:", room509)

/**
 * !! ROOM 909; MANUAL OBJECT DECLARATION !!
 * The code below showcases the attempt to understand the objects in Javascript. The code is written before, 10 March 2024.
 */
// Making objects in Javascript.
var days = 0;

// Objects are generally constants, we can change the properties inside the container,
// but we cannot remove or replace the object inside the container.
const room909 = {
    name: "Morgens:- 909",
    owner: "Arnav A Bhalgat",
    numRoomates: 3,
    roomates: ['Parth', 'Dang'],
    isOccupied: true,
    section: {
        kitchen:{
            isStoveOn: true,
            storage: ['grains', 'spices', 'utensils','vegetables']
        },
        bathroom:{
            isClean: false,
            isOccupied: true
        }

    },
    timeSinceLastClean: days,
    dateOfArrival: "August 13, 2023 12:00:00 EST",

// functions typically perform actions on the properties of the object. Following are the two methods to create a function.
// Properties with functions are called methods. Example: cleanRoom, notCleanRoom etc.

    cleanRoom: function(){
        this.section.bathroom.isClean = true;
        days = 0;
    },
    notCleanRoom(){
        days++;
    },

    ageSincePurchase(){
        let now = new Date();
        let arrivalDate = new Date(this.dateOfArrival);
/**
 * `new Date()` is a global object and is available to use in the browser anytime.
 *  this very function calculated the time elapsed since 1 January 1970 UTC. 
 */
        let elapsed = now - arrivalDate;
        let ageOfRoom = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        return ageOfRoom

    }

};

console.log("Testing the Object created:", room909)

/**
 * TEMPLATE LITERALS 
 * js and html integration.
 */

const content = `
<main>
<article>
    <h1>Room Details: ${room909.name}</h1>
    <ul>
        <li>Name: ${room909.owner}</li>
        <li>Number of Roommates:${room909.numRoomates}</li>
        <li>Name of Roommates:${room909.roomates}</li>
        <li>Is the room/dorm occupied? ${room909.isOccupied}</li>
        <li>Number of Days since Arrival: ${room909.ageSincePurchase()}</li>

    </ul>
</article>
</main>
`;

document.body.innerHTML = content;
