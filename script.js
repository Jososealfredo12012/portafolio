const swup = new Swup();

// Función para marcar el enlace activo
function nose(){
    const activePage = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.href.includes(`${activePage}`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Ejecutar al cargar la página por primera vez
nose();

// Ejecutar después de cada transición
swup.hooks.on('page:view', () => {
    nose();
});
