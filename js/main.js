 /// console.log('test');

$(document).ready(function(){

		 $('#upload_widget_opener').cloudinary_upload_widget(
			{ cloud_name: 'easyliving', upload_preset: 'n4ejdzb7', 
			 cropping: 'server', 'folder': 'user_photos' },
			function(error, result) { console.log(error, result) });


	var Images = Backbone.Model.extend({


		initialize: function(){
			$(document).on;('cloudinarywidgetsuccess', function(e, data) {
		  console.log("Global", e, data); });
		}

});
	
	
});

//