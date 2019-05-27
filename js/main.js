// Functionality for google maps section
function initMap() {
  const location = { lat: 41.670756, lng: -86.25052 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: location
  });
  // specific location on map
  const marker = new google.maps.Marker({ position: location, map: map });
}

// Smooth scrolling for the nav bar
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

$("#navbar a, .btn").on("click", function(e) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
