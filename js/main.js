$(function(){

  $('.visual').slick({
    autoplay: true, //슬라이드 자동 실행
    dots:true, //페이지 버튼 보이기
    fade:true, //화면전환 방식
    autoplaySpeed:3000, //자동 전환 속도
  });
  // *******************************************************
  $('.gnb').mouseenter(function(){
    $('#header').stop().animate({'height':411},250);
    $('.depth2').slideDown(250);
  });

  $('#header').mouseleave(function(){
    $('#header').stop().animate({'height':144},250);
    $('.depth2').slideUp(250);
  });
  // *******************************************************

  $('.sec_01_list li').click(function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    let num = $(this).index();
    console.log(num);
    $('.sec_01_tab_slide').eq(num).show().siblings().hide();
    
  });

  // *******************************************************
  $('.new_product_slide').slick({
    autoplay:true,
    dots:true,
    arrows:false,
    autoplaySpeed:5000
  });
  // *******************************************************
  $('.sec_01_tab_slide').slick({
    slidesToShow: 7,
    slidesToScroll: 5,
    arrows:false,
    dots:true,
    autoplay: false,
    autoplaySpeed: 2000,
  });
  // *******************************************************

  // *******************************************************
  $('.family').click(function(){
    $('.family ul').stop().slideToggle();
  });
  






  
  

});