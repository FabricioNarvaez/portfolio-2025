<template>
    <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16">Contacto</h2>

            <div class="flex flex-col md:flex-row gap-12 items-start md:items-center">
                <FormKit type="form" @submit="handleSubmit" submit-label="Enviar"
                        class="flex-1 bg-white p-10 rounded-3xl shadow-xl flex flex-col gap-6">
                    <FormKit
                        name="name"
                        type="text"
                        label="Nombre"
                        placeholder="Tu nombre"
                        validation="required"
                        :validation-messages="{ required: 'El Nombre es obligatorio'}"
                    />
                    <FormKit
                        name="email"
                        type="email"
                        label="Correo electrónico"
                        placeholder="Tu email"
                        validation="required|email"
                        :validation-messages="{ required: 'El Email es obligatorio'}"
                    />
                    <FormKit
                        name="message"
                        type="textarea"
                        label="Mensaje"
                        placeholder="Tu mensaje"
                        validation="required"
                        rows="6"
                        :validation-messages="{ required: 'El Mensaje es obligatorio'}"
                    />
                    <p v-if="success" class="text-green-600 mt-2">¡Mensaje enviado correctamente!</p>
                </FormKit>

                <div class="flex-1 flex flex-col justify-center gap-6 text-gray-700">
                    <p class="text-lg"><strong>Email:</strong> <a href="mailto:fabricio@example.com" class="text-blue-600 hover:underline">fabricio@example.com</a></p>
                    <p class="text-lg"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/fabricionarvaez" target="_blank" class="text-blue-600 hover:underline">linkedin.com/in/fabricionarvaez</a></p>
                    <p class="text-lg"><strong>GitHub:</strong> <a href="https://github.com/fabricionarvaez" target="_blank" class="text-blue-600 hover:underline">github.com/fabricionarvaez</a></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'

    const success = ref(false)

    const handleSubmit = (formData) => {
        console.log(formData)
        success.value = true

        setTimeout(() => success.value = false, 4000)
    }
</script>
