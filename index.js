// Book data
const books = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
  },
  {
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    image: "https://covers.openlibrary.org/b/id/8231990-L.jpg"
  },
  {
    title: "The River Between",
    author: "Ngugi wa Thiong'o",
    image: "https://covers.openlibrary.org/b/id/8232001-L.jpg"
  }
];

// change the page title
const mainTitle = document.getElementById("main-title");
mainTitle.textContent = "Flatbook Store";

// get the container
const bookList = document.getElementById("book-list");

// loop through books
books.forEach(function(book) {

  const bookCard = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = book.author;

  const image = document.createElement("img");
  image.src = book.image;
  image.width = 150;

  // add elements to card
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(image);

  // add card to page
  bookList.appendChild(bookCard);
});