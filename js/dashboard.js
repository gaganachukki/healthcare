document.addEventListener('DOMContentLoaded', () => {
    // --- Dynamic Profile Population from Login Email ---
    const email = localStorage.getItem('userEmail');
    if (email) {
        // Extract name before the @ and format it (e.g. john.doe -> John Doe)
        const namePart = email.split('@')[0];
        const formattedName = namePart.split(/[._-]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        
        // Update Desktop Title (Welcome text)
        const welcomeTitle = document.querySelector('.desktop-title');
        if (welcomeTitle) {
            welcomeTitle.textContent = `Welcome, ${formattedName}`;
        }
        
        // Update Sidebar Profile Name & Email
        const spInfoH4 = document.querySelector('.sp-info h4');
        if (spInfoH4) spInfoH4.textContent = formattedName;
        const spInfoP = document.querySelector('.sp-info p');
        if (spInfoP) spInfoP.textContent = email;
        
        // Update Desktop Header Profile Name
        const desktopProfileSpan = document.querySelector('.dash-profile.desktop-profile span');
        if (desktopProfileSpan) desktopProfileSpan.textContent = formattedName;
        
        // Update Mobile & Sidebar Avatar Initials
        const initials = formattedName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        
        // Update all avatar circles (Sidebar, Desktop Header)
        const allAvatars = document.querySelectorAll('.sp-avatar');
        allAvatars.forEach(avatar => avatar.textContent = initials);
        
        // Update Mobile header profile
        const dashProfileMobile = document.querySelector('.dash-profile-mobile');
        if (dashProfileMobile) dashProfileMobile.textContent = initials;
    }

    // Dashboard Sidebar Toggle
    const dashToggle = document.querySelector('.dash-toggle');
    const dashSidebar = document.querySelector('.dash-sidebar');
    const dashMain = document.querySelector('.dash-main');

    if (dashToggle && dashSidebar) {
        // Toggle logic is handled in the inline script of userdashboard.html
        // to properly manage body overflow and main content transitions.
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
