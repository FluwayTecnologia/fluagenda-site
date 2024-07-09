window.addEventListener("scroll", function() {
    let header = document.querySelector('.cabecalho')
    header.classList.toggle('scrolled',window.scrollY > 0)
});
