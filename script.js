// Adicione este arquivo se estiver usando um carrossel simples
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const slideWidth = -currentSlide * 100 + '%';
    document.querySelector('.carousel').style.transform = 'translateX(' + slideWidth + ')';
}

document.querySelector('.carousel').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

showSlide(currentSlide); // Mostra o primeiro slide ao carregar a página


function toggleCollapse(collapseId) {
    const collapse = document.getElementById(collapseId);
    collapse.classList.toggle('active');
}
// Collapses de menu lateral