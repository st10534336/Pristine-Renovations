function updateFooterDateTime() {
  const now = new Date();
  
  // Format the day and time
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  const formattedDateTime = now.toLocaleDateString(undefined, options);
  
  // Target the footer element
  const footerElement = document.getElementById('footer-datetime');
  if (footerElement) {
    footerElement.textContent = formattedDateTime;
  }
}

// Run immediately and update every second
updateFooterDateTime();
setInterval(updateFooterDateTime, 1000);