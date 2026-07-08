document.addEventListener('DOMContentLoaded', () => {
    // Basic Slider Implementation (Can be expanded if actual slider HTML structure is used)
    // For now, this handles simple horizontal scrolling or basic next/prev logic if buttons are added
    
    const setupSlider = (sliderContainer) => {
        if (!sliderContainer) return;
        
        let isDown = false;
        let startX;
        let scrollLeft;

        sliderContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            sliderContainer.classList.add('active');
            startX = e.pageX - sliderContainer.offsetLeft;
            scrollLeft = sliderContainer.scrollLeft;
        });

        sliderContainer.addEventListener('mouseleave', () => {
            isDown = false;
            sliderContainer.classList.remove('active');
        });

        sliderContainer.addEventListener('mouseup', () => {
            isDown = false;
            sliderContainer.classList.remove('active');
        });

        sliderContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderContainer.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            sliderContainer.scrollLeft = scrollLeft - walk;
        });
    };

    const deptGrid = document.querySelector('.dept-grid');
    setupSlider(deptGrid);
});
