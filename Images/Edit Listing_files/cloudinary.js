Parse.initialize("8FursUpxatbb97bkZXQo0UOhEveyAvcOU2UNs7ZV", "nCv32lT0DhjotclrySOuLi6iAR4LCyrKE3y130Xg");

function getRoomImages(parseUser) {
    var query = new Parse.Query("RoomImages");
    query.equalTo("user", parseUser);

    query.find({
        success: function(results) {
            var roomImageUrls = results.map(function(roomImage){
                return roomImage.get("url");
            });
            var template = $("#roomimages-template").text();
            var templateHtml = Mustache.render(template, {roomImageUrls: roomImageUrls});
            $('#photos').html(templateHtml);
        },

        error: function() {

          status = "No pictures exist for userId " + request.params.user; 
          response.error(status);
        }
    });
}

$('#upload_widget_opener').cloudinary_upload_widget({cloud_name: 'easyliving',
        upload_preset: 'n4ejdzb7', 
        cropping: 'server', 
        'folder': 'user_photos' }, 
        function(error, result) { 
            console.log(error, result) 
});

$(document).on('cloudinarywidgetsuccess', function(e, data) {

    console.log("Global", e, data); 
    console.log(data);
    picture_url = data[0].url
    console.log(picture_url);

    var RoomImages = Parse.Object.extend("RoomImages");
    var roomImages = new RoomImages();

    var curUser = Parse.User.current();
    roomImages.save({url: picture_url,
                    user: curUser});
    getRoomImages(curUser);

});

var curUser = Parse.User.current();
getRoomImages(curUser);
