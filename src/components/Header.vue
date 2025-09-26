<template>
  <header :class="scrolled ? 'bg-white shadow-md' : 'bg-transparent'" class="fixed w-full top-0 z-50 transition-all">
    <div class="max-w-7xl mx-auto flex justify-between items-center p-4">
      <img src="@/assets/logo.png" alt="Logo" class="h-10">
      <nav>
        <ul class="flex gap-6">
          <li><a href="#hero" class="hover:text-blue-500">Inicio</a></li>
          <li><a href="#about" class="hover:text-blue-500">Sobre mí</a></li>
          <li><a href="#projects" class="hover:text-blue-500">Proyectos</a></li>
          <li><a href="#skills" class="hover:text-blue-500">Habilidades</a></li>
          <li><a href="#contact" class="hover:text-blue-500">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const scrolled = ref(false)

    const handleScroll = () => {
    scrolled.value = window.scrollY > 50
    }

    onMounted(() => window.addEventListener('scroll', handleScroll))
    onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
    a {
        transition: color 0.3s;
    }
</style>
