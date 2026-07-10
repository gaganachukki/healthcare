document.addEventListener('DOMContentLoaded', () => {

    // Contact / Appointment Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const dept = document.getElementById('department');
            const date = document.getElementById('date');

            // Name validation
            if (name.value.trim() === '') {
                showError(name, 'nameError');
                isValid = false;
            } else {
                hideError(name, 'nameError');
            }

            // Email validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.value.match(emailPattern)) {
                showError(email, 'emailError');
                isValid = false;
            } else {
                hideError(email, 'emailError');
            }

            // Phone validation
            const phonePattern = /^\+?[0-9]{10,14}$/;
            if (!phone.value.match(phonePattern)) {
                showError(phone, 'phoneError');
                isValid = false;
            } else {
                hideError(phone, 'phoneError');
            }

            // Select validation
            if (dept && dept.value === '') {
                showError(dept, 'deptError');
                isValid = false;
            } else if (dept) {
                hideError(dept, 'deptError');
            }

            // Date validation
            if (date && date.value === '') {
                showError(date, 'dateError');
                isValid = false;
            } else if (date) {
                hideError(date, 'dateError');
            }

            if (isValid) {
                const btn = contactForm.querySelector('button[type="submit"]');
                btn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Processing...';
                
                setTimeout(() => {
                    window.location.href = '404.html';
                }, 1500);
            }
        });
    }

    // Helper functions
    function showError(input, errorId) {
        input.classList.add('error');
        document.getElementById(errorId).style.display = 'block';
    }

    function hideError(input, errorId) {
        input.classList.remove('error');
        document.getElementById(errorId).style.display = 'none';
    }
});
