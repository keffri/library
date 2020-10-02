let newBookButton = document.querySelector(".new-book");
let newBookForm = document.querySelector(".form-div");
let bookForm = document.querySelector(".book-form");
let closeBookForm = document.querySelector(".close-new-book");
let addBookButton = document.querySelector(".add-book");
let newBook;
let library = document.querySelector(".library");
let libraryBooks;

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToLibrary(title, author, pages, read) {
  title = document.querySelector("[data-title]").value;
  author = document.querySelector("[data-author]").value;
  pages = document.querySelector("[data-pages]").value;
  read = document.querySelector("[data-read]").checked;
  bookForm.reset();

  if (title === "" || author === "" || pages === "" || read === "") {
    alert("Please complete the form.");
    newBook = undefined;
    return;
  }

  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return newBook;
}

function createBook() {
  if (newBook === undefined) {
    return;
  }

  let libraryBook;
  libraryBook = document.createElement("div");
  libraryBook.classList.add("library-book");

  let bookTitle = document.createElement("p");
  bookTitle.textContent = newBook.title;

  let bookAuthor = document.createElement("p");
  bookAuthor.textContent = newBook.author;

  let bookPages = document.createElement("p");
  bookPages.textContent = newBook.pages;

  let bookRead = document.createElement("p");

  let bookStatus = document.createElement("button");
  bookStatus.classList.add("book-status");
  bookStatus.textContent = "Book status";

  if (newBook.read === true) {
    bookRead.textContent = "Read";
    libraryBook.style.backgroundColor = "#718c71";
  } else {
    bookRead.textContent = "Unread";
    libraryBook.style.backgroundColor = "#8c7171";
  }

  bookStatus.onclick = function () {
    if (bookRead.textContent === "Read") {
      libraryBook.style.backgroundColor = "#8c7171";

      bookRead.textContent = "Unread";
    } else if (bookRead.textContent === "Unread") {
      libraryBook.style.backgroundColor = "#718c71";
      bookRead.textContent = "Read";
    }
  };

  let bookDelete = document.createElement("button");
  bookDelete.classList.add("book-delete");
  bookDelete.textContent = "Delete book";
  bookDelete.onclick = function () {
    library.removeChild(libraryBook);
    myLibrary.splice(libraryBook, 1);
  };

  if (newBook.read) libraryBook.appendChild(bookTitle);
  libraryBook.appendChild(bookTitle);
  libraryBook.appendChild(bookAuthor);
  libraryBook.appendChild(bookPages);
  libraryBook.appendChild(bookRead);
  libraryBook.appendChild(bookStatus);
  libraryBook.appendChild(bookDelete);
  library.appendChild(libraryBook);
  libraryBooks = document.querySelectorAll(".library-book");
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.table(myLibrary[i]);
  }
}

function show() {
  newBookForm.style.visibility = "visible";
  newBookForm.style.position = "relative";
}

function hide() {
  newBookForm.style.visibility = "hidden";
  newBookForm.style.position = "absolute";
}

newBookButton.addEventListener("click", show);
closeBookForm.addEventListener("click", hide);
addBookButton.addEventListener("click", addToLibrary);
addBookButton.addEventListener("click", createBook);
