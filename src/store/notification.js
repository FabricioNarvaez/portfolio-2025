import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useNotificationStore = defineStore('notification', ()=>{
    const text = ref('');
    const show = ref(false);
    const error = ref(false);

    const setShowFalse = () => {
        show.value = false;
    }

    watch(show, () => {
        setTimeout(() => {
            setShowFalse();
        }, 3000);
    });

    return {
        text,
        show,
        error,
        setShowFalse
    };
});