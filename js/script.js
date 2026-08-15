const books = [
    {
        id: 1,
        title: "Foundations of Information Ethics",
        author: "John T. F. Burgess & Emily J. M. Knox",
        category: "Information Ethics",
        available: true
    },
    {
        id: 2,
        title: "Archives: Principles and Practices",
        author: "Laura A. Millar",
        category: "Archives",
        available: true
    },
    {
        id: 3,
        title: "Visual Research Methods: An Introduction for Library and Information Studies",
        author: "Shailoo Bedi & Jenaya Webb",
        category: "Research Methods",
        available: false
    },
    {
        id: 4,
        title: "Management Basics for Information Professionals",
        author: "G. Edward Evans & Stacey Greenwell",
        category: "Library Management",
        available: true
    },
    {
        id: 5,
        title: "Essential Law for Information Professionals",
        author: "Paul Pedley",
        category: "Information Law",
        available: true
    },
    {
        id: 6,
        title: "Foundations of Information Policy",
        author: "Paul T. Jaeger & Natalie Greene Taylor",
        category: "Information Policy",
        available: false
    },
    {
        id: 7,
        title: "Introduction to Knowledge Organization",
        author: "Claudio Gnoli",
        category: "Knowledge Organization",
        available: true
    },
    {
        id: 8,
        title: "Copyright: Interpreting the Law for Libraries, Archives and Information Services",
        author: "Graham P. Cornish",
        category: "Copyright",
        available: true
    },
    {
        id: 9,
        title: "Metadata",
        author: "Marcia Lei Zeng & Jian Qin",
        category: "Metadata",
        available: true
    }
];

function displayBooks(bookList) {
    const bookListContainer = document.getElementById("book-list");

    bookListContainer.innerHTML = "";

    bookList.forEach((book) => {
        const bookCard = document.createElement("article");

        bookCard.className = "book-card";

        bookCard.innerHTML = `
            <div class="book-cover">
                <span>BOOK</span>
            </div>

            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                <p class="category">${book.category}</p>

                <p class="${book.available ? "available" : "unavailable"}">
                    ${book.available ? "Available" : "Currently Borrowed"}
                </p>

                <button
                    class="borrow-button"
                    ${book.available ? "" : "disabled"}
                    data-book-id="${book.id}"
                >
                    ${book.available ? "Borrow Book" : "Unavailable"}
                </button>
            </div>
        `;

        bookListContainer.appendChild(bookCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayBooks(books);
});