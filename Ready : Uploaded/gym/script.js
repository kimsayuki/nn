const currentPath = window.location.pathname;
const links = document.querySelectorAll('.mid ul li a');

links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});