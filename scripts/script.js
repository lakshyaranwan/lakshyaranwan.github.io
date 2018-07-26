$("#introTitle, #introDesc").click(function(){
  $("#intro").fadeOut(500);
  $(".main").fadeIn(4000);
});
$(".navbarElement1").click(function(){
  $("html, body").stop(true, false);
  $('html, body').animate({
    scrollTop: $(".first").offset().top
}, 1000);
});

$(".navbarElement2").click(function(){
  $("html, body").stop(true, false);
  $('html, body').animate({
    scrollTop: $(".second").offset().top-30
}, 1000);
});

$(".navbarElement3").click(function(){
  $("html, body").stop(true, false);
  $('html, body').animate({
    scrollTop: $(".third").offset().top-30
}, 1000);
});
$(".navbarElement4").click(function(){
  $("html, body").stop(true, false);
  $('html, body').animate({
    scrollTop: $(".fourth").offset().top-30
}, 1000);
});


$(".github,.codechef").hover(function(){
  $(this).addClass("hoverOpacity",50);

});
$(".github,.codechef").mouseleave(function(){
  $(this).removeClass("hoverOpacity",50);
});
