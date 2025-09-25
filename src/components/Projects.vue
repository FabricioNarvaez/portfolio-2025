<template>
    <section id="projects" class="py-20 bg-gray-50">
        <h2 class="text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition">
            <img src="@/assets/logo.png" alt="Migración El Corte Inglés" class="h-48 w-full object-cover">
            <!-- <img src="@/assets/elcorteingles.jpg" alt="Migración El Corte Inglés" class="h-48 w-full object-cover"> -->
            <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Migración del frontal de El Corte Inglés</h3>
            <p class="text-gray-600">Participación en la migración de Dust a Vue 2 y Vue 3, asegurando rendimiento y escalabilidad.</p>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition">
            <img src="@/assets/logo.png" alt="Asistentes IA" class="h-48 w-full object-cover">
            <!-- <img src="@/assets/ai-assistants.jpg" alt="Asistentes IA" class="h-48 w-full object-cover"> -->
            <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Asistentes IA y Chatbots con Vue 3</h3>
            <p class="text-gray-600">Desarrollo de interfaces modernas y responsivas para asistentes basados en IA y chatbots.</p>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition">
            <img src="@/assets/logo.png" alt="Gestión Torneo de Futbol" class="h-48 w-full object-cover">
            <!-- <img src="@/assets/futbol-tournament.jpg" alt="Gestión Torneo de Futbol" class="h-48 w-full object-cover"> -->
            <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Web para Torneo de Fútbol</h3>
            <p class="text-gray-600">Creación de una web dinámica para gestionar un torneo, incluyendo resultados y clasificación.</p>
            </div>
        </div>
        </div>
    </section>
</template>
