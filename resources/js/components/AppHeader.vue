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
            <a class="navbar-brand fw-bold" href="javascript:void(0)" @click="toNamedRoute('ccpc.index')">CCPC</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('ccpc.index')">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('ccpc.competitionInfo')">競賽資訊</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('ccpc.transportationInfo')">交通資訊</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="https://www.google.com.tw/maps/place/%E5%9C%8B%E7%AB%8B%E5%BD%B0%E5%8C%96%E5%B8%AB%E7%AF%84%E5%A4%A7%E5%AD%B8/@24.082595,120.5556007,17z/data=!3m1!4b1!4m6!3m5!1s0x346939566b6a4abb:0x85d2265627b9a64c!8m2!3d24.0825901!4d120.5581756!16s%2Fm%2F0cp9zlq?hl=zh-TW&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">看地圖</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="https://www.csie.ncue.edu.tw/csie/">彰師資工</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="https://www.ncue.edu.tw/">彰師大</a>
                    </li>
                    <li class="nav-item" v-if="!page.props.auth.user">
                        <a class="nav-link" aria-current="page" href="javascript:void(0)" @click="toNamedRoute('ccpc.login')">Login</a>
                    </li>
                    <template v-else>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page">Hello, {{ page.props.auth.user.name }}</a>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-sm btn-danger" @click="onLogout">Logout</button>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>