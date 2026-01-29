// URL to open when the GitHub button is clicked.
// Replace this with your repository or organization URL.
const GITHUB_URL = 'https://github.com/';

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('githubBtn');
	if (!btn) return;
	btn.addEventListener('click', () => {
		window.open(GITHUB_URL, '_blank', 'noopener,noreferrer');
	});
});

