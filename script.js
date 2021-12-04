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
  myLibrary.push(book1);
  // console.log(myLibrary);
  modal.style.display = "none";
  bookForm.reset();

  for(i=0;i<=myLibrary.length;i++)
  {
    console.log(myLibrary[i]);


  }
    // const container=document.createElement("div");
    // const box=document.createElement("div");
    // const titleOfBook=document.createElement("h3");
    // const authorOfBook=document.createElement("p");
    // const pagesOfBook=document.createElement("p");
    // const readBook=document.createElement("p");
    // const deleteIcon=document.createElement("div");
    
    // container.classList.add='book-templates';
    // box.classList.add='template-1';
    // titleOfBook.classList.add='template-heading';
    // authorOfBook.classList.add='template-optns';
    // pagesOfBook.classList.add='template-optns';
    // readBook.classList.add='template-optns';

    // titleOfBook.textContent=book1.title;
    // authorOfBook.textContent=book1.author;
    // pagesOfBook.textContent=book1.pages;
}




