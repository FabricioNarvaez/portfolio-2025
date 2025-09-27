
export default {
    mounted(el, binding) {
        const options = {
            threshold: 0.1,
            rootMargin: '0px',
            ...binding.value
        };

        const INITIAL_CLASSES = 'opacity-0 translate-y-8';
        const FINAL_CLASSES = 'opacity-100 translate-y-0';
        const DURATION_CLASS = 'duration-1000';

        el.classList.add(
            ...INITIAL_CLASSES.split(' '),
            DURATION_CLASS,
            'transition-all',
            'ease-out'
        );

        if (options.delay) {
            el.style.transitionDelay = `${options.delay}ms`;
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.remove(...INITIAL_CLASSES.split(' '));
                    el.classList.add(...FINAL_CLASSES.split(' '));
                    
                    observer.unobserve(el);
                }
            });
        }, options);

        observer.observe(el);
    },
};