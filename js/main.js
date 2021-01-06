$(function () {

  $(document).ready(function(){
    $('.info__slider').slick({
      dots: true
    });
  });

  var mixer = mixitup('.portfolio__content', {
    animation: {
      enable: false
    }
  });

});