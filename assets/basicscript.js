var currentReading = 1;
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
//    jQuery(".rep .secondRow").fitText(0.35);
});

//function changeText(onMouse) {
//  var i = document.getElementById(onMouse);
//  i.style.display = "inline";
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
    var whichContainer = "." + whichParty + "Container"
    var currentReadingID = "#" + currentReading;
    var txtid = "article/" + whichParty + currentReading + ".html";
    var newDiv = $("<div></div>");

    $(whichContainer).append(newDiv);
    newDiv.attr('id', currentReading);
    $(currentReadingID).load(txtid);
    
    console.log(txtid);
//    console.log(txtid);
//    console.log(currentReading);
    
//    var currentScroll = $(".p_container").scrollLeft();
//    console.log(currentScroll);
//    
//   var width = document.getElementById(currentReading).offsetWidth;
//    console.log(width);
//    var widthPlus = "+=" + width;
//  
    
//    var scrollPosition = $('.p_container').scrollLeft();
//    var boxPLeft = parseInt($(boxPNo).css("left"));
//    var boxPTop = parseInt($(boxPNo).css("top"));
//    $(".p_container").animate({ scrollLeft: boxPLeft - 100 }, { queue: false, duration: 1000 });
//    $(".p_container").animate({ scrollTop: boxPTop - 50 }, { queue: false, duration: 1000 });
//    console.log(boxPLeft);
//    console.log(boxPTop);
//    
    currentReading++;
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
