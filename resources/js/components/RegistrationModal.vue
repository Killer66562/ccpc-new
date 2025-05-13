<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Registration } from '../types';
import Modal from './Modal.vue';
import ModalCloseButton from './ModalCloseButton.vue';

const props = defineProps<{
    id: string, 
    registration?: Registration
}>();

const propsRegistrationComputed = computed(() => {
    return props.registration;
})

const regis = ref<Registration>();

watch(propsRegistrationComputed, () => {
    regis.value = propsRegistrationComputed.value;
});
</script>

<template>
    <Modal :id="id" title="報名資料">
        <form @submit.prevent="" @reset.prevent="" v-if="regis">
            <div class="pb-3">
                <label class="form-label">姓名</label>
                <input type="text" class="form-control" disabled :value="regis?.name">
            </div>
            <div class="pb-3">
                <label class="form-label">學號</label>
                <input type="text" class="form-control" disabled :value="regis?.sid">
            </div>
            <div class="pb-3">
                <label class="form-label">學校</label>
                <input type="text" class="form-control" disabled :value="regis?.university">
            </div>
            <div class="pb-3">
                <label class="form-label">系所</label>
                <input type="text" class="form-control" disabled :value="regis?.department">
            </div>
            <div class="pb-3">
                <label class="form-label">電子郵件</label>
                <input type="text" class="form-control" disabled :value="regis?.email">
            </div>
            <div class="pb-3">
                <label class="form-label">電話號碼</label>
                <input type="text" class="form-control" disabled :value="regis?.tel">
            </div>
            <div class="pb-3">
                <label class="form-label">帳戶</label>
                <input type="text" class="form-control" disabled :value="regis?.account">
            </div>
        </form>
        <div class="fw-bold" v-else>這名使用者目前沒有報名喔</div>
        <template #buttons>
            <ModalCloseButton type="button" class="btn btn-secondary">關閉</ModalCloseButton>
        </template>
    </Modal>
</template>