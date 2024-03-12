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
    }
    cleanRoom(){
        this.section.bathroom.isClean = true;
        this.timeSinceLastClean = 0;
    }
    notCleanRoom(){
        this.timeSinceLastClean++;
    }
}

export default UC_room;