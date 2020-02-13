const header_items = document.querySelectorAll(".item_animated");
const header_loga = document.querySelector(".header_loga_animated");
const article1__button = document.querySelector(".article1__button");
const header_button = document.getElementsByTagName("button");
const navbar_collapse = document.querySelector(".navbar-collapse");

const tl = new TimelineMax({});

   article1__button.addEventListener("click", function(){
     setTimeout(function(){
     tl.fromTo(article1__button,0.7,{"background-color":"rgb(37,54,93)"},{"background-color":"rgb(106, 107, 24)"})
       .fromTo(article1__button,0.7,{"background-color":"rgb(106, 107, 24)"},{"background-color":"rgb(119, 0, 0)"})
       .fromTo(article1__button,0.7,{"background-color":"rgb(119, 0, 0)" },{"background-color":"rgb(0, 119, 119)"})
       .fromTo(article1__button,0.7,{"background-color":"rgb(0, 119, 119)" },{"background-color":"rgb(37,54,93)"});
     },500);
   });
 if($(window).width()>975){
  tl.fromTo(header_items[0], 1,   {opacity: 0, y:-100},{opacity: 1, y: 0}, "-=0.5")
    .fromTo(header_items[1], 1.2, {opacity: 0, y:-100},{opacity: 1, y: 0}, "-=0.9")
    .fromTo(header_items[2], 1.2, {opacity: 0, y:-100},{opacity: 1, y: 0}, "-=1")
    .fromTo(header_items[3], 1.4, {opacity: 0, y:-100},{opacity: 1, y: 0}, "-=1")
    .fromTo(header_items[4], 1.6, {opacity: 0, y:-100},{opacity: 1, y: 0}, "-=1");
 };
 setTimeout(function() {
      tl.fromTo(header_loga, 1,{opacity: 0},{opacity: 1})
    .fromTo($(".header_button"),        1.5,{opacity:0, x: "50"},{opacity:1, x: "0"}, "-=1.0")
    .fromTo($(".article1__baner_text"), 1,{opacity:0, x: "-180"},{opacity:1, x: "0"}, "-=0.5")
    .fromTo($(".article1__text"),       1,{opacity:0},{opacity:1}, "-=0.5")
    .fromTo($(".article1__button"),     1,{opacity:0, y:50},{opacity:1, y:0},         "-=0.5");
 }, 100);

header_button.addEventListener("click", function(){
  if(navbar_collapse.classList.contains("show")==false){
    tl.fromTo(header_items[0],0.4, {opacity: 0, y:-100},{opacity: 1, y: 0})
    .fromTo(header_items[1],  0.4, {opacity: 0, y:-100},{opacity: 1, y: 0}, "-=0.2")
    .fromTo(header_items[2],  0.4, {opacity: 0, y:-100},{opacity: 1, y: 0}, "-=0.2")
    .fromTo(header_items[3],  0.4, {opacity: 0, y:-100},{opacity: 1, y: 0}, "-=0.2")
    .fromTo(header_items[4],  0.4, {opacity: 0, y:-100},{opacity: 1, y: 0}, "-=0.2");
   }
   else if(navbar_collapse.classList.contains("show")==true){
  }
});

 
