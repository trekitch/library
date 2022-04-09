let myLibrary = [
    { name: "Hatchet", author: "Gary Paulsen", pages: "195", read: "Yes" },
    { name: "To Kill a Mockingbird", author: "Harper Lee", pages: "336", read: "No" },
];

const bookshelf = document.querySelector(".bookshelf");
const newBookBtn = document.querySelector(".newBook");
const bookForm = document.querySelector(".bookForm");
const formContainer = document.querySelector(".formContainer");
const cacnelBtn = document.querySelector(".cancel");
const addBook = document.querySelector(".addBook");

newBookBtn.addEventListener("click", () => {
    bookForm.style.display = "inline";
    formContainer.style.display = "flex";
});

cacnelBtn.addEventListener("click", () => {
    bookForm.style.display = "none";
    formContainer.style.display = "none";
});

bookForm.addEventListener("submit", (event) => {
    console.log(`Form Submitted! Time stamp: ${event.timeStamp}`);
    event.preventDefault();
    console.log(event.target.elements.name.value);
    console.log(event.target.elements.author.value);
    console.log(event.target.elements.pages.value);
    console.log(event.target.elements.read.value);
});

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(name, author, pages, read) {
    let book = new Book(name, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(function (book, index) {
        let div = document.createElement("div");
        let namePara = document.createElement("p");
        let authorPara = document.createElement("p");
        let pagesPara = document.createElement("p");
        let readPara = document.createElement("p");

        authorPara.textContent = `Author: ${book.author}`;
        namePara.textContent = `Title: ${book.name}`;
        pagesPara.textContent = `Pages: ${book.pages}`;
        readPara.textContent = `Read: ${book.read}`;
        div.classList.add("card");

        bookshelf.appendChild(div);

        div.appendChild(authorPara);
        div.appendChild(namePara);
        div.appendChild(pagesPara);
        div.appendChild(readPara);
    });
}

displayBooks();
