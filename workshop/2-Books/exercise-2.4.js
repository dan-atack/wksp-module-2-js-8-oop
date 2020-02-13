// From 2.3
// Copy over all of the code from 2.3...

class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.startReadDate = startReadDate;
        this.endReadDate = endReadDate;
    }
};

let book1 = new Book("Harry Potter and the Wizard of Javascript", "fantasy", "JK Simmons", true, "19-12-2019", "28-12-2019");
let book2 = new Book("Werner Von Braun: A Morally Ambiguous Life", "biography", "S. R. Dude", true, "10-09-2019", "10-10-2019");
let book3 = new Book("Man on the Moon: The Niel Armstrong Story", "biography", "Jay Barbree", true, "22-05-2019", "24-06-2019");
let book4 = new Book("A Brief History of Time", "science", "Stephen /'the Hawk/' Hawking", true, "11-11-2018", "18-04-2019");
let book5 = new Book("Ulysses", "experimental", "James Joyce", false);

//

class BookList {
    constructor() {
        this.booksRead = 0;
        this.booksUnread = 0;
        this.books = [];
        this.lastBook = null;
        this.currentlyReading = null;
        this.upNext = null;
    }
    // Add method is pretty basic:  give a book object and it pushes that to the books list and adjusts the value of books read/unread.
    add = (book) => {
        this.books.push(book);
        if (book.read) {
            this.booksRead += 1;
        } else {
            this.booksUnread += 1;
        }
    }
    // Slightly less basic here: Search the books list by index and set the book whose title matches the bookTitle argument to currently reading.
    startReading = (bookTitle) => {
        for (let i = 0; i < this.books.length; i++) {       // Make sure you search exactly the right amount of times (Sadnan knows what I'm talking about)
            if (this.books[i].title == bookTitle) {
                this.currentlyReading = this.books[i];
                let today = new Date();                     // Get date from the Date object
                this.books[i].startReadDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;        // Make a string out of the date object's date, time and month methods.
            }
        }
    }
    finishReading = (bookTitle) => {
        for (let i = 0; i <this.books.length; i++) {        // Same as above essentially - use a for loop to find the right book, then update a bunch of properties
            if (this.books[i].title == bookTitle) {
                this.lastBook = this.books[i];
                this.currentlyReading = null;
                this.books[i].read = true;
                let today = new Date();
                this.books[i].endReadDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
                this.booksRead += 1;
                this.booksUnread -= 1;
            }
        }
        for (let i = this.books.length; i > 0; i--) {                     // Reverse index cycle: Go backwards through the index!
            if (!(this.books[i-1].read)) this.upNext = this.books[i-1];        // This line says, as you go through the list of books (backwards), update the upNext value to the last of the books you find for which 'read' isn't true.
        };
    }
};

let homeLibrary = new BookList();

homeLibrary.add(book1);
homeLibrary.add(book2);
homeLibrary.add(book3);
homeLibrary.add(book4);
homeLibrary.add(book5);

//console.log(homeLibrary);

homeLibrary.add(new Book ("The Guns of August", "history", "Barbara Tuckman", true, "08-11-2019", "15-11-2019"));
homeLibrary.add(new Book("Vietnam", "history", "Max Hastings", false));
homeLibrary.add(new Book("The Dark Tower", "fantasy", "Stephen King", false));

homeLibrary.startReading("Vietnam");

homeLibrary.finishReading("Vietnam");

homeLibrary.startReading("The Dark Tower")

console.log(homeLibrary);

// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
