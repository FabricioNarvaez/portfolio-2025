<template>
    <section id="about" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        <div class="flex-1 flex justify-center" v-scroll-reveal="{ delay: 200 }">
            <img src="@assets/fabricio.jpg" alt="Fabricio Narváez" 
                class="rounded-2xl shadow-lg w-64 h-64 object-cover border-4 border-blue-500" />
        </div>

        <div class="flex-1" v-scroll-reveal="{ delay: 400 }">
            <h2 class="text-4xl font-bold mb-6">Sobre mí</h2>
            <p class="text-gray-700 mb-6 leading-relaxed">
            Desarrollador Front-End con más de 3 años de experiencia construyendo aplicaciones web SPA y SSR en entornos colaborativos y ágiles. Especializado en Vue 3 y NuxtJS, con capacidad para desarrollar desde cero interfaces modernas, optimizadas y escalables, integradas con APIs REST. Con experiencia tanto freelance como en empresas del sector retail y energético.
            </p>

            <div class="flex gap-4 flex-wrap">
            <a href="/cv/curriculum_Fabricio_2025.pdf" download 
                class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Descargar CV
            </a>
            <button @click="openModal = true"
                    class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition">
                Ver CV
            </button>
            </div>
        </div>
        </div>

        <div v-if="openModal" @click.self="openModal = false" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white w-11/12 md:w-3/4 lg:w-2/3 h-4/5 rounded-xl shadow-lg p-4 relative">
            <button @click="openModal = false" class="absolute top-4 right-4 text-white hover:text-gray-200 text-4xl font-bold">&times;</button>
            <iframe src="/cv/curriculum_Fabricio_2025.pdf" class="w-full h-full rounded-lg"></iframe>
        </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'

    const openModal = ref(false)
</script>
