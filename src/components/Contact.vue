<template>
    <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4" v-scroll-reveal="{ delay: 200 }">
            <h2 class="text-4xl font-bold text-center mb-16">Contacto</h2>

            <div class="flex flex-col md:flex-row gap-12 items-start md:items-center justify-center">
                <FormKit type="form" @submit="handleSubmit" submit-label="Enviar" name="contact-form"
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
    import { useNotificationStore } from '@store/notification';

    const notificationStore = useNotificationStore();

    const FORM_URL = import.meta.env.VITE_FORM_URL || '';

    const handleSubmit = async (formData, node) => {
        try {
            const response = await fetch(FORM_URL, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            notificationStore.show = true;
            if (response.ok) {
                notificationStore.text = "Formulario enviado con éxito";
                notificationStore.error = false;
                node.reset();
            } else {
                notificationStore.text = "Error al enviar el formulario";
                notificationStore.error = true;
                console.error("Error al enviar el formulario:", response.statusText);
            }
        } catch (e) {
            console.error("Error de conexión:", e);
            notificationStore.show = true;
            notificationStore.text = "Error de conexión al enviar el formulario";
            notificationStore.error = true;
        };
    }
</script>
