var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gal_el");
  console.log(slides);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
//
// var slideIndex = 0;
// showSlides();
//
// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("gal_el");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }









var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if(!isChrome){
    $('#iframeAudio').remove()
  }
else{
   $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background
}
