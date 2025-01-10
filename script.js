function sidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'block'; // Show the element
    } else {
      sidebar.style.display = 'none'; // Hide the element
    }

  }
// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Function to show or hide the button
function toggleScrollToTopBtn() {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add event listeners
window.addEventListener('scroll', toggleScrollToTopBtn);
scrollToTopBtn.addEventListener('click', scrollToTop);
