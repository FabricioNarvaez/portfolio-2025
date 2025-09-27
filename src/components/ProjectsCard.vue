<template>
    <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform hover:scale-105 transition">
        <img :src="projectData.image" :alt="projectData.alt" class="h-48 w-full object-contain drop-shadow-md p-3">
        <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-semibold mb-2">{{ projectData.title }}</h3>
            <p class="text-gray-600">{{ projectData.description }}</p>
            
            <div v-if="projectData.url" class="mt-4 mt-auto text-center"> 
                <a :href="projectData.url" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center px-6 py-3 bg-blue-600 text-white 
                           rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
                    Ver Proyecto
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        projectData: {
            type: Object,
            required: true
        }
    });
</script>