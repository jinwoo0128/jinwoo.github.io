window.onload = function(){   //온로드 시작
    //슬라이더1 좌우
    $('.slider1').bxSlider({
        pager:null,
        nextSelector:'#next_slider',
        prevSelector:'#prev_slider',
        nextText: '&gt;',
        prevText: '&lt;',
      });
    //슬라이더2 자동 
    $('.slider2').bxSlider({
        auto: true,
        infiniteLoop:true,
        pager:null,
        controls:false,
        minSlides:5,
        moveSlides:1,
        mode: 'vertical',
        slideMargin: 10,
        pause:1500,
      });
//

(function MainNav(){
  var mainWrap = document.querySelector(".main_wrap")
  var NavWrap = document.querySelector(".nav_wrap")
  var mainNav = NavWrap.querySelector(".nav_menu")
  var mainDownNav = NavWrap.querySelector(".nav_menu_inner")

  mainNav.addEventListener("click", clickWork)
  
  function clickWork(e){
      e.preventDefault();
    if (e.target.tagName !== "IMG")return;
    if (mainDownNav.className === "nav_menu_inner"){
      mainWrap.classList.add("turn");
      mainDownNav.classList.add("turn");
    } else {
      mainWrap.classList.remove("turn");
      mainDownNav.classList.remove("turn");
    }
  }

  //리사이즈 초기화
  window.addEventListener("resize", function () {
    clearTimeout();
    var resizeWork = setTimeout(sizeCheck, 200);
  });
  var Size = window.innerWidth;
  sizeCheck();
  function sizeCheck() {
    var windowSize = window.innerWidth;
    if (windowSize > 768) {
      mainWrap.classList.remove("turn")
      mainDownNav.classList.remove("turn")
    }
  }
})();

(function MAINDOWNBOX(){
  var DownBox = document.querySelector(".m1_down_box")
  var DownBtn = DownBox.querySelector(".download_20")
  var DownTable = DownBox.querySelector(".m1_down_table")

  DownBtn.addEventListener("click", clickWork)

  function clickWork(e) {
    
    e.preventDefault();
    if(DownTable.className === "m1_down_table"){
      DownTable.classList.add("on")
    } else DownTable.classList.remove("on")
  }
})();



} //온로드 끝
