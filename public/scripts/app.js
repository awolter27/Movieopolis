const input = document.querySelector('#nav-search-input');
const link = document.querySelector('#nav-search-link');
const button = document.querySelector('#nav-search-btn');

button.addEventListener('mouseover', () => {
    link.href = `/movies?s=${input.value}`;
})

document.querySelector('body').addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        link.href = `/movies?s=${input.value}`;
        locaiton.replace(link.href);
    }
})