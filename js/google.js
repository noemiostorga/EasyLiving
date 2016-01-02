function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:36.1215, lng:-115.1739},
    scrollwheel: false,
    zoom:11
  });
}
 