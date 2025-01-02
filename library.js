let realDiv = document.querySelector(".bookcard");
let containerDiv = document.querySelector(".container")


function Book(title, author, pages, readstate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstate = readstate;
}


let book1 = new Book("ahmet", "kara", 35, true);
let book2 = new Book("mehmet", "Dostoyevski", 345, false);


const myLibrary = [book1, book2];



function addBookToLibrary(array) {
    for (let i = 0; i < array.length; i++) {
        clonedDiv = realDiv.cloneNode(true);
        clonedDiv.class = ".bookcard";
        clonedDiv.querySelector("#bookname").textContent = array[i].title;
        clonedDiv.querySelector("#author").textContent = array[i].author;
        clonedDiv.querySelector("#pages").textContent = array[i].pages;
        if (array[i].readstate === true) {
            clonedDiv.querySelector("#readstate").textContent = "Okundu"
        } else {
            clonedDiv.querySelector("#readstate").textContent = "Okunacak"
        }
        containerDiv.appendChild(clonedDiv);
      }
    }
    



addBookToLibrary(myLibrary);