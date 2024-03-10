// Making objects in Javascript.
var days = 0;
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
    
    cleanRoom: function(){
        this.section.bathroom.isClean = true;
        this.timeSinceLastClean = 0;
    },
    notCleanRoom: function(){
        days++;
    }

};
