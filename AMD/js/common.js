(function langmenuoption(){
    var langBtn = document.querySelector(".lang");
    var overMenu = langBtn.querySelector(".lang_option");
    langBtn.addEventListener("mouseenter", enterWork);
    langBtn.addEventListener("mouseleave", leaveWork);
    var openedMenu;
    function enterWork(){
        var subMenu = overMenu;
        langBtn.style.backgroundColor = "white";
        langBtn.firstChild.style.color = "black";
        if (!subMenu) {return;}
        subMenu.className = "lang_option on";
        openedMenu = subMenu;
    }
    function leaveWork() {
        if(!openedMenu){return;}
        openedMenu.className = "lang_option";
        langBtn.style.backgroundColor = "black";
        langBtn.firstChild.style.color = "white";
    }
})();

(function NavMenuOption(){
    var mainNav = document.querySelector(".main_nav");
    var navBtn = mainNav.querySelectorAll(".main_nav > ul > li");
    for(var i = 0; i < navBtn.length; i++){
        navBtn[i].addEventListener("mouseenter", enterWork);
        navBtn[i].addEventListener("mouseleave", leaveWork);
    }
    var OpenMenu;
    function enterWork(e){
        var subMenu = this.querySelector(".sub");
        if (!subMenu) {return;}
        subMenu.classList.add("on");
        e.target.classList.add("on");
        OpenMenu = subMenu;
    }
    function leaveWork(e) {
        if(!OpenMenu){return;}
        OpenMenu.classList.remove("on");
        e.target.classList.remove("on");
    }
})();

(function LeftMenu(){
    var Wrap = document.querySelector(".wrap");
    var mainNav = Wrap.querySelector(".main_nav");
    var Menu = mainNav.querySelector(".button");
    Menu.addEventListener("click", leftOpen);
    function leftOpen(e){
        e.preventDefault();
        if(Menu.className === "button"){
            Menu.classList.add("on");
            Wrap.classList.add("turn");
        } else if(Menu.className === "button on"){
            Menu.classList.remove("on");
            Wrap.classList.remove("turn");
        }
    }

    window.addEventListener("resize", function () {
        clearTimeout();
        var resizeWork = setTimeout(sizeCheck, 200);
    });
    var Size = window.innerWidth;
    sizeCheck();
    function sizeCheck() {
        var windowSize = window.innerWidth;
        if (windowSize > 1025) {
            Menu.classList.remove("on");
            Wrap.classList.remove("turn");
        }
    }
})();


var icon = document.querySelector(".search_item");
var Searcher = document.querySelector(".search_bar");

icon.addEventListener("mouseenter", overWork);
// icon.addEventListener("mouseleave", outWork2);
Searcher.addEventListener("mouseleave", outWork);


function overWork(e) {
    Searcher.classList.add("on");
}
function outWork(e) {

    // if (!Check(Searcher, e.relatedTarget)) {
        Searcher.classList.remove("on");
    // }
    // function Check(openMenu, Moveto) {
    //     console.log(Moveto)
    //     while ( openMenu.tagName !== "HTML") {
    //         if (openMenu == Moveto) {
    //             return true;
    //         }
    //         openMenu = openMenu.parentNode;
    //     }
    //     return false;
    // }

}
function outWork2(e) {

   
        Searcher.classList.remove("on");

}

// (function search_barWork() {
//     var icon = document.querySelector(".search_icon");
//     var Searcher = document.querySelector(".search_bar");

//     icon.addEventListener("click", clickWork)

//     function clickWork(e) {
//         e.preventDefault();
//         if (Searcher.className === "search_bar"){
//             Searcher.classList.add("on")
//         } else {
//             Searcher.classList.remove("on")
//         }
//     }
// })();



   

   
