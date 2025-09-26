<template>
    <section id="skills" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16">Habilidades Técnicas</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div class="skill-card" data-aos="fade-up" data-aos-delay="0">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Frontend</h3>
                    <div class="flex flex-wrap gap-3">
                        <span class="skill-badge">Vue 3</span>
                        <span class="skill-badge">NuxtJS</span>
                        <span class="skill-badge">HTML</span>
                        <span class="skill-badge">CSS</span>
                        <span class="skill-badge">SASS</span>
                        <span class="skill-badge">Less</span>
                        <span class="skill-badge">Tailwind</span>
                    </div>
                </div>

                <div class="skill-card" data-aos="fade-up" data-aos-delay="100">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Backend</h3>
                    <div class="flex flex-wrap gap-3">
                        <span class="skill-badge">Node.js</span>
                        <span class="skill-badge">Express</span>
                        <span class="skill-badge">Flask</span>
                        <span class="skill-badge">Django</span>
                        <span class="skill-badge">Python</span>
                    </div>
                </div>

                <div class="skill-card" data-aos="fade-up" data-aos-delay="200">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Bases de Datos</h3>
                    <div class="flex flex-wrap gap-3">
                        <span class="skill-badge">MongoDB</span>
                        <span class="skill-badge">PostgreSQL</span>
                    </div>
                </div>
                
                <div class="skill-card" data-aos="fade-up" data-aos-delay="300">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Testing</h3>
                    <div class="flex flex-wrap gap-3">
                        <span class="skill-badge">Jest</span>
                        <span class="skill-badge">Mocha</span>
                        <span class="skill-badge">Vue Testing Library</span>
                    </div>
                </div>
                
                <div class="skill-card" data-aos="fade-up" data-aos-delay="400">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">DevOps & Tools</h3>
                    <div class="flex flex-wrap gap-3">
                        <span class="skill-badge">Docker</span>
                        <span class="skill-badge">CI/CD</span>
                        <span class="skill-badge">GCP</span>
                        <span class="skill-badge">Jira</span>
                        <span class="skill-badge">GitLab</span>
                        <span class="skill-badge">Postman</span>
                    </div>
                </div>

                <div class="skill-card" data-aos="fade-up" data-aos-delay="500">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Metodologías</h3>
                    <div class="flex flex-wrap gap-3">
                        <span class="skill-badge">Scrum</span>
                        <span class="skill-badge">Kanban</span>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<style scoped>
    .skill-card {
        @apply bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-100 
            transform hover:shadow-xl transition duration-300;
    }
    .skill-badge {
        @apply px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 
            hover:bg-blue-600 hover:text-white transition duration-200 
            cursor-default shadow-sm;
    }
</style>