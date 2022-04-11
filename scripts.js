let myLibrary = [];

const bookshelf = document.querySelector(".bookshelf");
const newBookBtn = document.querySelector(".newBook");
const bookForm = document.querySelector(".bookForm");
const formContainer = document.querySelector(".formContainer");
const cancelBtn = document.querySelector(".cancel");
const addBook = document.querySelector(".addBook");

newBookBtn.addEventListener("click", () => {
    bookForm.style.display = "inline";
    formContainer.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
    bookForm.style.display = "none";
    formContainer.style.display = "none";
});

bookshelf.addEventListener("click", (event) => {
    let bookIndex = event.target.parentElement.getAttribute("data-index");
    if (event.target.getAttribute("class") == "remove") {
        console.log(bookIndex);
        console.log(event.target.getAttribute("class"));
        removeBook(bookIndex);
    } else {
        return;
    }
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

    //prevents dup books from being added
    if (myLibrary.some((book) => book.name == bookName)) {
        console.log("Book already exists");
        event.target.reset();
        return;
    }

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
            let readBtn = document.createElement("button");

            authorPara.textContent = `Author: ${book.author}`;
            namePara.textContent = `Title: ${book.name}`;
            pagesPara.textContent = `Pages: ${book.pages}`;
            readPara.textContent = `Read: ${book.isRead}`;
            burnBook.textContent = "Burn Book";
            burnBook.classList.add("remove");
            readBtn.textContent = "Read";
            div.classList.add("card");
            div.setAttribute("data-index", index);

            bookshelf.appendChild(div);

            div.appendChild(authorPara);
            div.appendChild(namePara);
            div.appendChild(pagesPara);
            div.appendChild(readPara);
            div.appendChild(burnBook);
            div.appendChild(readBtn);
        }
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    bookshelf.innerHTML = "";
    displayBooks();
}
