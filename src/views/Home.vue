<template>
    <div>
        <h2>Home</h2>
        <p>{{userStore.userData?.email}}</p>
    </div>
</template>

<script setup>
    import {useUserStore} from '../stores/user';
    const userStore = useUserStore();

</script>