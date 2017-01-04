function displayContent(evt, tabName){
  var i, tabContents, tabLinks;
  tabContents = document.getElementsByClassName("tabContent");
  for(i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tabLink");
  for(i = 0; i <tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  $("#"+tabName).fadeIn();
  evt.currentTarget.className += " active";
}

function openTab(evt, tabName){
  var i, subTabs, tabContents, tabLinks;
  subTabs = document.getElementsByClassName("subTabs");
  for(i = 0; i < subTabs.length; i++) {
    subTabs[i].style.display = "none";
  }
  tabContents = document.getElementsByClassName("tabContent");
  for(i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tabLink");
  for(i = 0; i <tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  $("#"+tabName).fadeIn();
  evt.currentTarget.className += " active";
}

function submitForm(evt) {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var senderEmail = $("#senderEmail").val();
  var comments = $("#comments").val();
  var captchaAnswer = $("#captchaAnswer").val();
  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  if (!firstName || !lastName || !senderEmail || !comments || !captchaAnswer || captchaAnswer != 8 || !pattern.test(senderEmail)){
    $("ValidSubmit").fadeOut(1);
    $("#ErrorSubmit").fadeIn();
    return;
  }
  else{
    $("#ErrorSubmit").fadeOut(1);
    $("#ValidSubmit").fadeIn();
  }
  $.ajax({
    type: "POST",
    data: $("#ContactForm").serialize(),
    url: "contact.php"
  });
  $("#ContactForm").trigger('reset');
}

$(document).ready(function(){
  $("#startupTab").trigger("click");
  $(window).scroll(function(){
    if($(window).scrollTop() > 100){
      $("#scrollUp").fadeIn("slow");
    }
    else{
      $("#scrollUp").fadeOut("slow");
    }
  });
  $("#scrollUp").click(function(){
   // Animate the scrolling motion.
   $("html, body").animate({ scrollTop:0 },"slow");
  });


});
