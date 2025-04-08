const sections = document.querySelectorAll('.hidden');
const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Para parar de observar esta seção
            if (document.querySelectorAll('.hidden:not(.show)').length === 0) {
                // Se não houver mais seções ocultas, adicione a classe à página
                document.body.classList.add('all-sections-visible');
            }
        }
    });
});

sections.forEach((section) => {
    myObserver.observe(section);
});