let myLibrary = [
    { name: "Hatchet", author: "Gary Paulsen", pages: "195", read: "Yes" },
    { name: "To Kill a Mockingbird", author: "Harper Lee", pages: "336", read: "No" },
];

const bookshelf = document.querySelector(".bookshelf");

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {}

function displayBooks() {
    myLibrary.forEach(function (book, index) {
        let div = document.createElement("div");
        div.textContent = `Name: ${book.name}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`;
        bookshelf.appendChild(div);
    });
}

displayBooks();
