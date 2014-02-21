function vparkScroll(){
  $(".button").click(function(el){
    el.preventDefault();
    var target = $(this).attr("href");
    var adjustment = $(".jumbotron").height() + 30
    var delay = 500;
    $("body").animate({scrollTop: ($(target).position().top - adjustment)}, delay);
  });
};

$(document).ready(function(){
  vparkScroll();
});