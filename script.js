const addBook = document.getElementById("add-book");
const modal = document.getElementById("myModal");
const bookForm = document.getElementById("form");
const btn = document.getElementById("add-book");
const cancelBtn = document.getElementById("cancel-create-book");
const submitBtn = document.getElementById("create-book");

btn.addEventListener("click", function () {
  modal.style.display = "block";
});
cancelBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
let myLibrary = [];
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

submitBtn.addEventListener("click", submitForm);
function submitForm() {
  let bookTitle = document.getElementById("book-title").value;
  let bookAuthor = document.getElementById("book-author").value;
  let bookPages = document.getElementById("book-pages").value;
  const book1 = new Book(bookTitle, bookAuthor, bookPages);
  // console.log(exp1.title,exp1.author,exp1.pages);
  myLibrary.push(book1);
  // console.log(myLibrary[1]);
  modal.style.display = "none";
  bookForm.reset();
}
