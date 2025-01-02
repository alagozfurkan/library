let realDiv = document.querySelector(".bookcard");
let containerDiv = document.querySelector(".container")
function Book(title, author, pages, readstate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstate = readstate;
}

let book1 = new Book("Sefiller", "Dostoyevski", 345, true);

function addBookToLibrary() {
    clonedDiv = realDiv.cloneNode(true);
    clonedDiv.class = ".bookcard";
    containerDiv.appendChild(clonedDiv);
}

addBookToLibrary();