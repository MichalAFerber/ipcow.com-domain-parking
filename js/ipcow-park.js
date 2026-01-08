// Get the current domain
const domain = window.location.hostname;

// Set the title
document.title = `Domain parking at IPCow.com [${domain}]`;

// Set the H1 text
document.getElementById('domain-name').textContent = domain;