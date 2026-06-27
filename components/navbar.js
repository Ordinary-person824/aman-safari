class LuxuryNavbar extends HTMLElement {

connectedCallback(){

this.innerHTML=`

<nav class="nav">

<div class="container nav-inner">

<div class="logo">

AMAN SAFARI

</div>

<ul class="links">

<li><a href="index.html">Home</a></li>

<li><a href="serengeti.html">Serengeti</a></li>

<li><a href="tarangire.html">Tarangire</a></li>

<li><a href="ngorongoro.html">Ngorongoro</a></li>

<li><a href="ruaha.html">Ruaha</a></li>

<li><a href="kilimanjaro.html">Kilimanjaro</a></li>

</ul>

</div>

</nav>

`;

}

}

customElements.define(
"lux-navbar",
LuxuryNavbar
);
