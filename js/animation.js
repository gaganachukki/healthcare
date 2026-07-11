document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Add CSS for .reveal classes dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        @media (min-width: 769px) {
            .reveal {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
            }
            .reveal.active {
                opacity: 1;
                transform: translateY(0);
            }
            .reveal.fade-left {
                transform: translateX(-50px);
            }
            .reveal.fade-right {
                transform: translateX(50px);
            }
            .reveal.fade-left.active, .reveal.fade-right.active {
                transform: translateX(0);
            }
            .reveal.delay-1 { transition-delay: 0.1s; }
            .reveal.delay-2 { transition-delay: 0.2s; }
            .reveal.delay-3 { transition-delay: 0.3s; }
            .reveal.delay-4 { transition-delay: 0.4s; }
        }
        @media (max-width: 768px) {
            .reveal {
                opacity: 1 !important;
                transform: none !important;
                transition: none !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Floating icons animation
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        icon.style.animation = `float ${3 + index}s ease-in-out infinite`;
    });

    const floatStyle = document.createElement('style');
    floatStyle.innerHTML = `
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
        .floating-icon {
            display: inline-block;
        }
    `;
    document.head.appendChild(floatStyle);
});
