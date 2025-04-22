const swup = new Swup();

// Función para marcar el enlace activo
function nose() {
    const activePage = window.location.pathname === '/' ? '/index.html' : window.location.pathname;

    document.querySelectorAll('nav a').forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === activePage || (linkPath === '/' && activePage === '/index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


nose(); // Llamar a la función al cargar la página

// Ejecutar después de cada transición
swup.hooks.on('page:view', () => {
    nose();
});
