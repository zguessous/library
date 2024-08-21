const newBookBtn = document.querySelector("#newBookBtn");
const delAllBtn = document.querySelector("#delAllBtn");

const newBookDialog = document.querySelector("#newBookDialog");
const titleUserInput = newBookDialog.querySelector("#titleUserInput");
const authorUserInput = newBookDialog.querySelector("#authorUserInput");
const urlUserInput = newBookDialog.querySelector("#urlUserInput");
const statusUserInput = newBookDialog.querySelector("#statusUserInput");
const confirmBtn = newBookDialog.querySelector("#confirmBtn");
const cancelBtn = newBookDialog.querySelector("#cancelBtn");

const allBooksNmbr = document.querySelector("#allBooksNmbr");
const booksReadNmbr = document.querySelector("#booksReadNmbr");

const myLibrary = [];

// Event Listeners

newBookBtn.addEventListener("click", () => {
    newBookDialog.showModal();
});
delAllBtn.addEventListener("click", () => {
    
});
confirmBtn.addEventListener("click", (event) => {
    const newBook = new Book(titleUserInput.value, authorUserInput.value, urlUserInput.value, statusUserInput.checked);
    addBookToLibrary(newBook);
});
cancelBtn.addEventListener("click", () => {
    newBookDialog.close();
});

// Objects

function Book (title, author, url, status) {
    this.title = title;
    this.author = author;
    this.url = url;
    this.status = status;
}

// Functions

function addBookToLibrary (book) {
    myLibrary.push(book);
    console.log(myLibrary);
}

function deleteBookFromLibrary (book) {

}