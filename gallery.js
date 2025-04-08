$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3,            // Number of items to show
      loop: true,          // Loop the items
      margin: 10,          // Space between items
      nav: true,           // Show next/prev buttons
      dots: true,          // Show dots below the carousel
      autoplay: true,      // Auto-play carousel
      autoplayTimeout: 3000, // Auto-play interval (in ms)
      autoplayHoverPause: true // Pause on hover
        })
    });