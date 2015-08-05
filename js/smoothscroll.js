$(document).ready(function () {
  $('a[href*=#]').click(function(e) {
    e.preventDefault();

    var target;
    if(($(this).attr("href"))==="#")
      target = $("#home");
    else
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              
  $('html,body').animate({
    scrollTop: (target.offset().top) - 50
    }, 1000, 'swing');
  });
});