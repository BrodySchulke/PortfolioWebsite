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

$('.tabs').tabs({
        select: function(event, ui) {
            $(ui.panel).animate({opacity:0.1});
        },
        show: function(event, ui) {
            $(ui.panel).animate({opacity:1.0},1000);
        }
});

$(document).ready(function(){
});
