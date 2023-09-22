const head = document.head
const body = document.body

/* Wrapping code inside a 'DomContentLoaded' event listener to ensure the 
JS code runs after all the HTML content is fully loaded */
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('input[type="search"]');

    /* Selects all elements with the class cards and stores them in the cards variable. 
    This ensures that you work with all card elements regardless of how many are present.*/
    const cards = document.querySelectorAll('.cards');

    // Event listener for the search bar calls the filterCards function below
    searchInput.addEventListener('input', filterCards);

    /* In the filterCards function, it adds or removes the class dontDisplay to hide or 
    show cards based on the search input. */
    function filterCards() {
        const searchText = searchInput.value.toLowerCase();
        /* toLowerCase() used for searchText variable and card component textContent to 
        remove case sensitivity */
        cards.forEach(card => {
            const title = card.querySelector('h1').textContent.toLowerCase();
            if (title.includes(searchText)) {
                card.classList.remove('dontDisplay');
            } else {
                card.classList.add('dontDisplay');
            }
        })
    }
})