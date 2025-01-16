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
  window.open('course.html', '_blank'); // Opens course.html in a new tab
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



document.addEventListener("DOMContentLoaded", () => {
  const messageInput = document.getElementById("user-message");
  const sendMessageButton = document.getElementById("send-message");
  const chatbotBody = document.querySelector(".chatbot-body");

  // Conversation Flow (Editable by You)
  const conversation = {
      start: {
          message: "Welcome! I’m Lomika Bot. How can I assist you today? 🌟",
          options: ["Services", "New Updates", "Say hello"],
      },
      "services": {
          message: "Services We Provide 👇<br>👉Lomi Store 🏪, where every product is thoughtfully recommended by students.<br><br>Coming Soon...<br>Lomi Learning 📙, Right Way Of Learning Skills in Free.<br><a href='course.html' target='_blank'>Check Out</a><br>Many More Coming Soon...",
          options: [ "Thank You!"],
      },
      "new updates": {
          message: "Free Fire Tournaments Are Coming💡<br> 👉We Conduct Tournaments With Money Prices❣️ <br>So Stay Tunned..",
          options:  ["Join Us", "Thank you!"],
      },
      "say hello": {
          message: "Hello! It's great to chat with you. 👋",
          options: [],
      },
      "join us": {
          message: "Check Our Group 🍝<br><a href='https://chat.whatsapp.com/LKbQW1EvYDCGeXQUNqUofz' target='_blank'>Join</a>",
          options: ["Joined"],
      },
      "joined": {
          message: "Thank You for Joining Us We Will Keep going Until We Reach Our <br> Goals! 💪",
          options: ["Thank you!"],
      },
      "thank you!": {
          message: "Glad To Hear That I hope You Enjoyed It Please Share Our Website To Support Us 💪",
          options: ["Shared"],
      },
      "shared": {
          message: "Thank You For Your Support💪",
          options: [],
      },
  };

  // Function to append a message to the chat
  function appendMessage(message, type) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add(`${type}-message`);
      messageDiv.textContent = message;
      messageDiv.innerHTML = message; // Use innerHTML to render HTML tags in messages
      chatbotBody.appendChild(messageDiv);
      chatbotBody.scrollTop = chatbotBody.scrollHeight; // Auto-scroll
  }

  // Function to show options as buttons
  function showOptions(options) {
      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("bot-options");
      options.forEach((option) => {
          const button = document.createElement("button");
          button.textContent = option;
          button.addEventListener("click", () => {
              appendMessage(option, "user"); // Append user's choice
              handleResponse(option.toLowerCase()); // Handle response
      
          });
          optionsDiv.appendChild(button);
      });
      chatbotBody.appendChild(optionsDiv);
      chatbotBody.scrollTop = chatbotBody.scrollHeight; // Auto-scroll
  }

  // Function to handle bot's response
  function handleResponse(userInput) {
      const response = conversation[userInput];
      if (response) {
          setTimeout(() => {
              appendMessage(response.message, "bot");
              if (response.options) {
                  showOptions(response.options);
              }
          }, 1000); // Simulate delay
      } else {
          appendMessage("I didn't understand that. Could you try again? 🤔", "bot");
      }
  }

  // Send Initial Welcome Message
  showOptions(conversation.start.options);

  // Handle Send Button Click
  sendMessageButton.addEventListener("click", () => {
      const userMessage = messageInput.value.trim().toLowerCase();
      if (userMessage) {
          appendMessage(userMessage, "user");
          messageInput.value = ""; // Clear input
          handleResponse(userMessage);
      }
  });
});

