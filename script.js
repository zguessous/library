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
const bookItemDivs = [];

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

    const itemDiv = document.createElement("div");
    
    const cardDiv = document.createElement("div");
    const buttonsDiv = document.createElement("div");
    
    const boxDiv = document.createElement("div");
    const toggleDiv = document.createElement("div");
    const checkboxInput = document.createElement("input");
    const knobDiv = document.createElement("div");
    const pKnob = document.createElement("p");
    const button = document.createElement("button");
    const delIcon = document.createElement("i");

    cardDiv.classList.add("card","book");
    cardDiv.setAttribute("id", index);
    if (book.url === "") {
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        h2.textContent = book.title;
        p.textContent = "by "+book.author;
        cardDiv.appendChild(h2);
        cardDiv.appendChild(p);
    } else {
        const img = document.createElement("img");
        img.setAttribute("src", book.url);
        img.setAttribute("alt", book.title+" by "+book.author);
        img.setAttribute("title", book.title+" by "+book.author);
        cardDiv.appendChild(img);
    }

    buttonsDiv.classList.add("btns");
    toggleDiv.classList.add("toggle");
    checkboxInput.classList.add("checkbox");
    checkboxInput.type = "checkbox";
    checkboxInput.checked = book.status;
    knobDiv.classList.add("knob");
    pKnob.textContent = "Not Read";
    delIcon.setAttribute("class", "fa fa-trash-o");

    itemDiv.appendChild(cardDiv);
    itemDiv.appendChild(buttonsDiv);
    buttonsDiv.appendChild(boxDiv);
    buttonsDiv.appendChild(button);
    boxDiv.appendChild(toggleDiv);
    toggleDiv.appendChild(checkboxInput);
    toggleDiv.appendChild(knobDiv);
    knobDiv.appendChild(pKnob);
    button.appendChild(delIcon);
    
    
    mainSection.appendChild(itemDiv);
    bookItemDivs.push(cardDiv);
    index++;
}

function deleteBookFromLibrary (book) {

}