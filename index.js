// Set header text
document.getElementById("header").textContent = "Flatbooks Technical Books";

// Book data
const books = [
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"
  },
  {
    title: "HTML and CSS: Design and Build Websites",
    author: "Jon Duckett",
    image: "https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX258_BO1,204,203,200_.jpg"
  }
];

// Select the book list
const bookList = document.getElementById("book-list");

// Loop through books
books.forEach(book => {
  const li = document.createElement("li");

  // Add title, author, and image
  li.innerHTML = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <img src="${book.image}" />
  `;

  bookList.appendChild(li);
});