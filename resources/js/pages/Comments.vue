<script setup lang="ts">
import { useForm, usePage } from '@inertiajs/vue3';
import { Comment, CommentsPageProps } from '../types';
import { computed } from 'vue';
import { route } from 'ziggy-js';
import CommentComp from '../components/Comment.vue';

const page = usePage<CommentsPageProps>();

const f = useForm({
    title: "", 
    content: "", 
    user_id: page.props.auth.user?.id
});

const valid = computed(() => {
    return f.title.length > 0 &&
    f.content.length > 0 && 
    f.user_id !== undefined && 
    !f.processing
});

const submit = () => {
    f.post(route('comments.store'), {
        onSuccess: () => {
            alert("留言成功");
            f.reset();
        }, 
        onError: () => {
            alert("留言失敗");
        }
    });
}

const reset = () => {
    f.reset();
}
</script>

<template>
    <h2 class="fw-bold">問題留言</h2>
    <template v-if="page.props.auth.user">
        <form @submit.prevent="submit" @reset.prevent="reset">
            <div class="pb-3">
                <label class="form-label">標題</label>
                <input type="text" class="form-control" v-model="f.title">
            </div>
            <div class="pb-3">
                <label class="form-label">內容</label>
                <textarea class="form-control" rows="5" v-model="f.content"></textarea>
            </div>
            <div class="btn-group pb-3">
                <button type="submit" class="btn btn-success" :disabled="!valid">留言</button>
                <button type="reset" class="btn btn-danger">重填</button>
            </div>
        </form>
    </template>
    <template v-if="page.props.comments?.length > 0">
        <CommentComp v-for="comment in page.props.comments" :key="comment.id" :comment="comment" :show-button="page.props.showForm"/>
    </template>
    <h3 class="text-center" v-else>目前沒有任何留言喔</h3>
</template>