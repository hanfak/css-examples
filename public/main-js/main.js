$(document).ready(function(){

  $(".details").hide();
  $(".flip").click(function(){
    $(this).toggleClass("active");
    $(".details").css({'background-color':'lightgrey', 'border': '5px solid black', 'border-top':'none'});
    $(this).next().slideToggle("fast");
  });
});
