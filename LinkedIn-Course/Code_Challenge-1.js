// JavaScript code​​​​​​‌​‌​‌‌‌​‌​‌​​​​​​​‌​‌​​‌‌ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const bookTitle = "Alice's Adventures in Wonderland"
const bookAuthor = "Lewis Carroll"
const bookPubYear = 1865
const bookISBN = 9798369203415

// Your code goes here
class Book{
    constructor(
        title,
        author,
        ISBN,
        publicationYear
    ){    
        this.title = bookTitle;
        this.author = bookAuthor;
        this.ISBN = bookISBN;
        this.publicationYear = bookPubYear;
    }

}