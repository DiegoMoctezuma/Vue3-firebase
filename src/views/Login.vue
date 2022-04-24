<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese correo" v-model.trim="email">
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
            <button type="submit">Iniciar Seción</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import {useUserStore} from '../stores/user';
    // import {useRouter} from 'vue-router';

    const userStore = useUserStore();
    // const router = useRouter();

    const email = ref('');
    const password = ref('');
    const handleSubmit = async() => {

        if (!email.value || password.value.length < 6) {
            return alert('Llene los campos solicitados');
        }
        await userStore.loginUser(email.value, password.value);
        // router.push('/');
    }

</script>