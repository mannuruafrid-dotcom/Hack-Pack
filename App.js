const GITHUB_URL = 'https://github.com/mannuruafrid-dotcom/Hack-Pack';

function openGitHub() {
  window.open(GITHUB_URL, '_blank', 'noopener,noreferrer');
}

function scrollToFeatures() {
  document.getElementById("features").scrollIntoView({
    behavior: "smooth"
  });
}
