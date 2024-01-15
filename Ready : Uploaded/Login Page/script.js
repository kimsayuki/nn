document.addEventListener("DOMContentLoaded", function() {
    // Get the current page's URL
    const currentUrl = window.location.href;
  
    // Get all the navbar links
    const navLinks = document.querySelectorAll("nav a");
  
    // Loop through the links to find the matching URL and add the 'active' class
    navLinks.forEach(link => {
      if (link.href === currentUrl) {
        link.classList.add("active");
      }
    });
  });  