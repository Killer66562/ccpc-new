<script setup lang="ts">
import { router, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';
import { route } from 'ziggy-js';

const f = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const valid = computed(() => {
    return f.name.length > 0 && f.email.length > 0 && f.password.length >= 8 && !f.processing;
});

const onSubmit = () => {
    f.post(route('auth.register'), {
        onSuccess: () => {
            alert("註冊成功");
        }, 
        onError: (errors) => {
            alert("註冊失敗");
        }
    })
}

const onReset = () => {
    f.reset();
}
</script>

<template>
    <h2 class="fw-bold">Register</h2>
    <form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <div class="pb-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" v-model="f.name">
        </div>
        <div class="pb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="f.email">
        </div>
        <div class="pb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="f.password">
            <div :class="{ 'text-danger': f.password.length < 8 }">Length: {{ f.password.length }} (>= 8 required)</div>
        </div>
        <div class="pb-3">
            <label class="form-label">Password Confirmation</label>
            <input type="password" class="form-control" v-model="f.password_confirmation">
        </div>
        <div class="btn-group">
            <button type="submit" class="btn btn-success" :disabled="!valid">Register</button>
            <button type="reset" class="btn btn-danger">Reset</button>
        </div>
        <div>
            Already have an account? <a href="javascript:void(0)" @click="router.visit(route('login'))">Login</a>
        </div>
    </form>
</template>