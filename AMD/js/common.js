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


var icon = document.querySelector(".search_icon");
var Searcher = document.querySelector(".search_bar");
var openMenu;

icon.addEventListener("mouseover", enterWork)
icon.addEventListener("mouseout", leaveWork)

function enterWork(e) {
Searcher.classList.add("on");
openMenu = Searcher;
}
function leaveWork(e) {
    if (!openMenu) { return; }
    
    if (!Check(openMenu, e.relatedTarget)) {
        openMenu.className = "search_bar";
    }
    function Check(openMenu, Moveto) {
        if (openMenu == Moveto) {
            return true;
        }
        return false;
    }

}





   

   
