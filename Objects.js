// Making objects in Javascript.
var days = 0;
// Objects are generally constants, we can change the properties inside the container,
// but we cannot remove or replace the object inside the container.
const room = {
    name: "Morgens:- 909",
    numRoomates: 3,
    roomates: ['Parth', 'Dang'],
    isOccupied: true,
    section: {
        kitchen:{
            stoveOn: true,
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
