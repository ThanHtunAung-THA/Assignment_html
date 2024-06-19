// You can add JavaScript code here to handle interactions and functionality.

// For example, you could add a function to handle the search form submission.
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    // Get the search term from the input field
    const searchTerm = searchForm.querySelector('input').value;
    // Do something with the search term, like sending it to a server for search results.
    console.log('Search term:', searchTerm);
});