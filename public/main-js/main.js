$(document).ready(function(){

  $(".details").hide();
  $(".details").last().show();
  $(".flip").click(function(){
      $(this).next().slideToggle("slow");
  });
});
