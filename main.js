console.log('test');
$.ajax.({
	url:'https://api.cloudinary.com/v1_1/easyliving',
	method: 'POST',
	dataType: 'json'
}).then(function(resp){
	console.log(resp);
});

// var RoomImages = Backbone.Model.extend({
// 	initialize: function(){
		
// 		var image="http://res.cloudinary.com/easyliving/image/upload/{{image.url}} />";
// 	}
// });



