<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { toNamedRoute } from '../lib/utils';
import { route } from 'ziggy-js';

const f = useForm({
    name: "", 
    email: "", 
    password: "", 
    remember: false
});

const onSubmit = () => {
    f.post(route('auth.login'), {
        onSuccess: () => {
            f.reset();
            alert("登入成功");
        }, 
        onError: (errors) => {
            console.log(errors);
            alert("登入失敗");
        }
    })
}

const onReset = () => {
    f.reset();
}
</script>

<template>
    <h2 class="fw-bold">Login</h2>
    <form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <div class="pb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="f.email">
        </div>
        <div class="pb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="f.password">
        </div>
        <div class="pb-3">
            <div class="btn-group">
                <button type="submit" class="btn btn-success" :disabled="f.processing">Login</button>
                <button type="reset" class="btn btn-danger">Reset</button>
            </div>
            <div>
                Do not have an account? <a href="javascript:void(0)" @click="toNamedRoute('register')">Register</a>
            </div>
        </div>
    </form>
</template>