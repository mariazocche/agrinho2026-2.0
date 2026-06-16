// Observer para animações ao aparecer na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener("DOMContentLoaded", () => {

    // Efeito Fade
    const fadeElements = document.querySelectorAll(
        "h2, .card-text, .card, .cabecalho, .imagem-centralizada, img"
    );

    fadeElements.forEach(el => {
        el.classList.add('efeito-fade');
        observer.observe(el);
    });

    // Efeito Zoom
    const zoomElements = document.querySelectorAll(
        ".card img, .navbar"
    );

    zoomElements.forEach(el => {
        el.classList.add('efeito-zoom');
        observer.observe(el);
    });

    // Efeito Slide
    const slideElements = document.querySelectorAll(
        "p.alinha, .card-body, footer"
    );

    slideElements.forEach(el => {
        el.classList.add('efeito-slide');
        observer.observe(el);
    });

    // Botões
    const botoes = document.querySelectorAll(".botao");

    botoes.forEach(btn => {
        btn.classList.add("efeito-botao");
    });

    // Hover nas imagens
    const imagensHover = document.querySelectorAll("img");

    imagensHover.forEach(img => {
        img.classList.add("hover-zoom");
    });

});
function abrirModal(tipo) {
    const titulo = document.getElementById("modalTitulo");
    const texto = document.getElementById("modalTexto");

    switch(tipo) {
        case "deltametrina":
            titulo.innerText = "🐛 Deltametrina";
            texto.innerText =
            "A deltametrina é um inseticida piretroide amplamente utilizado na agricultura para controlar lagartas, pulgões, percevejos e outras pragas. Atua no sistema nervoso dos insetos, causando sua morte.";
            break;

        case "malathion":
            titulo.innerText = "🐜 Malathion";
            texto.innerText =
            "O malathion é um inseticida organofosforado usado no controle de moscas, pulgões e outros insetos que atacam plantações. Seu uso deve seguir orientações técnicas devido à sua toxicidade.";
            break;

        case "lambda":
            titulo.innerText = "🦟 Lambda-cialotrina";
            texto.innerText =
            "A lambda-cialotrina é um inseticida piretroide de ação rápida, eficaz contra diversas pragas agrícolas. É muito utilizada em culturas de soja, milho, algodão e hortaliças.";
            break;
    }

    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
}