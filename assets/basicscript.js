var currentReading = 1;
var txtColor = 100;
//
//function backtoNormal(onMouse) {
//  var i = document.getElementById(onMouse);
//  i.style.display = "none";
//}

$("document").ready(function() {
//    textFit(document.getElementsByClassName('neuTxt'), {multiLine: false});
    $(".rep, .dem").fitText(0.4);
    $(".neuTxt").fitText(1.5);
    $(".rep").click(loadHTML);
});

//function changeText(onMouse) {
//  var i = document.getElementById(onMouse);
//  i.style.display = "inline";
//}


function controlVideo(vidcontrol, divid) {
var div = document.getElementById(divid);
var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
iframe.postMessage('{"event":"command","func":"' + vidcontrol + '","args":""}', '*');
}

function openVideo(inum) {
  var i = document.getElementById(inum);
  if (i.style.display == "none") {
    i.style.display = "block";
    controlVideo('playVideo', inum);
  } else {
    i.style.display = "none";
    controlVideo('stopVideo', inum);
  }
}


$(function() {
    $(".neu")
        .mouseover(function() { 
            var src = $(".neuImg").attr("src").match(/[^\.]+/) + "_grey.png";
            $(".neuImg").attr("src", src);
        })
        .mouseout(function() {
            var src = $(".neuImg").attr("src").replace("_grey.png", ".png");
            $(".neuImg").attr("src", src);
        });
});


function loadHTML() {
    var whichParty = $(this).attr('class');
    var whichContainer = ".mainContainer"
    var currentReadingID = "#" + currentReading;
    var txtid = "article/" + whichParty + currentReading + ".html";
    var partyContainer = whichParty + "Container"
    var newDiv = $("<div></div>");

    
    $(whichContainer).append(newDiv);
    newDiv.attr('id', currentReading);
    newDiv.attr('class', partyContainer);

    $(currentReadingID).load(txtid);
    
    if (currentReading == 1) {
    newDiv.attr('style', "padding-left: 100vw; background-image: linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(255, 210, 210));");
    }
        

    var scrollWidth = $('.mainContainer').get(0).scrollWidth;
    var clientWidth = $('.mainContainer').get(0).clientWidth;
    $(".mainContainer").animate({ scrollLeft: scrollWidth}, 1000);
    console.log(scrollWidth);
    console.log(clientWidth);
    
    currentReading++;
    txtColor = txtColor + 10;
    console.log(txtColor);
    
    
    
    openVideo('i2');
}




//=======
//function changeText(onMouse) {
//  var i = document.getElementById(onMouse);
//  i.style.display = "inline";
//}
//
//function backtoNormal(onMouse) {
//  var i = document.getElementById(onMouse);
//  i.style.display = "none";
//}
