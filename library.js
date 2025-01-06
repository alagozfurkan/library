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
    bookCreater(titleValue, authorValue, pages, readstate);
    addBookToLibrary(myLibrary)
    console.log(myLibrary)
    dialog.close()
    
})
      




function Book(title, author, pages, readstate, element) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstate = readstate;
    this.place = myLibrary.length;
    this.element = realDiv.cloneNode(true);
    
}


function bookCreater(title, author, pages, readstate) {
    let book = new Book(title, author, pages, readstate);
    myLibrary.push(book);
}





function addBookToLibrary(array) {

        
        
        array[array.length -1].element.querySelector("#bookname").textContent = array[array.length -1].title;
        array[array.length -1].element.querySelector("#author").textContent = array[array.length -1].author;
        array[array.length -1].element.querySelector("#pages").textContent = array[array.length -1].pages;
        if (array[array.length -1].readstate == "read") {
            array[array.length -1].element.querySelector("#readstate").textContent = "Read"
        } else {
            array[array.length -1].element.querySelector("#readstate").textContent = "To Read"
        }

        var deleteButton = document.createElement("BUTTON");
        var readButton = document.createElement("BUTTON");
        var buttons = document.createElement("div");

        // implement a readstate changer

        deleteButton.addEventListener("click", function() {
            
            let found = array.find((elementt) => elementt.title == deleteButton.parentElement.parentElement.querySelector("#bookname").textContent)
            deleteButton.parentElement.parentElement.remove()
            if (array.length == 1) {
                array.pop()
            } else {
                let x =  array.splice(found.place, 1);
                console.log(myLibrary)
           
            }
            
           
        })

        readButton.addEventListener("click" , function() {
            let found = array.find((elementt) => elementt.element == readButton.parentElement.parentElement);
            
            if (readButton.parentElement.parentElement.querySelector("#readstate").textContent == "Read") {
                readButton.parentElement.parentElement.querySelector("#readstate").textContent = "To Read"
                found.readstate = "To Read"
            } else {
                readButton.parentElement.parentElement.querySelector("#readstate").textContent = "Read"
                found.readstate = "Read"
            }
            
            console.log(myLibrary)
        })





        buttons.classList.add("buttons");
        array[array.length -1].element.appendChild(buttons);

        readButton.classList.add("readbutton");
        readButton.textContent = "Read"
        buttons.appendChild(readButton);
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete";
        buttons.classList.add("buttons");
        array[array.length -1].element.appendChild(buttons);
        containerDiv.appendChild(array[array.length -1].element);
        buttons.appendChild(deleteButton);
        
    } 



