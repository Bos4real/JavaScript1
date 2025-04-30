const button = document.getElementById('themeToggle');
const body = document.body;
button.addEventListener('click',() => {
	body.classList.toggle('dark');
	body.classList.toggle('light');
	button.textContent = body.classList.contains('dark')? 'Switch to Light Mode' : 'Switch to Dark Mode';})