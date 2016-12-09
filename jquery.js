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


$(document).ready(function(){
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
