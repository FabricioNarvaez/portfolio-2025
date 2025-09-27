import { ref, onMounted, onUnmounted } from 'vue';

export function useScroll() {
    const scrolled = ref(false);
    const isOpen = ref(false);

    const handleScroll = () => {
        scrolled.value = window.scrollY > 50
        if (isOpen.value) {
            isOpen.value = false;
        }
    };

    const scrollToSection = (hash) => {
        isOpen.value = false;
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                })
            }
        }, 100);
    };

    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));

    return { scrolled, isOpen, handleScroll, scrollToSection };
}