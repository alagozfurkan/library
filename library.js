let realDiv = document.querySelector(".bookcard");
let allRealDiv = document.querySelectorAll(".bookcard");
let containerDiv = document.querySelector(".container");
let showDialog = document.querySelector("#showDialog");
let dialog = document.querySelector("#dialog");
let closebutton = document.querySelector("#closebutton");
let confirmbutton = document.querySelector("#confirmbutton");
let booktitle = document.querySelector("#title")
var nodes = document.querySelector(".container").childNodes;


showDialog.addEventListener("click", function() {
    while (nodes.length > 0) {
        nodes[0].remove();
    }
    dialog.showModal();
});

closebutton.addEventListener("click", function() {
    dialog.close();
})

confirmbutton.addEventListener("click", function(event) {
    let titleValue = document.getElementById("title").value
    event.preventDefault()
    myLibrary.push(new Book(titleValue, "selam", 31, false));
    addBookToLibrary(myLibrary)
    dialog.close()
})
      

















function Book(title, author, pages, readstate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstate = readstate;
}





const myLibrary = [];



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
    



