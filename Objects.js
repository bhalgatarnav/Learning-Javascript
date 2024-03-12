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
    3
)


console.log("Testing the Class created:", room509)

/**
 * The code below showcases the attempt to understand the objects in Javascript. The code is written before, 10 March 2024.
 */
// Making objects in Javascript.
var days = 0;
// Objects are generally constants, we can change the properties inside the container,
// but we cannot remove or replace the object inside the container.
const room909 = {
    name: "Morgens:- 909",
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

// functions typically perform actions on the properties of the object. Following are the two methods to create a function.
// Properties with functions are called methods. Example: cleanRoom, notCleanRoom etc.
    cleanRoom: function(){
        this.section.bathroom.isClean = true;
        days = 0;
    },
    notCleanRoom(){
        days++;
    }

};

console.log("Testing the Object created:", room909)