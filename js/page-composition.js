$(document).ready(function(){
  //var imgHeight = $('.header-img').height();
  
  var windowHeight = window.innerHeight;
  // Add and subtract 20 because of the level's ground
  var canvasHeight = windowHeight - 20;
  var contentMargin = canvasHeight + 20;

  var _8bitTitle = $('.header-overlay');

  $('.header-lvl').css("height", windowHeight + "px");
  $('#level-canvas').css("height", canvasHeight + "px");
  $('.content-overlay').css("top", contentMargin + "px");

  //prevent space bar from fucking things up
  $(document).keydown(function (e) {
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    if (key == 32) e.preventDefault();
  });

});
