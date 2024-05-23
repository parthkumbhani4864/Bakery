$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      dots:true,
      dotsEach:true,
      items:1
  });
         
  $("#blogs").owlCarousel({
      margin:10,
      items:3,
      rewind:true,
      loop: true,
      slideBy:1,
      nav: false, 
  });
  
  $(window).scroll(function(){
      var sticky = $('.sticky'),
      scroll = $(window).scrollTop();
  
      if (scroll >= 500) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
  });
  
  var btn = $('.up_icon');
  btn.hide();
  $(window).scroll(function () {
    if($(window).scrollTop()>500)
    {
      btn.fadeIn();
    }
    else
    {
      btn.fadeOut();
    }
  });
  
  btn.on('click',function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},'300');
  });
  
});  





  