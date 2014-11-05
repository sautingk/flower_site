$(document).ready(function() {


 $(".seasons").click(function () {
    // highlight the button
    // not AJAX, just cool looking
    // $("button").removeClass("selected");
    // $(this).addClass("selected");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var season = $(this).text();
    var flickrOptions = {
      tags: season,
      format: "json"
    };

    function displayPhotos(data) {
      // var photoHTML = $(".background").css('background-image', 'url(' + photoHTML +')');

        $.each(data.items,function(i,photo) {
           photoHTML = $(".background").replaceWith( $('background-image', 'url(' + photo.media.m + ')'))
         }); // end each

        // $(".background").css("background-image", 'url(' + photoHTML + ')');
    }


    $.getJSON(flickerAPI, flickrOptions, displayPhotos);


  }); // end click

}); // end ready