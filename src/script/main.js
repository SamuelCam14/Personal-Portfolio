document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observerOptions = {
        root: null, // Observa dentro del viewport
        threshold: 0, // Detecta solo cuando el top cruza el threshold
        rootMargin: "-50% 0px -50% 0px", // Configura el umbral en el 50% del viewport
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.id;
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (entry.isIntersecting) {
                // Elimina la clase activa de todos los enlaces
                navLinks.forEach((link) => link.classList.remove("active"));
                // Agrega la clase activa al enlace correspondiente
                navLink.classList.add("active");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas las secciones
    sections.forEach((section) => observer.observe(section));
});
