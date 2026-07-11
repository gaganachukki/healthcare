document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const body = item.querySelector('.accordion-body');
        
        if (header && body) {
            header.addEventListener('click', (e) => {
                e.preventDefault();
                const isActive = item.classList.contains('active');
                
                // Close all other items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        const otherBody = otherItem.querySelector('.accordion-body');
                        if (otherBody) {
                            otherBody.style.maxHeight = otherBody.scrollHeight + 'px';
                            otherBody.offsetHeight; // force reflow
                            otherItem.classList.remove('active');
                            otherBody.style.maxHeight = '0px';
                        }
                    }
                });

                // Toggle current item
                if (isActive) {
                    body.style.maxHeight = body.scrollHeight + 'px';
                    body.offsetHeight; // force reflow
                    item.classList.remove('active');
                    body.style.maxHeight = '0px';
                } else {
                    item.classList.add('active');
                    body.style.maxHeight = body.scrollHeight + 'px';
                    
                    // Set height to none after transition so it remains responsive on resize
                    const handleTransitionEnd = (e) => {
                        if (e.propertyName === 'max-height' && item.classList.contains('active')) {
                            body.style.maxHeight = 'none';
                        }
                        body.removeEventListener('transitionend', handleTransitionEnd);
                    };
                    body.addEventListener('transitionend', handleTransitionEnd);
                }
            });
        }
    });
});
