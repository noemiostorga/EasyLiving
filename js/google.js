function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:36.1215, lng:-115.1739},
    scrollwheel: false,
    zoom:11
  });

  var houses ={lat: 36.1406013, lng: -115.3161044};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: houses,
    scrollwheel: false,
    zoom: 11
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: houses,
    title: 'Hello World!'
  });
}
 