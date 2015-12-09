/*var upload = function(){
  document.getElementById("upload_widget_opener").addEventListener("click", function() {

    cloudinary.openUploadWidget({ cloud_name: 'demo', upload_preset: 'a5vxnzbp'}, 
      function(error, result) { console.log(error, result) });

  }, false);

};*/
$.ajax({
	url: "https://api.cloudinary.com/v1_1/easyliving",
	method: 'POST',
}),
$.cloudinary.config({ cloud_name: 'easyliving', api_key: '563768875754372'})

function myFunction() {
    document.getElementById("myFile");
 	$('#upload_widget_opener').cloudinary_upload_widget(
    { cloud_name: 'easyliving', upload_preset: 'n4ejdzb7', 
      cropping: 'server', 'folder': 'user_photos' },
    function(error, result) { console.log(error, result) });
	}