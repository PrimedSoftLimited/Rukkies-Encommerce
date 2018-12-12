$(document).ready(function(){
    $("#card1").mouseenter(function(){
        $("#text1").show(500);
    });
    $("#card1").mouseleave(function(){
        $("#text1").hide(1000);
    });
});