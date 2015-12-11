  console.log('test');

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

//instagram 
//fetch set save
		
		/*defaults:{
				url: null,
				path: null,
				etag: null,
				secure_url: null,
				signature: null,
				thumbnail: null
			},

		validate: function(){
			if(!attrs.url){
				return "url is required";
			}
			if (!attrs.path){
				return "path is required";
			}
			if (!attrs.etag){
				return "etag is required";
			}
			if (!attrs.secure_url){
				return "secure_url is required";
			}
			if (!attrs.signature){
				return "signature is required";
			}
			if (!attrs.thumbnail){
				return "thumbnail is required";
			}

		},
		cloud_name: "easyliving"

		});

	var image = Backbone.Collection.extend({
		model: Images,
		_

	})	
*/ 



