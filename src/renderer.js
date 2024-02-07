// renderer.js
const { shell } = require('electron');

function openWebpage(url) {
  window.open(url, "_blank")
}

function showContent(contentId) {
  // Hide all content divs
  var allContent = document.getElementsByClassName('content');
  for (var i = 0; i < allContent.length; i++) {
      allContent[i].style.display = 'none';
  }

  // Show the selected content div
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
      selectedContent.style.display = 'block';
  }
}
