const addBookButton = document.getElementById("add-book");
const bookForm = document.getElementById("form");
const cancelBtn = document.getElementById("cancel-create-book");
const bookContainer = document.querySelector("#book-templates");

addBookButton.addEventListener("click", toggleBookModal);
cancelBtn.addEventListener("click", toggleBookModal);
bookForm.addEventListener("submit", submitForm);

const myLibrary = [];

function toggleBookModal() {
  const Bookmodal = document.getElementById("myModal");
  Bookmodal.classList.toggle("hide");
}

function submitForm(e) {
  e.preventDefault();

  const form = e.target;
  const book = createBook(form);

  myLibrary.push(book);

  const bookDiv = createBookDiv(book);
  display(myLibrary, bookContainer);

  toggleBookModal();
  form.reset();
}

function createBookDiv(book, index) {
  const bookDiv = document.createElement("div");
  const titleOfBook = document.createElement("h3");
  const authorOfBook = document.createElement("p");
  const pagesOfBook = document.createElement("p");
  const readBook = document.createElement("p");
  const deleteDiv = document.createElement("div");
  const deleteIcon = document.createElement("i");

  bookDiv.classList.add("template-1");
  titleOfBook.classList.add("template-heading");
  authorOfBook.classList.add("template-optns");
  pagesOfBook.classList.add("template-optns");
  readBook.classList.add("read-div");
  deleteDiv.classList.add("delete-container");
  deleteIcon.className = "fas fa-trash-alt";
  bookDiv.setAttribute("data-chandrika", index);

  titleOfBook.textContent = book.title;
  authorOfBook.textContent = book.author;
  pagesOfBook.textContent = book.pages;
  if (book.read === "yes") {
    readBook.innerText = "Read";
  } else {
    readBook.innerText = "Not Read";
    readBook.classList.add("unread-book");
  }

  deleteDiv.addEventListener("click", deleteBook);

  deleteDiv.appendChild(deleteIcon);
  bookDiv.appendChild(deleteDiv);
  bookDiv.appendChild(titleOfBook);
  bookDiv.appendChild(authorOfBook);
  bookDiv.appendChild(pagesOfBook);
  bookDiv.appendChild(readBook);

  return bookDiv;
}

function createBook(form) {
  const bookTitle = form.title.value;
  const bookAuthor = form.author.value;
  const bookPages = form.pages.value;
  const bookRead = form.read.value;
  const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  return book;
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function display(library, container) {
  container.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const bookDiv = createBookDiv(book, i);
    container.appendChild(bookDiv);
  }
}

function deleteBook(e) {
  const deleteDiv = e.target;
  const bookDiv = deleteDiv.parentElement.parentElement;
  const targetIndex = bookDiv.getAttribute("data-chandrika");
  myLibrary.splice(targetIndex, 1);
  display(myLibrary, bookContainer);
}
