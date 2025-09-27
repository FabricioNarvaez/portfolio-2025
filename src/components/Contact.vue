<template>
    <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16">Contacto</h2>

            <div class="flex flex-col md:flex-row gap-12 items-start md:items-center justify-center">
                <FormKit type="form" @submit.prevent="handleSubmit" submit-label="Enviar" name="contact-form"
                        :classes="{
                            form: 'flex-1 w-full md:max-w-lg bg-white p-6 rounded-xl shadow-lg',
                            button: 'bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition',
                            outer: 'flex flex-col gap-6'
                        }"
                >
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

                <div class="flex-1 max-w-xs flex flex-col justify-center gap-6 text-gray-700">
                    <div class="flex justify-center gap-3 text-lg">
                        <a href="mailto:narvaezfabricio38@gmail.com" class="flex items-center gap-3 text-lg hover:underline">
                            <Icon icon="mdi:email" class="text-blue-600 text-4xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/fabricio-narv%C3%A1ez-narv%C3%A1ez/" target="_blank" class="hover:underline">
                            <Icon icon="mdi:linkedin" class="text-blue-600 text-4xl" />
                        </a>
                        <a href="https://github.com/FabricioNarvaez" target="_blank" class="hover:underline">
                            <Icon icon="mdi:github" class="text-blue-600 text-4xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'

    const success = ref(false)

    const handleSubmit = async (formData, node) => {
        try {
            const response = await fetch(window.location.href, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString() 
            });

            if (response.ok) {
                success.value = true;
                node.reset();
            } else {
                console.error("Error al enviar el formulario a Vercel:", response.statusText);
            }
        } catch (e) {
            console.error("Error de conexión:", e);
        };

        setTimeout(() => success.value = false, 4000)
    }
</script>
