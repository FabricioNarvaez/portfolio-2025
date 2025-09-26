<template>
    <header :class="scrolled ? 'bg-white shadow-md' : 'bg-transparent'"
            class="fixed w-full top-0 z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        <a href="#hero">
            <img src="@/assets/logo.png" alt="Logo" class="h-10 drop-shadow-md">
        </a>

        <button @click="isOpen = !isOpen" class="md:hidden p-2 focus:outline-none z-50 text-gray-800">
            <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <nav class="hidden md:block">
            <ul class="flex gap-6">
            <li><a href="#hero" class="hover:text-blue-500">Inicio</a></li>
            <li><a href="#about" class="hover:text-blue-500">Sobre mí</a></li>
            <li><a href="#projects" class="hover:text-blue-500">Proyectos</a></li>
            <li><a href="#skills" class="hover:text-blue-500">Habilidades</a></li>
            <li><a href="#contact" class="hover:text-blue-500">Contacto</a></li>
            </ul>
        </nav>
        </div>

        <Transition name="slide-down">
            <nav v-if="isOpen" class="md:hidden bg-white shadow-lg absolute top-full left-0 w-full pb-2">
                <ul class="flex flex-col items-center gap-2 py-4">
                <li><a href="#hero" @click="closeMenu" class="block w-full text-center py-2 text-gray-700 hover:text-blue-500 transition">Inicio</a></li>
                <li><a href="#about" @click="closeMenu" class="block w-full text-center py-2 text-gray-700 hover:text-blue-500 transition">Sobre mí</a></li>
                <li><a href="#projects" @click="closeMenu" class="block w-full text-center py-2 text-gray-700 hover:text-blue-500 transition">Proyectos</a></li>
                <li><a href="#skills" @click="closeMenu" class="block w-full text-center py-2 text-gray-700 hover:text-blue-500 transition">Habilidades</a></li>
                <li><a href="#contact" @click="closeMenu" class="block w-full text-center py-2 text-gray-700 hover:text-blue-500 transition">Contacto</a></li>
                </ul>
            </nav>
        </Transition>
    </header>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const scrolled = ref(false);
    const isOpen = ref(false);

    const handleScroll = () => {
        scrolled.value = window.scrollY > 50
        if (isOpen.value) {
            isOpen.value = false
        }
    };

    const closeMenu = () => {
        isOpen.value = false
    };

    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped>
    a {
        transition: color 0.3s;
    }
</style>

<style scoped>
    a {
        transition: color 0.3s;
    }

    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: all 0.3s ease-in-out;
        overflow: hidden;
    }

    .slide-down-enter-from {
        opacity: 0;
        max-height: 0;
        transform: translateY(-10px);
    }

    .slide-down-leave-to {
        opacity: 0;
        max-height: 0;
        transform: translateY(-10px);
    }

    .slide-down-enter-to,
    .slide-down-leave-from {
        opacity: 1;
        max-height: 500px;
        transform: translateY(0);
    }
</style>