/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNavbar").style.top = "20px";
  } else {
    document.getElementById("myNavbar").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}