var Location =Backbone.Model.extend({
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