<script setup lang="ts">
import { SharedData } from '../types';
import { useForm, usePage } from '@inertiajs/vue3';
import { route } from 'ziggy-js'; 
import { toNamedRoute } from '../lib/utils';

const page = usePage<SharedData>();

const f = useForm({});

const onLogout = () => {
    f.post(route("auth.logout"), {
        onSuccess: () => {
            alert("登出成功");
        }, 
        onError: () => {
            alert("登出失敗");
        }
    });
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand fw-bold" href="javascript:void(0)" @click="toNamedRoute('home')">CCPC</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('home')">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('competitionInfo')">競賽資訊</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('transportationInfo')">交通資訊</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="https://www.google.com.tw/maps/place/國立彰化師範大學寶山校區/@24.065726,120.5570761,18z/data=!3m1!5s0x346938f6c4fb4003:0x6a63c81bc46c46c7!4m6!3m5!1s0x346938f433a801cd:0x9210ba63eab99f6f!8m2!3d24.0654!4d120.5576389!16s%2Fg%2F1v_n9877?hl=zh-TW&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener">看地圖</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="https://www.csie.ncue.edu.tw/csie/" target="_blank" rel="noopener">彰師資工</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="https://www.ncue.edu.tw/" target="_blank" rel="noopener">彰師大</a>
                    </li>
                    <li class="nav-item" v-if="!page.props.auth.user">
                        <a class="nav-link" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('login')">Login</a>
                    </li>
                    <template v-else>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('dashboard')">Hello, {{ page.props.auth.user.name }}</a>
                        </li>
                        <li class="nav-item" v-if="page.props.auth.user.is_admin">
                            <a class="nav-link" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('users.index')">使用者管理</a>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-sm btn-danger" @click="onLogout" :disabled="f.processing">Logout</button>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>