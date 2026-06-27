class LuxuryFooter extends HTMLElement{

connectedCallback(){

this.innerHTML=`

<footer>

<div class="container">

<h3>

AMAN SAFARI

</h3>

<p>

Luxury Tanzania Journeys

</p>

<br>

© 2026

</div>

</footer>

`;

}

}

customElements.define(
"lux-footer",
LuxuryFooter
);
