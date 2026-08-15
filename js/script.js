const books = [
    {
        id: 1,
        title: "Foundations of Information Ethics",
        author: "John T. F. Burgess & Emily J. M. Knox",
        category: "Information Ethics",
        description: "A reference work exploring the principles, concepts and history of information ethics, including privacy, human rights, information access, censorship and intellectual property.",
        available: true
    },
    {
        id: 2,
        title: "Archives: Principles and Practices",
        author: "Laura A. Millar",
        category: "Archives",
        description: "A practical guide to archival management in the digital age, covering archival history, principles, acquisition, preservation and the responsibilities of modern archivists.",
        available: true
    },
    {
        id: 3,
        title: "Visual Research Methods: An Introduction for Library and Information Studies",
        author: "Shailoo Bedi & Jenaya Webb",
        category: "Research Methods",
        description: "An introduction to visual research methods in library and information studies, exploring how maps, drawings, videos and other visual elements can communicate information.",
        available: false
    },
    {
        id: 4,
        title: "Management Basics for Information Professionals",
        author: "G. Edward Evans & Stacey Greenwell",
        category: "Library Management",
        description: "A practical guide to management in libraries and information organizations, covering people management, budgets, resources, technology and professional development.",
        available: true
    },
    {
        id: 5,
        title: "Essential Law for Information Professionals",
        author: "Paul Pedley",
        category: "Information Law",
        description: "A beginner-friendly guide to information law that explains important legal principles and real-life cases relevant to libraries and information professionals.",
        available: true
    },
    {
        id: 6,
        title: "Foundations of Information Policy",
        author: "Paul T. Jaeger & Natalie Greene Taylor",
        category: "Information Policy",
        description: "An introduction to information policy covering its history, development and impact on accessibility, digital literacy, inclusion, privacy and information regulation.",
        available: false
    },
    {
        id: 7,
        title: "Introduction to Knowledge Organization",
        author: "Claudio Gnoli",
        category: "Knowledge Organization",
        description: "An introduction to knowledge organization covering structures such as lists and hierarchies, as well as tagging, taxonomies and the theoretical foundations of organizing knowledge.",
        available: true
    },
    {
        id: 8,
        title: "Copyright: Interpreting the Law for Libraries, Archives and Information Services",
        author: "Graham P. Cornish",
        category: "Copyright",
        description: "A practical guide to understanding copyright law in the context of libraries, archives and information services, including copyright issues affecting creative and information resources.",
        available: true
    },
    {
        id: 9,
        title: "Metadata",
        author: "Marcia Lei Zeng & Jian Qin",
        category: "Metadata",
        description: "A comprehensive introduction to metadata schemas and best practices, including metadata standards, linked data and their use in libraries, archives and museums.",
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

                <button
                    class="details-button"
                    data-book-id="${book.id}"
                >
                    View Details
                </button>
            </div>
        `;

        bookListContainer.appendChild(bookCard);
    });
}


document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("search-input");
    const categoryFilter = document.getElementById("category-filter");

    const bookDetails = document.getElementById("book-details");
    const closeDetails = document.getElementById("close-details");

    const bookListContainer = document.getElementById("book-list");


    
    function filterBooks() {

        const searchQuery = searchInput.value.toLowerCase().trim();

        const selectedCategory = categoryFilter.value;

        const filteredBooks = books.filter((book) => {

            const matchesSearch =
                book.title.toLowerCase().includes(searchQuery) ||
                book.author.toLowerCase().includes(searchQuery) ||
                book.category.toLowerCase().includes(searchQuery);

            const matchesCategory =
                selectedCategory === "all" ||
                book.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        displayBooks(filteredBooks);

        if (filteredBooks.length === 0) {

            bookListContainer.innerHTML = `
                <p class="no-results">
                    No books found matching your search and category.
                </p>
            `;
        }
    }


    
    bookListContainer.addEventListener("click", (event) => {

        if (!event.target.classList.contains("details-button")) {
            return;
        }

        const bookId = Number(event.target.dataset.bookId);

        const book = books.find((book) => book.id === bookId);

        if (!book) {
            return;
        }

        document.getElementById("details-title").textContent =
            book.title;

        document.getElementById("details-author").textContent =
            `By ${book.author}`;

        document.getElementById("details-category").textContent =
            `Category: ${book.category}`;

        document.getElementById("details-description").textContent =
            book.description;


        const availability =
            document.getElementById("details-availability");

        availability.textContent = book.available
            ? "Availability: Available"
            : "Availability: Currently Borrowed";

        availability.className = book.available
            ? "available"
            : "unavailable";


        const detailsActions =
            document.getElementById("details-actions");

        detailsActions.innerHTML = book.available
            ? `
                <button class="borrow-button">
                    Borrow Book
                </button>
              `
            : `
                <button class="borrow-button" disabled>
                    Currently Unavailable
                </button>
              `;


        bookDetails.classList.remove("hidden");
    });


   
    closeDetails.addEventListener("click", () => {
        bookDetails.classList.add("hidden");
    });


   
    bookDetails.addEventListener("click", (event) => {

        if (event.target === bookDetails) {
            bookDetails.classList.add("hidden");
        }

    });


    
    searchInput.addEventListener("input", filterBooks);


    
    categoryFilter.addEventListener("change", filterBooks);


    
    filterBooks();

});