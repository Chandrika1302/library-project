const addBookButton = document.getElementById("add-book");
const bookForm = document.getElementById("form");
const cancelBtn = document.getElementById("cancel-create-book");

// const submitBtn = document.getElementById("create-book");
// const appendElements = document.getElementById("book-templates");
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

  const form=e.target; 

  const bookTitle=form.title.value;
  const bookAuthor=form.author.value;
  const bookPages=form.pages.value;
  const bookRead=form.read.value;

  const book=new Book(bookTitle,bookAuthor,bookPages,bookRead);
  myLibrary.push(Book);

 

  return;
 

  const box = document.createElement("div");
  const titleOfBook = document.createElement("h3");
  const authorOfBook = document.createElement("p");
  const pagesOfBook = document.createElement("p");
  const readBook = document.createElement("p");
  const deleteIcon = document.createElement("div");

  box.classList.add("template-1");
  titleOfBook.classList.add("template-heading");
  authorOfBook.classList.add("template-optns");
  pagesOfBook.classList.add("template-optns");
  readBook.classList.add("read-div");
  deleteIcon.classList.add("delete-icon");

  titleOfBook.textContent = book1.title;
  authorOfBook.textContent = book1.author;
  pagesOfBook.textContent = book1.pages;
  book1.read == "Yes"
    ? (readBook.innerText = "Read")
    : (readBook.innerText = "Not Read");

  deleteIcon.innerHTML =
    '<i class="fas fa-trash-alt" id="trash-icon" onClick="deleteTemplate()"></i>';

  box.appendChild(deleteIcon);
  box.appendChild(titleOfBook);
  box.appendChild(authorOfBook);
  box.appendChild(pagesOfBook);
  box.appendChild(readBook);

  appendElements.appendChild(box);

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

function deleteTemplate() {
  alert("hi");
}
