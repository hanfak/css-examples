$(document).ready(function(){
  var id = '#dialog';

  //Set mask to cover background
  var maskHeight = $(window).height();
  var maskWidth = $(window).width();

  $('#mask').css({'width':maskWidth,'height':maskHeight});

  //Set pop up position
  var winH = $(window).height();
  var winW = $(window).width();

  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);

  //transition effect and display
  $(id).fadeIn(2000);
  $('#mask').fadeIn(3000);
  // $('#mask').fadeTo("slow",0.3);

  //if close  pop up
  $('#popupfoot').click(function () {
    $('#mask').hide();
    $('.window').hide();
  });
  //
  //
  // $('#mask').click(function () {
  //   $(this).hide();
  //   $('.window').hide();
  // });


});
