<script setup lang="ts">
import BaseLayout from './BaseLayout.vue';
import { toNamedRoute } from '../lib/utils';
</script>

<template>
    <BaseLayout>
        <div class="row pt-4 pb-4">
            <div class="col-12 col-lg-8 pb-2">
                <h1 class="text-center fw-bold d-flex align-items-center h-100">2025中區大專院校程式設計競賽</h1>
            </div>
            <div class="col-12 col-lg-4 pt-2">
                <div class="row">
                    <div class="col-3 p-2">
                        <div class="d-grid">
                            <a href="javascript:void(0)" @click="toNamedRoute('announcements.index')">競賽公告</a>
                        </div>
                    </div>
                    <div class="col-3 p-2">
                        <div class="d-grid">
                            <a href="javascript:void(0)" @click="toNamedRoute('competitionInfo')">競賽資訊</a>
                        </div>
                    </div>
                    <div class="col-3 p-2">
                        <div class="d-grid">
                            <a href="javascript:void(0)" @click="toNamedRoute('registrations.index')">報名結果</a>
                        </div>
                    </div>
                    <div class="col-3 p-2">
                        <div class="d-grid">
                            <a href="javascript:void(0)" @click="toNamedRoute('user.registration')">修改報名</a>
                        </div>
                    </div>
                    <div class="col-3 p-2">
                        <div class="d-grid">
                            <a href="javascript:void(0)" @click="toNamedRoute('ccpc.flow')">活動流程</a>
                        </div>
                    </div>
                    <div class="col-3 p-2">
                        <div class="d-grid">
                            <a href="javascript:void(0)" @click="toNamedRoute('ccpc.comments')">問題留言</a>
                        </div>
                    </div>
                    <div class="col-3 p-2">
                        <div class="d-grid">
                            <a href="javascript:void(0)" @click="toNamedRoute('ccpc.competitionResults')">競賽結果</a>
                        </div>
                    </div>
                    <div class="col-3 p-2">
                        <div class="d-grid">
                            <a href="javascript:void(0)" @click="toNamedRoute('ccpc.background')">活動花絮</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row pt-4 pb-4">
            <div class="col-12 col-lg-8 pb-4">
                <slot></slot>
            </div>
            <div class="col-12 col-lg-4">
                <div class="d-grid pb-4">
                    <button type="button" class="btn btn-primary fw-bold" @click="toNamedRoute('registrations.create')">立即報名</button>
                </div>
                <div class="fw-bold ds-2 pb-4">指導單位</div>
                <a href="https://www.ncue.edu.tw/">
                    <div class="fw-bold ds-2 pb-4">
                        <img class="img-fluid" src="../../assets/ncue.png" style="min-width: 100%;">
                    </div>
                </a>
                <div class="fw-bold ds-2">主辦單位</div>
                <a href="https://www.csie.ncue.edu.tw/csie/">
                    <div class="fw-bold ds-2">
                        <img class="img-fluid" src="../../assets/ncue-csie.png" style="min-width: 100%;">
                    </div>
                </a>
            </div>
        </div>
    </BaseLayout>
</template>