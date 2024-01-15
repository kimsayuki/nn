// document.addEventListener("DOMContentLoaded", function() {
//     // Get all the navbar links with href starting with "#" (hash)
//     const navLinks = document.querySelectorAll('#navbar ul li a[href^="#"]');
  
//     // Set the default active link to Home
//     const homeLink = document.querySelector('#navbar ul li a[href="#home"]');
//     homeLink.classList.add("active");
  
//     // Function to handle the click event on the links
//     function handleClick(event) {
//       // Prevent the default behavior of the link click
//       event.preventDefault();
  
//       // Remove the active class from all links
//       navLinks.forEach(link => link.classList.remove("active"));
  
//       // Add the active class to the clicked link
//       this.classList.add("active");
  
//       // Get the target element based on the href
//       const targetElement = document.querySelector(this.getAttribute("href"));
  
//       // Scroll to the target element smoothly
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
  
//     // Attach the handleClick function to the click event of each link
//     navLinks.forEach(link => link.addEventListener("click", handleClick));
//   });






document.addEventListener("DOMContentLoaded", function() {
    // Get all the navbar links with href starting with "#" (hash)
    const navLinks = document.querySelectorAll('#navbar ul li a[href^="#"]');
    const logoLink = document.querySelector('.logo');
  
    // Set the default active link to Home if there is no hash in the URL
    const currentHash = window.location.hash;
    const defaultLink = currentHash ? document.querySelector(`#navbar ul li a[href="${currentHash}"]`) : document.querySelector('#navbar ul li a[href="#home"]');
    defaultLink.classList.add("active");
  
    // Function to handle the click event on the links
    function handleClick(event) {
      // Prevent the default behavior of the link click
      event.preventDefault();
  
      // Remove the active class from all links
      navLinks.forEach(link => link.classList.remove("active"));
  
      // Add the active class to the clicked link
      this.classList.add("active");
  
      // Get the target element based on the href
      const targetElement = document.querySelector(this.getAttribute("href"));
  
      // Scroll to the target element smoothly
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  
    // Attach the handleClick function to the click event of each link
    navLinks.forEach(link => link.addEventListener("click", handleClick));
  
    // Handle click on the logo to underline "Home" link and scroll to top
    logoLink.addEventListener("click", function(event) {
      event.preventDefault();
      navLinks.forEach(link => link.classList.remove("active"));
      defaultLink.classList.add("active");
      document.documentElement.scrollTop = 0; // Scroll to the top of the page
    });
  });



  const navbarLinks = document.querySelectorAll('#navbar ul li a');

    function handleScroll() {
      const currentScrollY = window.scrollY;

      navbarLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);




  
const navbarsLinks = document.querySelectorAll('#navbar ul li a');

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const homeSection = document.querySelector('#home');
      const homeSectionTop = homeSection.offsetTop;

      navbarLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      if (currentScrollY < homeSectionTop) {
        navbarLinks[0].classList.add('active');
      }
    }

    window.addEventListener('scroll', handleScroll);   