  console.log('test');



	$('#upload_widget_opener').cloudinary_upload_widget(
			{ cloud_name: 'easyliving', upload_preset: 'n4ejdzb7', 
			 cropping: 'server', 'folder': 'user_photos' },
			function(error, result) { console.log(error, result) });

	$(document).on('cloudinarywidgetsuccess', function(e, data) {

		console.log("Global", e, data); 
			var Images = Backbone.Model.extend({
				Model: Images,
				url: "https://www.parse.com/apps/easyliving/collections#class/Rooms"
		});

		var ImagesCollection = new Images();
		ImagesCollection.fetch({
			success: function(resp){
				var Imagedata = {"path": resp.toJSON()};
				var PhotoTemplate=$("#photoTemplate").text();
				var data = Mustache.render(PhotoTemplate, Imagedata);
				$("#photos").html(data);
			},
			error: function(err){
				console.log("error:", err);
				}
			});
	});


/*$(document).on('map', function(data){
	function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
}	

});

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

*/
	


//instagram 
//fetch set save
		
		







		
