<template>
    <section id="skills" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16">Habilidades Técnicas</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div class="skill-card" data-aos="fade-up" data-aos-delay="0"  v-scroll-reveal="{ delay: 200 }">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Frontend</h3>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <div class="skill-item">
                            <Icon icon="logos:vue" class="skill-icon" />
                            <span class="skill-name">Vue 3</span>
                        </div>
                        <div class="skill-item">
                            <Icon icon="logos:nuxt-icon" class="skill-icon" />
                            <span class="skill-name">NuxtJS</span>
                        </div>
                        <div class="skill-item">
                            <Icon icon="logos:html-5" class="skill-icon" />
                            <span class="skill-name">HTML</span>
                        </div>
                        <div class="skill-item">
                            <Icon icon="logos:css-3" class="skill-icon" />
                            <span class="skill-name">CSS</span>
                        </div>
                        <div class="skill-item">
                            <Icon icon="logos:sass" class="skill-icon" />
                            <span class="skill-name">SASS</span>
                        </div>
                        <div class="skill-item">
                            <Icon icon="logos:tailwindcss-icon" class="skill-icon" />
                            <span class="skill-name">Tailwind</span>
                        </div>
                    </div>
                </div>

                <div class="skill-card" data-aos="fade-up" data-aos-delay="100" v-scroll-reveal="{ delay: 300 }">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Backend</h3>
                    <div class="flex flex-wrap gap-4 justify-center">
                        
                        <div class="skill-item">
                            <Icon icon="logos:nodejs-icon" class="skill-icon" />
                            <span class="skill-name">Node.js</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:express" class="skill-icon" />
                            <span class="skill-name">Express</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:flask" class="skill-icon" />
                            <span class="skill-name">Flask</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:django-icon" class="skill-icon" />
                            <span class="skill-name">Django</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:python" class="skill-icon" />
                            <span class="skill-name">Python</span>
                        </div>
                    </div>
                </div>

                <div class="skill-card" data-aos="fade-up" data-aos-delay="200" v-scroll-reveal="{ delay: 400 }">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Bases de Datos</h3>
                    <div class="flex flex-wrap gap-4 justify-center">
                        
                        <div class="skill-item">
                            <Icon icon="logos:mongodb-icon" class="skill-icon" />
                            <span class="skill-name">MongoDB</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:postgresql" class="skill-icon" />
                            <span class="skill-name">PostgreSQL</span>
                        </div>
                        
                    </div>
                </div>

                <div class="skill-card" data-aos="fade-up" data-aos-delay="300" v-scroll-reveal="{ delay: 200 }">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Testing</h3>
                    <div class="flex flex-wrap gap-4 justify-center">
                        
                        <div class="skill-item">
                            <Icon icon="logos:jest" class="skill-icon" />
                            <span class="skill-name">Jest</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:mocha" class="skill-icon" />
                            <span class="skill-name">Mocha</span>
                        </div>

                        <div class="skill-item">
                            <Icon icon="skill-icons:vuejs-dark" class="skill-icon" />
                            <span class="skill-name">Vue Testing Library</span>
                        </div>
                    </div>
                </div>
                
                <div class="skill-card" data-aos="fade-up" data-aos-delay="400" v-scroll-reveal="{ delay: 300 }">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">DevOps & Tools</h3>
                    <div class="flex flex-wrap gap-4 justify-center">
                        
                        <div class="skill-item">
                            <Icon icon="logos:docker-icon" class="skill-icon" />
                            <span class="skill-name">Docker</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:google-cloud" class="skill-icon" />
                            <span class="skill-name">GCP</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:jira" class="skill-icon" />
                            <span class="skill-name">Jira</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:github" class="skill-icon" />
                            <span class="skill-name">GitHub</span>
                        </div>

                        <div class="skill-item">
                            <Icon icon="mdi:sync-circle" class="skill-icon" />
                            <span class="skill-name">CI/CD</span>
                        </div>
                        
                        <div class="skill-item">
                            <Icon icon="logos:postman" class="skill-icon" />
                            <span class="skill-name">Postman</span>
                        </div>
                    </div>
                </div>
                
                <div class="skill-card" data-aos="fade-up" data-aos-delay="500" v-scroll-reveal="{ delay: 400 }">
                    <h3 class="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Metodologías</h3>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <div class="skill-item">
                            <Icon icon="carbon:repeat" class="skill-icon" />
                            <span class="skill-name">Scrum</span>
                        </div>
                        <div class="skill-item">
                            <Icon icon="mdi:view-column-outline" class="skill-icon" />
                            <span class="skill-name">Kanban</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .skill-card {
        @apply bg-white p-6 rounded-xl shadow-lg border border-gray-100 
            transform hover:shadow-xl transition duration-300;
    }

    .skill-item {
        @apply flex flex-col items-center p-3 w-20 h-20 sm:w-24 sm:h-24 justify-between 
            rounded-lg bg-gray-50 border border-gray-200 cursor-default
            transform hover:scale-105 hover:bg-blue-50 transition duration-200;
    }

    .skill-icon {
        @apply text-4xl sm:text-5xl max-w-20;
    }

    .skill-name {
        @apply text-xs font-semibold text-gray-700 text-center;
    }

    .text-only-badge {
        @apply px-4 py-2 text-sm font-medium rounded-lg text-gray-700 bg-gray-200 
            hover:bg-blue-600 hover:text-white transition duration-200 
            cursor-default shadow-sm;
    }
</style>