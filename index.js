
const modal = document.getElementById("myModal");
const modalOpenBtn = document.getElementById("modal");
const modalClose = document.getElementById("close");
const addBookBtn = document.getElementById("btnaddBook");

const myLibrary = [];

function Book(titleInput, authorInput, pagesInput){
    this.titleInput = titleInput,
    this.authorInput = authorInput,
    this.pagesInput = pagesInput
}

function addBooktoLibrary(book){
    myLibrary.push(book);
}

function displayLibrary(){
      const Library = document.getElementById("Library");

      const newBook = document.createElement("div");
      newBook.className = "book";
      const titleDiv = document.createElement("div");
      titleDiv.className = "title";
      const titleLabel = document.createElement("label");
      titleLabel.textContent = "Title:";
      const titleP = document.createElement("p");
      titleP.textContent = document.getElementById("textInput").value;
      titleP.id = "bookTitle";

      const authorDiv = document.createElement("div");
      authorDiv.className = "author";
      const authorLabel = document.createElement("label");
      authorLabel.textContent = "Author:";
      const authorP = document.createElement("p");
      authorP.textContent = document.getElementById("authorInput").value;
      authorP.id = "bookAuthor";

      const pagesDiv = document.createElement("div");
      pagesDiv.className = "pages";
      const pagesLabel = document.createElement("label");
      pagesLabel.textContent = "Pages:";
      const pagesP = document.createElement("p");
      pagesP.textContent = document.getElementById("pagesInput").value;
      pagesP.id = "bookPages";


      Library.appendChild(newBook);
      newBook.appendChild(titleDiv);
      titleDiv.appendChild(titleLabel);
      titleDiv.appendChild(titleP);
      newBook.appendChild(authorDiv);
      authorDiv.appendChild(authorLabel);
      authorDiv.appendChild(authorP);
      newBook.appendChild(pagesDiv);
      pagesDiv.appendChild(pagesLabel);
      pagesDiv.appendChild(pagesP);

}

modalOpenBtn.onclick = function(){
    modal.style.display = "flex";
}
modalClose.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }

  }

  addBookBtn.onclick = function(){
    modal.style.display = "none";
    const titleInput = document.getElementById("textInput").value;
    const authorInput = document.getElementById("authorInput").value;
    const pagesInput = document.getElementById("pagesInput").value;
    const book = new Book(titleInput, authorInput, pagesInput);
    addBooktoLibrary(book);
    displayLibrary();
    console.log(myLibrary);
  }