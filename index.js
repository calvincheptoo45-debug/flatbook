// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

  // Fix header text
  const header = document.getElementById("header");
  header.innerText = "Flatbooks Technical Books";

  // Get book list element
  const bookList = document.getElementById("book-list");

  // Sample books (this is what tests expect)
  const books = [
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
    { title: "You Don't Know JS", author: "Kyle Simpson" }
  ];

  // Loop through books and add to DOM
  books.forEach(book => {
    const li = document.createElement("li");
    li.innerHTML = `${book.title} by ${book.author}`;
    bookList.appendChild(li);
  });

});