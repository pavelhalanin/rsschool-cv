document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
        if (offcanvas) {
            offcanvas.hide();
        }
    });
});
