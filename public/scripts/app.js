const input = document.querySelector('#index-search-input');
const link = document.querySelector('#index-search-a');
const button = document.querySelector('#index-search-btn');

button.addEventListener('mouseover', () => {
    link.href = `/movies?s=${input.value}`;
})

document.querySelector('body').addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        link.href = `/movies?s=${input.value}`;
        locaiton.replace(link.href);
    }
})