<script setup lang="ts">
import { useForm, usePage } from '@inertiajs/vue3';
import { ResultsPageProps } from '../types';
import { route } from 'ziggy-js';
import { toast } from 'vue3-toastify';

const page = usePage<ResultsPageProps>();
const rankMap = new Map();
rankMap.set(1, "第一名");
rankMap.set(2, "第二名");
rankMap.set(3, "第三名");
rankMap.set(1000, "佳作");

const getRankStr = (rank: number) => {
    const rankStr = rankMap.get(rank);
    if (!rankStr) {
        return "Unknown"
    }
    return rankStr;
}

const f = useForm({
    rank: undefined, 
    registration_id: undefined
});

const submit = () => {
    f.post(route('results.store'), {
        onSuccess: () => {
            f.reset();
            toast.success("新增成功");
        }, 
        onError: () => {
            toast.error("新增失敗")
        }
    });
}

const reset = () => {
    f.reset();
}

const del = (id: number) => {
    const yes = confirm("你確定要刪除這個結果嗎");
    if (yes) {
        f.delete(route('results.destroy', { result: id }), {
            onSuccess: () => {
                f.reset();
                toast.success("刪除成功");
            }, 
            onError: () => {
                toast.error("刪除失敗");
            }
        })
    }
}

const qf = useForm({
    year: page.props.year
});

const changed = () => {
    qf.get(route('results.index'));
}
</script>

<template>
    <h2 class="fw-bold">比賽結果</h2>
    <template v-if="page.props.showForm">
        <hr>
        <form @submit.prevent="submit" @reset.prevent="reset">
            <div class="row">
                <div class="col-12 col-lg-6 pb-3">
                    <label class="form-label">參加者</label>
                    <select class="form-select" v-model="f.registration_id">
                        <option class="form-option" :value="undefined">請選擇參加者</option>
                        <option class="form-option" v-for="person in page.props.people" :value="person.id">{{ `${person.university} ${person.name}` }}</option>
                    </select>
                </div>
                <div class="col-12 col-lg-6 pb-3">
                    <label class="form-label">名次</label>
                    <select class="form-select" v-model="f.rank">
                        <option class="form-option" :value="undefined">請選擇名次</option>
                        <option class="form-option" v-for="rank in rankMap.keys()" :value="rank">{{ getRankStr(rank) }}</option>
                    </select>
                </div>
            </div>
            <div class="btn-group pb-3">
                <button type="submit" class="btn btn-success">送出</button>
                <button type="reset" class="btn btn-secondary">重新填寫</button>
            </div>
        </form>
    </template>
    <hr>
    <form>
        <div class="row">
            <div class="col-12 col-lg-4">
                <label class="form-label">選擇年份</label>
                <select class="form-select" v-model="qf.year" @change="changed">
                    <option class="form-option" :value="i + 2024" v-for="i in 10" :key="i">{{ i + 2024 }}</option>
                </select>
            </div>
        </div>
    </form>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>名次</th>
                    <th>學校</th>
                    <th>姓名</th>
                    <th v-if="page.props.showForm">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="result in page.props.results" :key="result.id">
                    <td>{{ getRankStr(result.rank) }}</td>
                    <td>{{ result.person.department }}</td>
                    <td>{{ result.person.name }}</td>
                    <td v-if="page.props.showForm">
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger" @click="del(result.id)">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>