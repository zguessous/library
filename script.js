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

const mainSection = document.querySelector("main");

let index = 0;
const myLibrary = [];
const bookCardDiv = [];

// Event Listeners

newBookBtn.addEventListener("click", () => {
    newBookDialog.showModal();
});
delAllBtn.addEventListener("click", () => {
    
});
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = new Book(titleUserInput.value, authorUserInput.value, urlUserInput.value, statusUserInput.checked);
    addBookToLibrary(newBook);
    newBookDialog.close();
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

    const div = document.createElement("div");
    div.classList.add("card","book");
    div.setAttribute("id", index);
    if (book.url === "") {
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        h2.textContent = book.title;
        p.textContent = "by "+book.author;
        div.appendChild(h2);
        div.appendChild(p);
    } else {
        const img = document.createElement("img");
        img.setAttribute("src", book.url);
        img.setAttribute("alt", book.title+" by "+book.author);
        img.setAttribute("title", book.title+" by "+book.author);
        img.style.width = "170px";
        img.style.height = "240px";
        div.appendChild(img);
    }
    mainSection.appendChild(div);
    bookCardDiv.push(div);
    index++;
}

function deleteBookFromLibrary (book) {

}