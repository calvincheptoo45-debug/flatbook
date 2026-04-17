document.getElementById("header").textContent = "Flatbooks Technical Books";

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

const bookList = document.getElementById("book-list");

books.forEach(book => {
  const li = document.createElement("li");

  li.innerHTML = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <img src="${book.image}">
    <p>${book.image}</p>
  `;

  bookList.appendChild(li);
});