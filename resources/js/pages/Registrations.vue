<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { RegistrationsPageProps } from '../types';
import Registration from '../components/Registration.vue'

const page = usePage<RegistrationsPageProps>();
</script>

<template>
    <h2 class="fw-bold">報名結果</h2>
    <hr>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>學校</th>
                    <th>姓名</th>
                    <th>繳費狀況</th>
                </tr>
            </thead>
            <tbody>
                <Registration :registration="registration" :editable="page.props.showForm" v-for="registration in page.props.registrations" :key="registration.id" />
            </tbody>
        </table>
    </div>
</template>