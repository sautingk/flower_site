function bg_change(season){
  $('.background').css('background-image', 'url("'+season+'.jpg")'); //used value passed from click function
}

$("document").ready(function(){

     $(".seasons").click(function(){ //click listener

      season = $(this).text(); //capture text within .seasons
                               //season was returning all listed keywords due to class .seasons being assigned to <ul>, reassigned to <li> level.

      bg_change(season);      //pass season variable into bg_change
    });
});