let myLibrary = [];

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
    //prevents empty object being added
    if (!event.target.elements.name.value) {
        return;
    }
    event.preventDefault();

    const bookName = event.target.elements.name.value;
    const bookAuthor = event.target.elements.author.value;
    const bookPages = event.target.elements.pages.value;
    const bookRead = event.target.elements.read.value;

    console.log(bookRead);

    addBookToLibrary(bookName, bookAuthor, bookPages, bookRead);
    event.target.reset();
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
    displayBooks();
}

function displayBooks() {
    myLibrary.forEach((book, index) => {
        if (bookshelf.textContent.includes(book.name)) {
            return;
        } else {
            let div = document.createElement("div");
            let namePara = document.createElement("p");
            let authorPara = document.createElement("p");
            let pagesPara = document.createElement("p");
            let readPara = document.createElement("p");
            let burnBook = document.createElement("button");

            authorPara.textContent = `Author: ${book.author}`;
            namePara.textContent = `Title: ${book.name}`;
            pagesPara.textContent = `Pages: ${book.pages}`;
            readPara.textContent = `Read: ${book.read}`;
            burnBook.textContent = "Burn Book";
            burnBook.classList.add("remove");
            div.classList.add("card");
            div.setAttribute("data-index", index);

            bookshelf.appendChild(div);

            div.appendChild(authorPara);
            div.appendChild(namePara);
            div.appendChild(pagesPara);
            div.appendChild(readPara);
            div.appendChild(burnBook);
        }
    });
}

displayBooks();
