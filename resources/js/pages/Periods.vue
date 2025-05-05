<script setup lang="ts">
import { Period, PeriodsPageProps } from '../types';
import { useForm, usePage } from '@inertiajs/vue3';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';
import { route } from 'ziggy-js';
import { toast } from 'vue3-toastify';

const period = ref<Period>();
const page = usePage<PeriodsPageProps>();

const f = useForm({
    starts_at: new Date(), 
    ends_at: new Date()
});

const onSubmit = () => {
    if (period.value) {
        f.transform(() => {
            return {
                starts_at: f.starts_at.toUTCString(), 
                ends_at: f.ends_at.toUTCString()
            }
        }).put(route('periods.update', { period: period.value.id }), {
            onSuccess: () => {
                f.defaults({
                    starts_at: new Date(), 
                    ends_at: new Date()
                });
                f.reset();
                period.value = undefined;
                toast.success("修改成功");
            }, 
            onError: () => {
                toast.error("修改失敗");
            }
        });
    }
    else {
        f.transform(() => {
            return {
                starts_at: f.starts_at.toUTCString(), 
                ends_at: f.ends_at.toUTCString()
            }
        }).post(route('periods.store'), {
            onSuccess: () => {
                f.defaults({
                    starts_at: new Date(), 
                    ends_at: new Date()
                });
                f.reset();
                period.value = undefined;
                toast.success("新增成功");
            }, 
            onError: () => {
                toast.error("新增失敗");
            }
        });
    }
}

const onEdit = (p: Period) => {
    period.value = p;
    f.defaults({
        starts_at: p.starts_at,
        ends_at: p.ends_at
    });
    f.reset();
}

const cancelEdit = () => {
    period.value = undefined;
    f.defaults({
        starts_at: new Date(),
        ends_at: new Date()
    });
    f.reset();
}

const onReset = () => {
    f.reset();
}

const onDelete = (id: number) => {
    const yes = confirm("你確定要刪除這個報名區間嗎？");
    if (yes) {
        f.delete(route('periods.destroy', { period: id }), {
            onSuccess: () => {
                toast.success("刪除成功");
            }, 
            onError: () => {
                toast.error("刪除失敗");
            }
        });
    }
}
</script>

<template>
    <h2 class="fw-bold">報名開放期間</h2>
    <p class="text-danger">請務必注意報名開放期間，逾時將無法報名。</p>
    <template v-if="page.props.showForm">
        <hr>
        <h3 v-if="period">正在修改報名開放期間 #{{ period.id }}</h3>
        <h3 v-else>新增報名開放期間</h3>
        <form @submit.prevent="onSubmit" @reset.prevent="onReset">
            <div class="row">
                <div class="col-12 col-lg-6 pb-3">
                    <label class="form-label">起始時間</label>
                    <VueDatePicker v-model:model-value="f.starts_at" :clearable="false" />
                </div>
                <div class="col-12 col-lg-6 pb-3">
                    <label class="form-label">結束時間</label>
                    <VueDatePicker v-model:model-value="f.ends_at" :clearable="false" />
                </div>
            </div>
            <div class="btn-group pb-3">
                <button type="submit" class="btn btn-success" :disabled="f.processing">提交</button>
                <button type="reset" class="btn btn-secondary">重填</button>
                <button type="button" class="btn btn-warning" @click="cancelEdit" v-if="period">取消修改</button>
            </div>
        </form>
    </template>
    <hr>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>起始時間</th>
                    <th>結束時間</th>
                    <th v-if="page.props.showForm">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="period in page.props.periods" :key="period.id">
                    <td>{{ new Date(period.starts_at).toLocaleString('zh-tw', { timeZone: 'Asia/Taipei' }) }}</td>
                    <td>{{ new Date(period.ends_at).toLocaleString('zh-tw', { timeZone: 'Asia/Taipei' }) }}</td>
                    <td v-if="page.props.showForm">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" @click="onEdit(period)">修改</button>
                            <button type="button" class="btn btn-danger" @click="onDelete(period.id)" :disabled="f.processing">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>