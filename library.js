let realDiv = document.querySelector(".bookcard");
let allRealDiv = document.querySelectorAll(".bookcard");
let containerDiv = document.querySelector(".container");
let showDialog = document.querySelector("#showDialog");
let dialog = document.querySelector("#dialog");
let closebutton = document.querySelector("#closebutton");
let confirmbutton = document.querySelector("#confirmbutton");
let booktitle = document.querySelector("#title")
var nodes = document.querySelector(".container").childNodes;




var deleteButton = document.createElement("BUTTON");
deleteButton.classList.add("delete");
showDialog.addEventListener("click", function() {
    
    dialog.showModal();
});

closebutton.addEventListener("click", function(event) {
    
    dialog.close();
    
    
})










const myLibrary = [];

confirmbutton.addEventListener("click", function(event) {
    let titleValue = document.getElementById("title").value
    let authorValue = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let readstate = document.getElementById("cars").value
    event.preventDefault()
    let book = new Book(titleValue, authorValue, pages, readstate);
    console.log(book)
    myLibrary.push(book);
    console.log()
    addBookToLibrary(myLibrary)
    dialog.close()
})
      

















function Book(title, author, pages, readstate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstate = readstate;
    this.place = myLibrary.length;
    
}











function addBookToLibrary(array) {
    
        clonedDiv = realDiv.cloneNode(true);
        clonedDiv.class = ".bookcard";
        clonedDiv.querySelector("#bookname").textContent = array[array.length -1].title;
        clonedDiv.querySelector("#author").textContent = array[array.length -1].author;
        clonedDiv.querySelector("#pages").textContent = array[array.length -1].pages;
        if (array[array.length -1].readstate == "read") {
            clonedDiv.querySelector("#readstate").textContent = "Read"
        } else {
            clonedDiv.querySelector("#readstate").textContent = "To Read"
        }

        var deleteButton = document.createElement("BUTTON");

        // implement a readstate changer

        deleteButton.addEventListener("click", function() {
           deleteButton.parentElement.remove()
            
        })








        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete";
        containerDiv.appendChild(clonedDiv);
        clonedDiv.appendChild(deleteButton);
      
    }
    



