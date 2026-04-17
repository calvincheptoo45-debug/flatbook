// Set the header text
document.getElementById("header").textContent = "Flatbooks Technical Books";

// Full list of books (ALL required ones)
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
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    image: "https://images-na.ssl-images-amazon.com/images/I/81XkqYAq-GL.jpg"
  }
];

// Select the list
const bookList = document.getElementById("book-list");

// Loop through ALL books and render them
books.forEach(book => {
  const li = document.createElement("li");

  li.innerHTML = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <img src="${book.image}">
  `;

  bookList.appendChild(li);
});