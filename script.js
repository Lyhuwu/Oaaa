document.addEventListener("DOMContentLoaded", () => {
    
    const elementosParaAparecer = document.querySelectorAll(".fade-in");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    elementosParaAparecer.forEach(elemento => {
        observador.observe(elemento);
    });

});
