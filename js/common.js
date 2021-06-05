// header add fixed
$(function(){
  $(window).scroll(function(){
    // 공통변수
    let thisScrollTop = $(this).scrollTop();

    // navivation fixed
    const headerBar = $("header");
    if( thisScrollTop > 0 ){
      headerBar.addClass("headerBg");
    }else{
      headerBar.removeClass("headerBg");
    };
  });
});

$(function(){
  $("#mainbanner").addClass("active");
})
