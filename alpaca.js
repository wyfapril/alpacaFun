var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function showVideo() {
	document.getElementById("alpacaSlides").style.display="none";
	document.getElementById("alpacaVideo").style.display="block";
}

// function showSlides() {
//   document.getElementById("alpacaSlides").style.display="block";
//   document.getElementById("alpacaVideo").style.display="none";
// }

// function showSlides() {
//     var x = document.getElementById("alpacaSlides");
//     var y = document.getElementById("alpacaVideo");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//         y.style.display = "none";
//     } else {
//         x.style.display = "none";
//         y.style.display = "block";
//     }
// }
