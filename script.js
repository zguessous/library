const newBookBtn = document.querySelector("#newBookBtn");
const delAllBtn = document.querySelector("#delAllBtn");

const newBookDialog = document.querySelector("#newBookDialog");

const allBooksNmbr = document.querySelector("#allBooksNmbr");
const booksReadNmbr = document.querySelector("#booksReadNmbr");

newBookBtn.addEventListener("click", () => {
    newBookDialog.showModal();
});