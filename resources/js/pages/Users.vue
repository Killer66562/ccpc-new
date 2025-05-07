<script setup lang="ts">
import { useForm, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import { User, UsersPageProps } from '../types';
import Paginator from '../components/Paginator.vue';
import { route } from 'ziggy-js';
import { toast } from 'vue3-toastify';
import { toastErrors } from '../lib/utils';

const page = usePage<UsersPageProps>();

const user = ref<User>();

const qf = useForm({
    page: 1
});

const f = useForm({
    name: "", 
    email: "", 
    password: "", 
    password_confirmation: "", 
    is_admin: false as boolean, 
    user_id: 0
});

const onTo = (p: number) => {
    qf.page = p;
    qf.get(route('users.index'));
}

const edit = (u: User) => {
    user.value = u;
    f.defaults({
        name: u.name, 
        email: u.email, 
        is_admin: u.is_admin, 
        password: "", 
        password_confirmation: "", 
        user_id: u.id
    });
    f.reset();
}

const cancel = () => {
    user.value = undefined;
    f.defaults({
        name: "", 
        email: "", 
        password: "", 
        password_confirmation: "", 
        is_admin: false, 
        user_id: undefined
    });
    f.reset();
}

const reset = () => {
    f.reset();
}

const submit = () => {
    if (user.value) {
        f.put(route('users.update', { user: user.value.id }), {
            onSuccess: () => {
                user.value = undefined;
                f.defaults({
                    name: "", 
                    email: "", 
                    password: "", 
                    password_confirmation: "", 
                    is_admin: false, 
                    user_id: undefined
                });
                f.reset();
                toast.success("更新成功");
            }, 
            onError: (errors) => {
                toastErrors(errors);
            }
        });
    }
    else {
        f.post(route('users.store'), {
            onSuccess: () => {
                user.value = undefined;
                f.defaults({
                    name: "", 
                    email: "", 
                    password: "", 
                    password_confirmation: "", 
                    is_admin: false, 
                    user_id: undefined
                });
                f.reset();
                toast.success("新增成功");
            }, 
            onError: (errors) => {
                toastErrors(errors);
            }
        })
    }
}

const del = () => {
    const yes = confirm("你確定要刪除這位使用者嗎");
    if (yes) {
        f.delete(route('users.destroy', { user: user.value?.id }), {
            onSuccess: () => {
                user.value = undefined;
                f.defaults({
                    name: "", 
                    email: "", 
                    password: "", 
                    password_confirmation: "", 
                    is_admin: false, 
                    user_id: undefined
                });
                f.reset();
                toast.success("刪除成功");
            }, 
            onError: (errors) => {
                toastErrors(errors);
            }
        });
    }
}

const valid = computed(() => {
    return f.name.length > 0 &&
    f.email.length > 0 &&
    (f.password.length >= 8 || f.password.length == 0) &&
    f.password === f.password_confirmation &&
    !f.processing
});
</script>

<template>
    <h2 class="fw-bold">使用者一覽</h2>
    <hr>
    <h3 v-if="user">正在修改使用者 #{{ user.id }}</h3>
    <h3 v-else>新增使用者</h3>
    <form @submit.prevent="submit" @reset.prevent="reset">
        <div class="pb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" v-model="f.name">
        </div>
        <div class="pb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="f.email">
        </div>
        <div class="pb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="f.password">
        </div>
        <div class="pb-3">
            <label class="form-label">Password confirm</label>
            <input type="password" class="form-control" v-model="f.password_confirmation">
        </div>
        <div class="form-check pb-3">
            <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="f.is_admin">
            <label class="form-check-label">Admin?</label>
        </div>
        <div class="btn-group pb-3">
            <button type="submit" class="btn btn-success" :disabled="!valid">{{ user ? "更新使用者" : "新增使用者" }}</button>
            <button type="reset" class="btn btn-secondary">重新填寫</button>
            <button type="reset" class="btn btn-warning" @click="cancel" v-if="user">取消填寫</button>
            <button type="reset" class="btn btn-danger" @click="del" :disabled="f.processing" v-if="user">刪除使用者</button>
        </div>
    </form>
    <div class="fw-bold">特別注意</div>
    <p class="text-danger">請不要取消所有管理員帳號的管理權限<br>不然會進不來這個地方</p>
    <hr>
    <Paginator :first="1" :last="page.props.data.last_page" :length="5" :current="page.props.data.current_page" @to="onTo" />
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin?</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="u in page.props.data.data" :key="u.id">
                    <td>{{ u.id }}</td>
                    <td>{{ u.name }}</td>
                    <td>{{ u.email }}</td>
                    <td>{{ u.is_admin }}</td>
                    <td>
                        <button type="button" class="btn btn-primary" @click="edit(u)">修改</button>
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