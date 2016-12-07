$(document).ready(function(){
  $(".ProjectInfo").hide();
  $(".ProjectTitle").click(function(){
    $(this).next().slideToggle();
  });

});
