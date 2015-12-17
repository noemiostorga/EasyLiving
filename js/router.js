var Backbone = require('./backbone-parse');
var mainTemplate = require('./signup.js');
var Puts = require ('./collection/puts');
var Put = require('./models/put');





var Router = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start({pushState: true});
	},
	routes: {
		"signup.html/": "signup",
		"put/add": "add",
		"rentorHomePage": "rentorHomePage",
		"":"index"
	},
	index: function(){
		Puts.fetch({
			success: function(posts){
				var html = mainTemplate({'data': posts.toJSON()});
				$('').html(html);
			}
		});
	},
	rentorHomePage: function(){

	},
	signup:function(){
		console.log("fd");
	}
});


var router = new Router();

router.on('route:profile', function(objectId){
	var put = Puts.get(objectId);
	var html = detailTemplate(put.toJSON());
	$('#container').html(html);
});

router.on('router:message', function(){
	var html = addEditTemplate({});
	$("#container").html(html);
});

$('#message').on('click', 'a', function(e){
	e.preventDefault();
	var href = $(this).attr('href').substr(1);
	router.navigate(href, {trigger:true})
});

$('#profile').on('click', function(e){
	e.preventDefault();
	router.navigate('put/add',{trigger: true})
});

$('body').on('submit',  function(e){
	e.preventDefault();
	var put= new Put();
	if($("#objectId").length){
		put.set("objectId", $("#objectId").val());
	}

	post.save{
		success: function(resp){
			router.navigate("/", {trigger: true});
		}
	}
});

module.exports = router;





