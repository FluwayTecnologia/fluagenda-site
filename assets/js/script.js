window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    const body = document.body;
    
    if (scrollPosition > 0) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const defaultImage = 'images/logo-plans-default.png';
    const selectedImage = 'images/logo-plans-selected.png';

    const updateImages = function() {
        document.querySelectorAll('.plan-logo').forEach(img => img.src = defaultImage);
        const checkedRadio = document.querySelector('.input-plans:checked');
        if (checkedRadio) {
            checkedRadio.nextElementSibling.querySelector('.plan-logo').src = selectedImage;
        }
    };

    document.querySelectorAll('.input-plans').forEach(radio => {
        radio.addEventListener('change', updateImages);
    });

    updateImages();
});