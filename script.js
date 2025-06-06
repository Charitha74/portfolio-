// Show only the selected section and hide others
function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Theme toggle button functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Change button icon based on theme
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// Show the About section by default on page load
window.onload = () => {
  showSection('about');
};
