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

function course() {
  window.open('lomigames.html', '_blank'); // Opens course.html in a new tab
}
function lomika(){
  const chatbot = document.getElementById('chatbot');
  chatbot.style.display="block";
}

function closelomika(){
  const chatbot = document.getElementById('chatbot');
  chatbot.style.display="none";
}
function join(){
  window.open('https://chat.whatsapp.com/LKbQW1EvYDCGeXQUNqUofz', '_blank'); // Opens course.html in a new tab
}

 document.getElementById('button').addEventListener('click', function() {
      // URL of the file you want to download
      const fileUrl = 'LomiGames.apk'; // Change this to your file path/URL
      // Desired filename when downloaded
      const fileName = 'LomiGames.apk'; // Change this to your desired file name

      // Create a temporary anchor element
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileName;
      
      // Append to the body, trigger click and then remove it
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
