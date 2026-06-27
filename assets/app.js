document.addEventListener("scroll",()=>{

document.querySelectorAll(".card")
.forEach(card=>{

const r=
card.getBoundingClientRect();

if(r.top<window.innerHeight-80){

card.style.opacity=1;

card.style.transform=
"translateY(0)";
}

});

});

document.querySelectorAll(".card")
.forEach(el=>{

el.style.opacity=0;

el.style.transform=
"translateY(40px)";

el.style.transition=
".8s";

});
const menu=

document.querySelector(
".mobile"
);

const links=

document.querySelector(
".links"
);

if(menu){

menu.onclick=()=>{

links.classList.toggle(
"show"
);

};

}
