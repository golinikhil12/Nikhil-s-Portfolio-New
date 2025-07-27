// Preloader
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});

// Dark Mode Toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
});

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggle.checked = true;
        document.body.classList.add('dark');
    }
});
