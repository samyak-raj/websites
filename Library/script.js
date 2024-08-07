const myLibrary = [];

class Book{
    constructor(title, author, pages, readStatus){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    };
}

function addBooktoLibrary(Book){
    myLibrary.push(Book);
};

const addButton = document.getElementById("btnAdd");
addButton.addEventListener("click", () => {
    let dialogBox = document.getElementById("DialogBox");
    dialogBox.showModal();
});

const bookform = document.getElementById("Bookform");
const addBook = document.getElementById("addBook");
addBook.addEventListener("click", (e) => {
    e.preventDefault();
    let newTitle = document.getElementById("book-title").value;
    let newAuthor = document.getElementById("book-author").value;
    let pages = document.getElementById("book-pages").value;
    let isBookRead = document.getElementById("isBookRead").checked;
    let book = new Book(newTitle, newAuthor, pages, isBookRead);
    addBooktoLibrary(book);
    displayBook(myLibrary.length-1); //myLibrary.length-1 is used so that the most recent book is being displayed becuase at the end the for loop increase the value of i
    bookform.reset();
    closeDialogebox();
});

function closeDialogebox(){
    let closedDialogbox = document.getElementById("DialogBox");
    closedDialogbox.close();
}

const closeform = document.getElementById("closedialog");
closeform.addEventListener("click", (e) => {
    e.preventDefault();
    closeDialogebox();
});


function displayBook(i){
    const booksCollection = document.querySelector(".main");
    
    let newbook = document.createElement("div");
    newbook.className = "booksContainer";
    
    let title = document.createElement("p");
    title.className = "card";
    title.textContent = `"${myLibrary[i].title}"`;
    
    let author = document.createElement("p");
    author.className = "card";
    author.textContent = `By ${myLibrary[i].author}`;

    let pages = document.createElement("p");
    pages.textContent = `${myLibrary[i].pages} pages`;
    pages.className = "card";

    let status = document.getElementById("isBookRead");

    let readToggle = document.createElement("button");
    readToggle.className = myLibrary[i].readStatus ? "btnRead" : "btnUnread";
    readToggle.textContent = myLibrary[i].readStatus ? "Read" : "Unread";

    readToggle.addEventListener("click", () => {
        myLibrary[i].readStatus = !myLibrary[i].readStatus;
        readToggle.className = myLibrary[i].readStatus ? "btnRead" : "btnUnread";
        readToggle.textContent = myLibrary[i].readStatus ? "Read" : "Unread";
        console.log(readStatus);
    });

    let removebtn = document.createElement("button");
    removebtn.className = "btnRemove";
    removebtn.textContent = "Remove";

    removebtn.addEventListener("click", () => {
        newbook.remove();
    })

    newbook.appendChild(readToggle);
    newbook.appendChild(title);
    newbook.appendChild(author);
    newbook.appendChild(pages);
    newbook.appendChild(readToggle);
    newbook.appendChild(removebtn);
    booksCollection.appendChild(newbook);

};

//adding book manually
addBooktoLibrary(new Book("The Lord Of The Rings", "J.R.R. Tolkien", 1200, true));
displayBook(myLibrary.length-1)

for (i = 0; i < myLibrary.length; i++){
    displayBook();
};