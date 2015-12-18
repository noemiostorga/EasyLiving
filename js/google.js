var map;
function initMap() {
  

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');
}
  var drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE
      ]
    },
    markerOptions: {icon: 'images/beachflag.png'},
    circleOptions: {
      fillColor: '#ffff00',
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1
    }
  });
  drawingManager.setMap(map);
};




/*function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.114647, lng: -115.172813},
    zoom: 8
  });

  var drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE
      ]
    },
    markerOptions: {icon: 'images/beachflag.png'},
    circleOptions: {
      fillColor: '#ffff00',
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1
    }
  });
  drawingManager.setMap(map);
}

/*var Location =Backbone.Model.extend({
	defaults:{
		id:
		position:
	},
	initialize: function(){
		this.set('position', position);
		var currentLatLng = new google.maps.LatLng(position.coords.laititude, position.coords.longitude);
		this.set('currentLatLng', currentLatLng);
        var mapOptions = {
            zoom: this.get('zoom'),
            minZoom: this.get('minZoom'),
            maxZoom: this.get('maxZoom'),
            center: currentLatLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
	};
	this.set('mapOptions', mapOptions);
});

var Place=Backbone.View.extend({
	defaults:{
		region: 'us', language: 'en'
	},
	 id: 'gmaps-container',
    className: 'gmaps_container',
	initialize: function(){
	initialize: function(){
       var url = "http://maps.googleapis.com/maps/api/js?key=key_here&sensor=false";
       $.ajax({
           url: url,
           dataType: "script",
           async: false,
           success: function(){
               console.log('script loaded');
           }
       });
       this.model.set('map', new google.maps.Map(this.el, this.model.get('mapOptions')));
    },
    render: function(){
        console.log('init map');
        $('#' + this.id).replaceWith(this.el);
        return this;
    }
});


	
$(document).ready(function(){
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(success);
	} else {
	  error('Geo Location is not supported');
	}
	console.log("fd");

});
*/