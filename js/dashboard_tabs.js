
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.dash-nav a[data-target]');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links and tabs
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Show corresponding tab content
            const targetId = link.getAttribute('data-target');
            const targetTab = document.getElementById(targetId);
            if (targetTab) {
                targetTab.classList.add('active');
            }

            // Automatically close the sidebar on mobile view when an option is clicked
            if (window.innerWidth <= 992) {
                const dashSidebar = document.querySelector('.dash-sidebar');
                const dashMain = document.querySelector('.dash-main');
                if (dashSidebar) {
                    dashSidebar.classList.remove('active');
                    if (dashMain) dashMain.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
});
