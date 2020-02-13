// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2

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

    add = (book) => {
        this.books.push(book);
        if (book.read) {
            this.booksRead += 1;
        } else {
            this.booksUnread += 1;
        }
    }
};

let homeLibrary = new BookList();

homeLibrary.add(book1);
homeLibrary.add(book2);
homeLibrary.add(book3);
homeLibrary.add(book4);
homeLibrary.add(book5);

console.log(homeLibrary);

homeLibrary.add(new Book ("The Guns of August", "history", "Barbara Tuckman", true, "08-11-2019", "15-11-2019"));

console.log(homeLibrary.booksRead);

// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.
