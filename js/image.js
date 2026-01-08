document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchQuery').value;
    fetchResults(query);
});

async function searchUnsplash(searchQuery) {
    const endpoint = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=YOUR_ACCESS_KEY`;
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return await response.json();
}

async function fetchResults(searchQuery) {
    try {
        const results = await searchUnsplash(searchQuery);
        displayResults(results);
    } catch (err) {
        console.error(err);
        alert('Failed to search Unsplash');
    }
}
 
function displayResults(json) {
    const searchResults = document.querySelector('.js-search-results');
    searchResults.innerHTML = '';
    json.results.forEach(result => {
        const img = document.createElement('img');
        img.src = result.urls.small;
        searchResults.appendChild(img);
    });
}
