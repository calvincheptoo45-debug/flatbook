// Sample list of books (you can modify or expand this)
const books = [
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018
  },
  {
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    year: 2020
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008
  }
];

// 1. Update page title
const pageTitle = document.getElementById("page-title");
pageTitle.textContent = "📚 Flatbook — Your Local Bookstore";

// 2. Add books to the DOM
const booksList = document.getElementById("books-list");

books.forEach(book => {
  // Create container for a single book
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  // Create title
  const bookTitle = document.createElement("h2");
  bookTitle.textContent = book.title;

  // Create author paragraph
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `Author: ${book.author}`;

  // Create year paragraph
  const bookYear = document.createElement("p");
  bookYear.textContent = `Published: ${book.year}`;

  // Append to book div
  bookDiv.append(bookTitle, bookAuthor, bookYear);

  // Append to entire list
  booksList.appendChild(bookDiv);
});