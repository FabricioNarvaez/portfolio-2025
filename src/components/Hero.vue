<template>
    <section id="hero" class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-600 text-white text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 
            opacity-0 translate-y-4 transition-all duration-1000 ease-out animate-hero-fade-in-1">
            Fabricio Narváez
        </h1>
        <p class="text-xl md:text-2xl mb-8 
            opacity-0 translate-y-4 transition-all duration-1000 ease-out animate-hero-fade-in-2">
            Desarrollador Frontend | Vue.js | API REST
        </p>
        <a role="button" @click="scrollToSection('#projects')" class="animate-bounce px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition">Ver Proyectos</a>
    </section>
</template>

<script setup>
  import { useScroll } from '@composable/useScroll';

  const { scrollToSection } = useScroll();
</script>