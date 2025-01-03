function sidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'block'; // Show the element
    } else {
      sidebar.style.display = 'none'; // Hide the element
    }
  }
  const header = document.getElementById('header');

  // Add an event listener to the window for the scroll event
  window.addEventListener('scroll', () => {
      // Check how far the page has scrolled
      const scrollY = window.scrollY;

      // If the user scrolls down 50px or more, add the "shrink" class
      if (scrollY > 50) {
        header.style.position = 'fixed';
      } else {
          // Remove the "shrink" class if they scroll back up
          header.style.position = 'relative';
      }
  });
  document.getElementById("home1").addEventListener("click", function() {
    const target = document.getElementById("home");  // Replace with your section ID
    target.scrollIntoView({
        behavior: "smooth",  // Smooth scrolling
        block: "start"       // Align to the top of the viewport
    });
});
document.getElementById("about1").addEventListener("click", function() {
  const target = document.getElementById("about");  // Replace with your section ID
  target.scrollIntoView({
      behavior: "smooth",  // Smooth scrolling
      block: "start"       // Align to the top of the viewport
  });
});

document.getElementById("services1").addEventListener("click", function() {
  const target = document.getElementById("services");  // Replace with your section ID
  target.scrollIntoView({
      behavior: "smooth",  // Smooth scrolling
      block: "start"       // Align to the top of the viewport
  });
});

document.getElementById("contact1").addEventListener("click", function() {
  const target = document.getElementById("contact");  // Replace with your section ID
  target.scrollIntoView({
      behavior: "smooth",  // Smooth scrolling
      block: "start"       // Align to the top of the viewport
  });
});
