document.addEventListener('DOMContentLoaded', () => {
    // Dashboard Sidebar Toggle
    const dashToggle = document.querySelector('.dash-toggle');
    const dashSidebar = document.querySelector('.dash-sidebar');
    const dashMain = document.querySelector('.dash-main');

    if (dashToggle && dashSidebar) {
        dashToggle.addEventListener('click', () => {
            dashSidebar.classList.toggle('active');
            if (window.innerWidth > 992) {
                // Adjust main content margin on desktop if needed
                // dashMain.classList.toggle('active');
            }
        });
    }

    // Close sidebar on mobile when clicking outside (optional)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
            if (!dashSidebar.contains(e.target) && !dashToggle.contains(e.target) && dashSidebar.classList.contains('active')) {
                dashSidebar.classList.remove('active');
            }
        }
    });
});
