"use strict";var navbarLiElement={navbar:document.querySelector("header nav"),ulElement:document.querySelector("header nav .container ul"),items:["Home","Recursos","A Baratas","Preços","Contato"]},navbar=navbarLiElement.navbar,items=navbarLiElement.items,ulElement=navbarLiElement.ulElement;ulElement.innerHTML=items.map(function(e,t){return'<li><a href="'+items[t]+'">'+e+"</a></li>"}).join(""),$(".depo").owlCarousel({loop:!0,margin:100,items:2,center:!0,dots:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1},1200:{items:1}}});