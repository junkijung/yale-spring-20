var currentReading = 1;
var txtColor = 205;
var txtColor2 = 255;
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


//function controlVideo(vidcontrol, divid) {
//var div = document.getElementById(divid);
//var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
//iframe.postMessage('{"event":"command","func":"' + vidcontrol + '","args":""}', '*');
//}
//
//function openVideo(inum) {
//  var i = document.getElementById(inum);
//  if (i.style.display == "none") {
//    i.style.display = "block";
//    controlVideo('playVideo', inum);
//  } else {
//    i.style.display = "none";
//    controlVideo('stopVideo', inum);
//  }
//}


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
    var newColor = txtColor;
    var newColor2 = txtColor2;
    
    $(whichContainer).append(newDiv);
    newDiv.attr('id', currentReading);
    newDiv.attr('class', partyContainer);

    $(currentReadingID).load(txtid);
    
    if (currentReading == 1) {
    newDiv.attr('style', "padding-left: 100vw; background-image: linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(255, " + txtColor + ", " + txtColor + "));");
    } else if (txtColor > 5) {
    newColor = txtColor - 50;
    
    newDiv.attr('style', "background-image: linear-gradient(to right, rgb(255, " + txtColor + ", " + txtColor + ") 50%, rgb(255, " + newColor + ", " + newColor + "));");
    
    txtColor = newColor;    
    }
    
    
    else {
    
    newColor2 = txtColor2 - 50;       
    newDiv.attr('style', "background-image: linear-gradient(to right, rgb(" + txtColor2 + ", 0, 0) 50%, rgb(" + newColor2 + ", 0, 0));");
    
    txtColor2 = newColor2; 
        
    }
    


    var scrollWidth = $('.mainContainer').get(0).scrollWidth;
    var clientWidth = $('.mainContainer').get(0).clientWidth;
    $(".mainContainer").animate({ scrollLeft: scrollWidth}, 1000);
    console.log(scrollWidth);
    console.log(clientWidth);
    
    currentReading++;

    console.log(txtColor);
    
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
