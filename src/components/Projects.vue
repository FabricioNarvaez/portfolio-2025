<template>
    <section id="projects" class="py-20 bg-gray-50">
        <h2 class="text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
            <ProjectsCard v-for="project in projectsStore.projects" 
                          :projectData="project" />
        </div>
    </section>
</template>

<script setup>
    import ProjectsCard from '@components/ProjectsCard.vue';
    import { useProjectsStore } from '../store/projectsStore';

    const projectsStore = useProjectsStore();
</script>