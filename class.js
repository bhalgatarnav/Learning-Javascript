/**
 * This js file will introduce the concept of classes and exporting it to the main file.
 */


/** CLASS DECLARATION
 * 
 * There are two kinds of class declarations:
 * class Name{...};
 * 
 * Expression type:-
 * const Name = class{...};
 */

const UC_room = class {
    
    constructor(
        name,
        numRoomates,
        roomates,
        isOccupied,
        isStoveOn,
        storage,
        isClean,
        isOccupied,
        // sample format: December 1, 2016 12:00:00 IST
        dateOfArrival,
        timeSinceLastClean
    )
    {
        // this is a keyword for showcasing the use and referencing the current object.
        this.name = name;
        this.numRoomates = numRoomates;
        this.roomates = roomates;
        this.isOccupied = isOccupied;
        this.section = {
            kitchen : {
                isStoveOn : isStoveOn,
                storage : storage
            },
            bathroom : {
                isClean : isClean,
                isOccupied : isOccupied
            } 

        }
        this.timeSinceLastClean = timeSinceLastClean;
        this.dateOfArrival = dateOfArrival;
    }
    cleanRoom(){
        this.section.bathroom.isClean = true;
        this.timeSinceLastClean = 0;
    }
    // other method to create a function.
    notCleanRoom = function(){
        this.timeSinceLastClean++;
    }

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

}
export default UC_room;