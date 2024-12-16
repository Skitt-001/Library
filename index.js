
const modal = document.getElementById("myModal");
const modalOpenBtn = document.getElementById("modal");
const modalClose = document.getElementById("close");
const addBookBtn = document.getElementById("btnaddBook");
const clearBooks = document.getElementById("modalClear");
const isReadBtn = document.getElementById("btnIsRead1");

let myLibrary = [];
listIndex = 0;

function Book(titleInput, authorInput, pagesInput, isRead, listIndex){
    this.titleInput = titleInput,
    this.authorInput = authorInput,
    this.pagesInput = pagesInput,
    this.isRead = isRead,
    this.listIndex = listIndex
}

function addBooktoLibrary(book){
    myLibrary.push(book);
}

function displayLibrary(){
  const library = document.getElementById("Library");
  library.innerHTML = ""; // Clear the library container

  myLibrary.forEach((book, index) => {
      const newBook = document.createElement("div");
      newBook.className = "book";

      const titleDiv = document.createElement("div");
      titleDiv.className = "title";
      const titleLabel = document.createElement("label");
      titleLabel.textContent = "Title:";
      const titleP = document.createElement("p");
      titleP.textContent = book.titleInput;
      titleP.id = "bookTitle";

      const authorDiv = document.createElement("div");
      authorDiv.className = "author";
      const authorLabel = document.createElement("label");
      authorLabel.textContent = "Author:";
      const authorP = document.createElement("p");
      authorP.textContent = book.authorInput;
      authorP.id = "bookAuthor";

      const pagesDiv = document.createElement("div");
      pagesDiv.className = "pages";
      const pagesLabel = document.createElement("label");
      pagesLabel.textContent = "Pages:";
      const pagesP = document.createElement("p");
      pagesP.textContent = book.pagesInput;
      pagesP.id = "bookPages";

      const buttonDiv = document.createElement("div");
      buttonDiv.classname = "buttons"

      const deleteBtn = document.createElement("button");
      deleteBtn.id = "deleteButton";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        displayLibrary();
      })

      const newButton = document.createElement("button");
      newButton.id = "btnIsRead2";
      newButton.textContent = book.isRead ? "Read" : "Not Read";
      newButton.style.backgroundColor = book.isRead ? "rgb(14, 90, 10)" : "rgb(123, 19, 19)";
      newButton.addEventListener('click', () => {
          book.isRead = !book.isRead;
          newButton.textContent = book.isRead ? "Read" : "Not Read";
          newButton.style.backgroundColor = book.isRead ? "rgb(14, 90, 10)" : "rgb(123, 19, 19)";
      });

      library.appendChild(newBook);
      newBook.appendChild(titleDiv);
      titleDiv.appendChild(titleLabel);
      titleDiv.appendChild(titleP);
      newBook.appendChild(authorDiv);
      authorDiv.appendChild(authorLabel);
      authorDiv.appendChild(authorP);
      newBook.appendChild(pagesDiv);
      pagesDiv.appendChild(pagesLabel);
      pagesDiv.appendChild(pagesP);
      newBook.appendChild(buttonDiv);
      buttonDiv.appendChild(newButton);
      buttonDiv.appendChild(deleteBtn);
  });
}

function clearInput(){
  const titleInput = document.getElementById("textInput");
  const authorInput = document.getElementById("authorInput");
  const pagesInput = document.getElementById("pagesInput");
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
}

function checkIsRead(){
  if (isReadBtn.textContent === "Read"){
    return true;
  }
  else if (isReadBtn.textContent === "Not Read"){
    return false;
  }
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
    const isRead = checkIsRead();
    const titleInput = document.getElementById("textInput").value;
    const authorInput = document.getElementById("authorInput").value;
    const pagesInput = document.getElementById("pagesInput").value;
    const book = new Book(titleInput, authorInput, pagesInput, isRead, listIndex);

    if (listIndex === 0){
      addBooktoLibrary(book);
      displayLibrary();
      console.log(myLibrary);
      clearInput();
      listIndex += 1;
    }
    else if (listIndex >= 1){
      addBooktoLibrary(book);
      displayLibrary();
      console.log(myLibrary);
      clearInput();
      listIndex += 1;
    }
  }

  clearBooks.onclick = function(){
    myLibrary = [];
    Library.textContent = "";
  }

  isReadBtn.onclick = function(){
    if (isReadBtn.textContent === "Read"){
      isReadBtn.textContent = "Not Read";
      isReadBtn.style.backgroundColor = "rgb(123, 19, 19)"
    }
    else if (isReadBtn.textContent === "Not Read"){
      isReadBtn.textContent = "Read";
      isReadBtn.style.backgroundColor = "rgb(14, 90, 10)";
    }
  }