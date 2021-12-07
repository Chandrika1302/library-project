const addBook = document.getElementById("add-book");
const modal = document.getElementById("myModal");
const bookForm = document.getElementById("form");
const cancelBtn = document.getElementById("cancel-create-book");
const submitBtn = document.getElementById("create-book");
const appendElements=document.getElementById('book-templates');

addBook.addEventListener("click", function () {
  modal.style.display = "block";
});
cancelBtn.addEventListener("click", function () {
  modal.style.display = "none";
});


let myLibrary = [];
function Book(title, author, pages,read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read=read
}

submitBtn.addEventListener("click", submitForm);
function submitForm() {
  let bookTitle = document.getElementById("input-book-title").value;
  let bookAuthor = document.getElementById("input-book-author").value;
  let bookPages = document.getElementById("input-book-pages").value;
  let bookRead=document.mainform.read.value;
 
  // console.log(bookRead);

  const book1 = new Book(bookTitle, bookAuthor, bookPages,bookRead);
  myLibrary.push(book1);
  modal.style.display = "none";
  bookForm.reset();
  console.log(myLibrary[myLibrary.length-1]);

  const box=document.createElement("div");
  const titleOfBook=document.createElement("h3");
  const authorOfBook=document.createElement("p");
  const pagesOfBook=document.createElement("p");
  const readBook=document.createElement("p");
  const deleteIcon=document.createElement("div");
  
  box.classList.add('template-1');
  titleOfBook.classList.add('template-heading');
  authorOfBook.classList.add('template-optns');
  pagesOfBook.classList.add('template-optns');
  readBook.classList.add('read-div');
  deleteIcon.classList.add('delete-icon')

  titleOfBook.textContent=book1.title;
  authorOfBook.textContent=book1.author;
  pagesOfBook.textContent=book1.pages;
  book1.read == ("Yes") ? readBook.innerText="Read" : readBook.innerText="Not Read";


  deleteIcon.innerHTML='<i class="fas fa-trash-alt" id="trash-icon" onClick="deleteTemplate()"></i>'

  box.appendChild(deleteIcon);
  box.appendChild(titleOfBook);
  box.appendChild(authorOfBook);
  box.appendChild(pagesOfBook);
  box.appendChild(readBook);
  
  appendElements.appendChild(box);

  if(bookRead=='No'){
    readBook.style.backgroundColor='red';
  }
}
function deleteTemplate(){
  // alert("hi");
}

   



