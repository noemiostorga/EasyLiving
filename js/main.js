  console.log('test');


	$('#upload_widget_opener').cloudinary_upload_widget(
			{ cloud_name: 'easyliving', upload_preset: 'n4ejdzb7', 
			 cropping: 'server', 'folder': 'user_photos' },

			function(error, result) { console.log(error, result) });


	$(document).on('cloudinarywidgetsuccess', function(e, data) {

		console.log("Global", e, data); 
		console.log(data);
		picture_url = data[0].url
		console.log(picture_url);
		
	});















	var Image = Backbone.Model.extend({
		url: "https://www.parse.com/apps/easy--37/collections#class/Room",
		initialize: function(){
		

		},defaults: {
			image_url: null,
			url: null
		},
		_parse_class_name: "Image"
	});

	var ImageCollection= Backbone.Collection.extend({
			model: Image,
			_parse_class_name: "Image"
	});



	var imageCollection = new ImageCollection();

	var image = new Image();

			image.set({
				url: 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg'
			})
			image.save(null, {
				success: function(resp){
				},error: function(err){
					console.log("error", err);
				}
			});





	// 	imageCollection.set({

	// 		success: function(resp){
	// 			console.log("JSON data: ", resp.toJSON());
	// 				var PhotoTemplate=$("#photoTemplate").text();
	// 				var data = Mustache.render(PhotoTemplate, Imagedata);
	// 				$("#photos").html(data);
	// 		},
	// 		error: function(err){
	// 				console.log("error:", err);
	// 		}

	// 	});






















	/*var ImageCollection = Backbone.View.extend({


		 var data = JSON.stringify($('form').serializeObject());
            this.model.set(data);
	})

/*

var Images = Backbone.Model.extend({
				Model: Images,
				url: "https://www.parse.com/apps/easyliving/collections#class/Rooms"

$(document).on('map', function(data){
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
		
		







		
