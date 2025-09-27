<template>
    <Header/>
    <Hero/>
    <Projects/>
    <About/>
    <Skills/>
    <Contact/>
</template>

<script setup>
    import { onMounted, onUnmounted } from 'vue';
    import Header from '@components/Header.vue';
    import Hero from '@components/Hero.vue';
    import Projects from '@components/Projects.vue';
    import About from '@components/About.vue';
    import Contact from '@components/Contact.vue';
    import Skills from '@components/Skills.vue';

    import { useScroll } from '@composable/useScroll';
    const { handleScroll } = useScroll();


    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>
