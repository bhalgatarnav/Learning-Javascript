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
        _name,
        _numRoomates,
        roomates,
        is_Occupied,
        is_StoveOn,
        storage,
        isClean,
        timeSinceLastClean,
        // sample format: December 1, 2016 12:00:00 IST
        dateOfArrival

    )
    {
        // this is a keyword for showcasing the use and referencing the current object.
        this._name = _name;
        this._numRoomates = _numRoomates;
        this.roomates = roomates;
        this.is_Occupied = is_Occupied;
        this.section = {
            kitchen : {
                is_StoveOn : is_StoveOn,
                storage : storage
            },
            bathroom : {
                isClean : isClean,
                is_Occupied : is_Occupied
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