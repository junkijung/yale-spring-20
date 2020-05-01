$(document).ready(function() {

$(".first").mouseover(function() {
        hideText(this, ".placeholder");
    }).mouseleave(function(){
        showText(this, ".placeholder");
});    
$(".item").mouseover(function() { 
        showText(this, ".contents");
        blurBG(this);
    }).mouseleave(function(){
        hideText(this, ".contents");
        clearBG(this);
    }
);
//$(document).on('mouseover','.item',showText);
    
});


function showText (x, y) {
    $(x).children(y).css("display", "block");

}

function hideText (x, y) {
    $(x).children(y).css("display", "none");
//        console.log("hi!");
}

function blurBG (x) {
    $(x).children(".imgContainer").css("opacity", "0.1");
}

function clearBG (x) {
    $(x).children(".imgContainer").removeAttr("style");
}