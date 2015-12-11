function rotateImages() {
     var curDiv = $('#hero div.current');
     var nextDiv = curDiv.next();
     if (nextDiv.length === 0) {
        nextDiv = $('#hero div:first');
    }

     curDiv.removeClass('current').addClass('previous');
     nextDiv.css({ opacity: 0.0 });
     nextDiv.addClass('current');
     nextDiv.animate({ opacity: 1.0 },
                        1000,
                         function() {
                            curDiv.removeClass('previous');
                        });
}

     $(function() {
             // create the image rotator
             setInterval(rotateImages, 3000);
     });
