// Select form and result text
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

// Add event listener
form.addEventListener("submit", function(event) {

  // Prevent page reload
  event.preventDefault();

  // Get user name
  const name = document.getElementById("name").value;

  // Show message
  result.innerHTML = `Thank you, ${name}! Your message has been sent.`;

  // Clear form
  form.reset();
});