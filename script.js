const addBookButton = document.getElementById("add-book");
const bookForm = document.getElementById("form");
const cancelBtn = document.getElementById("cancel-create-book");
const bookContainer = document.querySelector("#book-templates");

addBookButton.addEventListener("click", toggleBookModal);
cancelBtn.addEventListener("click", toggleBookModal);

function toggleBookModal() {
  const Bookmodal = document.getElementById("myModal");
  console.log(Bookmodal);
  Bookmodal.classList.toggle("hide");
}

const myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

bookForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const form = e.target;

  const bookTitle = form.title.value;
  const bookAuthor = form.author.value;
  const bookPages = form.pages.value;
  const bookRead = form.read.value;

  const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(Book);

  const bookDiv = createBookDiv(book);
  bookContainer.appendChild(bookDiv);

  return;

  if (bookRead == "No") {
    readBook.style.backgroundColor = "red";
  }
}
// bookContainer.addEventListener('click',toggle)
// function toggle(event){
//   if(event.target.innerText=="Read"){
//   event.target.innerText="Not Read";
//   event.target.style.backgroundColor="red";
//   }
//   else if(event.target.innerText=="Not Read"){
//   event.target.innerText="Read";
//   event.target.style.backgroundColor="green";
//   }
// }

function createBookDiv(book) {
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
  deleteDiv.classList.add("delete-icon");
  deleteIcon.className = "fas fa-trash-alt";

  titleOfBook.textContent = book.title;
  authorOfBook.textContent = book.author;
  pagesOfBook.textContent = book.pages;
  if (book.read === "yes") {
    readBook.innerText = "Read";
  } else {
    readBook.innerText = "Not Read";
  }

  bookDiv.appendChild(deleteIcon);
  bookDiv.appendChild(titleOfBook);
  bookDiv.appendChild(authorOfBook);
  bookDiv.appendChild(pagesOfBook);
  bookDiv.appendChild(readBook);

  return bookDiv;
}
