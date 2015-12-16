var Backbone = require('./backbone-parse');
var mainTemplate = require('./signup.js');
var Puts = require ('./collection/puts');
var Put = require('./models/put');





var Router = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start({pushState: true});
	},
	routes: {
		"signup/:objectId": "put",
		"put/add": "add",
		"put/:objectId/edit"
		"":"index"
	},
	index: function(){
		Puts.fetch({
			success: function(posts){
				var html = mainTemplate({'data': posts.toJSON()});
				$('').html(html);
			}
		});
	}
});


var router = new Router();

router.on('route:post', function(objectId){
	var put = Puts.get(objectId);
	var html = detailTemplate(put.toJSON());
	$('#Container').html(html);
});

router.on('router:add', function(){
	var html = addEditTemplate({});
	$("#container").html(html);
});

$('body').on('click', 'a', function(e){
	e.preventDefault();
	var href = $(this).attr('href').substr(1);
	router.navigate(href, {trigger:true})
});

$('#addBtn').on('click', function(e){
	e.preventDefault();
	router.navigate('post/add',{trigger: true})
});

$('body').on('submit', "#detailForm", function(e){
	e.preventDefault();
	var put= new Put();
	if($("#objectId").length){
		put.set("objectId", $("#objectId").val());
	}
	if($("#title").length){
		put.set("title", $("#title").val());
	}
	if($("#url").length){
		post.set("description", $("#description").val());
	}
	post.save{
		success: function(resp){
			router.navigate("/", {trigger: true});
		}
	}
});

module.exports = router;




