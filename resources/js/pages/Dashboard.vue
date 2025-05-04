<script setup lang="ts">
import { useForm, usePage } from '@inertiajs/vue3';
import { DashboardPageProps } from '../types';
import { computed } from 'vue';
import { route } from 'ziggy-js';
import Comment from '../components/Comment.vue';

const page = usePage<DashboardPageProps>();

const f = useForm({
    name: page.props.registration?.name ?? "", 
    sid: page.props.registration?.sid ?? "", 
    university: page.props.registration?.university ?? "", 
    department: page.props.registration?.department ?? "", 
    tel: page.props.registration?.tel ?? "", 
    email: page.props.registration?.email ?? "", 
    account: page.props.registration?.account ?? "", 
    user_id: page.props.auth.user?.id
});

const valid = computed(() => {
    return f.name.length > 0 && 
    f.sid.length > 0 && 
    f.university.length > 0 && 
    f.department.length > 0 && 
    f.tel.length > 0 && 
    f.email.length > 0 && 
    f.account.length > 0 && 
    f.user_id !== undefined && 
    !f.processing
});

const submit = () => {
    if (page.props.registration) {
        f.put(route('registrations.update', { registration: page.props.registration.id }), {
            onSuccess: () => {
                alert("修改成功");
            }, 
            onError: () => {
                alert("修改失敗");
            }
        });
    }
    else {
        f.post(route('registrations.store'), {
            onSuccess: () => {
                alert("報名成功");
            }, 
            onError: (errors) => {
                console.log(errors);
                alert("報名失敗");
            }
        });
    }
}

const reset = () => {
    f.reset();
}

const cancel = () => {
    if (page.props.registration) {
        f.delete(route('registrations.destroy', { registration: page.props.registration.id }), {
            onSuccess: () => {
                alert("取消報名成功");
            }, 
            onError: () => {
                alert("取消報名失敗");
            }
        });
    }
}
</script>

<template>
    <template v-if="page.props.inPeriod">
        <h2 v-if="page.props.registration" class="fw-bold">修改報名表單</h2>
        <h2 v-else class="fw-bold">填寫報名表單</h2>
        <hr>
        <form @submit.prevent="submit" @reset.prevent="reset" class="pb-3">
            <div class="pb-3">
                <label class="form-label">姓名</label>
                <input type="text" class="form-control" v-model="f.name">
            </div>
            <div class="pb-3">
                <label class="form-label">學號</label>
                <input type="text" class="form-control" v-model="f.sid">
            </div>
            <div class="pb-3">
                <label class="form-label">學校</label>
                <input type="text" class="form-control" v-model="f.university">
            </div>
            <div class="pb-3">
                <label class="form-label">系所</label>
                <input type="text" class="form-control" v-model="f.department">
            </div>
            <div class="pb-3">
                <label class="form-label">電子郵件</label>
                <input type="email" class="form-control" v-model="f.email">
            </div>
            <div class="pb-3">
                <label class="form-label">電話號碼</label>
                <input type="tel" class="form-control" v-model="f.tel">
            </div>
            <div class="pb-3">
                <label class="form-label">銀行帳戶</label>
                <input type="text" class="form-control" v-model="f.account">
            </div>
            <div class="btn-group">
                <button type="submit" class="btn btn-success" v-if="!page.props.registration" :disabled="!valid">提交報名資料</button>
                <template v-else>
                    <button type="submit" class="btn btn-success" :disabled="!valid">修改報名資料</button>
                    <button type="button" class="btn btn-danger" @click="cancel" :disabled="f.processing">取消報名</button>
                </template>
                <button type="reset" class="btn btn-secondary">重新填寫</button>
            </div>
        </form>
    </template>
    <h2 v-else>目前還沒開放報名喔</h2>
    <hr>
    <h2 class="fw-bold">我的留言</h2>
    <template v-if="page.props.comments">
        <Comment :comment="comment" v-for="comment in page.props.comments" :key="comment.id" />
    </template>
    <template v-else>
        <hr>
        <h3>你沒有留下任何留言喔</h3>
    </template>
</template>