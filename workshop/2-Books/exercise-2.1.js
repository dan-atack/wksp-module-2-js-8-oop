// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

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

console.log(book1, book2, book3, book4, book5);