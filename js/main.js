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

	





	



//instagram 
//fetch set save
		
		
