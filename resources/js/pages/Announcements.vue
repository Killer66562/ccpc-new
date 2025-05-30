<script setup lang="ts">
import { computed, ref } from 'vue';
import { Announcement, AnnouncementsPageProps } from '../types';
import { useForm, usePage } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import { toastErrors } from '../lib/utils';

const announcement = ref<Announcement>();
const page = usePage<AnnouncementsPageProps>();

const f = useForm({
    content: ""
})

const edit = (anno: Announcement) => {
    announcement.value = anno;
    f.defaults({
        content: announcement.value.content
    });
    f.reset();
}

const reset = () => {
    f.reset();
}

const del = () => {
    if (!announcement.value) {
        return;
    }
    const yes = confirm("你確定要刪除這個公告嗎");
    if (yes) {
        f.delete(route('announcements.destroy', { announcement: announcement.value.id }), {
            onSuccess: () => {
                f.defaults({
                    content: ""
                });
                announcement.value = undefined;
                f.reset();
                alert("刪除成功");
            }, 
            onError: () => {
                alert("刪除失敗");
            }
        });
    }
}

const submit = () => {
    if (announcement.value) {
        f.put(route('announcements.update', { announcement: announcement.value.id }), {
            onSuccess: () => {
                f.defaults({
                    content: ""
                });
                announcement.value = undefined;
                f.reset();
                alert("更新成功");
            }, 
            onError: (errors) => {
                toastErrors(errors);
            }
        });
    }
    else {
        f.post(route('announcements.store'), {
            onSuccess: () => {
                f.defaults({
                    content: ""
                });
                announcement.value = undefined;
                f.reset();
                alert("新增成功");
            }, 
            onError: (errors) => {
                toastErrors(errors);
            }
        });
    }
}

const cancel = () => {
    f.defaults({
        content: ""
    });
    announcement.value = undefined;
    f.reset();
}

const formatDate = (dateString: Date) => {
    const d = new Date(dateString);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    return `${year}/${month}/${date}`;
}

const valid = computed(() => {
    return f.content.length > 0 && !f.processing;
})
</script>

<template>
    <h2 class="fw-bold">公告事項</h2>
    <template v-if="page.props.showForm">
        <hr>
        <h3 v-if="announcement">正在編輯公告#{{ announcement.id }}</h3>
        <h3 v-else>新增公告</h3>
        <form @submit.prevent="submit" @reset.prevent="reset" class="pb-3">
            <div class="pb-3">
                <label class="form-label">內容</label>
                <textarea class="form-control" rows="5" v-model="f.content"></textarea>
            </div>
            <div class="btn-group">
                <button type="submit" v-if="announcement" class="btn btn-success" :disabled="!valid">更新公告</button>
                <button type="submit" v-else class="btn btn-success" :disabled="!valid">新增公告</button>
                <button type="reset" class="btn btn-secondary">重新填寫</button>
                <button type="button" v-if="announcement" class="btn btn-warning" @click="cancel">取消編輯</button>
                <button type="button" class="btn btn-danger" @click="del" :disabled="f.processing" v-if="announcement">刪除公告</button>
            </div>
        </form>
    </template>
    <hr>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>公告日期</th>
                    <th>內容</th>
                    <th v-if="page.props.showForm">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="anno in page.props.announcements" :key="anno.id">
                    <td>{{ new Date(anno.created_at).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) }}</td>
                    <td class="pre-line">{{ anno.content }}</td>
                    <td v-if="page.props.showForm">
                        <button type="button" class="btn btn-primary" @click="edit(anno)">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.pre-line {
    white-space: pre-line;
}
</style>