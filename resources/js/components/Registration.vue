<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { Registration } from '../types';
import { route } from 'ziggy-js';

const props = defineProps<{
    registration: Registration, 
    editable?: boolean
}>();

const f = useForm({
    name: props.registration.name, 
    sid: props.registration.sid, 
    university: props.registration.university, 
    department: props.registration.department, 
    tel: props.registration.tel, 
    email: props.registration.email, 
    account: props.registration.account, 
    user_id: props.registration.user_id, 
    is_paid: props.registration.is_paid
});

const onBtnClicked = () => {
    f.transform((data) => {
        data.is_paid = !props.registration.is_paid;
        return data;
    }).put(route('registrations.update', { registration: props.registration.id }), {
        onSuccess: () => {
            alert("更新繳費狀態成功");
        }, 
        onError: () => {
            alert("更新繳費狀態失敗");
        }
    });
}
</script>

<template>
    <tr>
        <td>{{ registration.id }}</td>
        <td>{{ registration.university }}</td>
        <td>{{ registration.name }}</td>
        <td v-if="editable">
            <button type="button" class="btn" :class="{ 'btn-success': registration.is_paid, 'btn-danger': !registration.is_paid }" @click="onBtnClicked">{{ registration.is_paid ? "已繳費" : "未繳費" }}</button>
        </td>
        <td class="fw-bold" :class="{ 'text-success': registration.is_paid, 'text-danger': !registration.is_paid }" v-else>{{ registration.is_paid ? "已繳費" : "未繳費" }}</td>
    </tr>
</template>