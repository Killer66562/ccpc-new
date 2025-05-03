<script setup lang="ts">
import { Period, PeriodsPageProps } from '../types';
import { useForm, usePage } from '@inertiajs/vue3';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';
import { route } from 'ziggy-js';

const period = ref<Period>();
const page = usePage<PeriodsPageProps>();

const f = useForm({
    starts_at: new Date(), 
    ends_at: new Date()
});

const onSubmit = () => {
    if (period.value) {
        f.put(route('periods.store', { period: period.value.id }));
    }
    else {
        f.post(route('periods.store'));
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
                alert("刪除成功");
            }, 
            onError: () => {
                alert("刪除失敗");
            }
        });
    }
}
</script>

<template>
    <h2 class="fw-bold pt-4 pb-4">報名區間管理</h2>
    <form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <div class="row">
            <div class="col-12 col-lg-6">
                <label class="form-label">起始時間</label>
                <VueDatePicker v-model:model-value="f.starts_at" :clearable="false" />
            </div>
            <div class="col-12 col-lg-6">
                <label class="form-label">結束時間</label>
                <VueDatePicker v-model:model-value="f.ends_at" :clearable="false" />
            </div>
            <div class="btn-group">
                <button type="submit" class="btn btn-success">提交</button>
                <button type="reset" class="btn btn-secondary">重填</button>
                <button type="button" class="btn btn-warning" @click="cancelEdit">取消修改</button>
            </div>
        </div>
    </form>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>起始時間</th>
                    <th>結束時間</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="period in page.props.periods" :key="period.id">
                    <td>{{ period.starts_at }}</td>
                    <td>{{ period.ends_at }}</td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" @click="onEdit(period)">修改</button>
                            <button type="button" class="btn btn-danger" @click="onDelete(period.id)">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>