import { defineComponent, ref, computed, unref, useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, renderSlot, createSSRApp, h } from "vue";
import { ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderAttrs, ssrLooseContain, ssrLooseEqual, ssrRenderSlot } from "vue/server-renderer";
import { router, usePage, useForm, createInertiaApp } from "@inertiajs/vue3";
import { route } from "ziggy-js";
import Vue3Toastify, { toast } from "vue3-toastify";
import VueDatePicker from "@vuepic/vue-datepicker";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
function toNamedRoute(routeName) {
  router.visit(route(routeName));
}
function toastErrors(errors) {
  const errs = Object.entries(errors);
  errs.forEach((error) => {
    toast(
      `${error[0]}: ${error[1]}`,
      {
        type: "error"
      }
    );
  });
}
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Announcements",
  __ssrInlineRender: true,
  setup(__props) {
    const announcement = ref();
    const page = usePage();
    const f = useForm({
      content: ""
    });
    const valid = computed(() => {
      return f.content.length > 0 && !f.processing;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="fw-bold" data-v-dde6f67c>公告事項</h2>`);
      if (unref(page).props.showForm) {
        _push(`<!--[--><hr data-v-dde6f67c>`);
        if (announcement.value) {
          _push(`<h3 data-v-dde6f67c>正在編輯公告#${ssrInterpolate(announcement.value.id)}</h3>`);
        } else {
          _push(`<h3 data-v-dde6f67c>新增公告</h3>`);
        }
        _push(`<form class="pb-3" data-v-dde6f67c><div class="pb-3" data-v-dde6f67c><label class="form-label" data-v-dde6f67c>內容</label><textarea class="form-control" rows="5" data-v-dde6f67c>${ssrInterpolate(unref(f).content)}</textarea></div><div class="btn-group" data-v-dde6f67c>`);
        if (announcement.value) {
          _push(`<button type="submit" class="btn btn-success"${ssrIncludeBooleanAttr(!valid.value) ? " disabled" : ""} data-v-dde6f67c>更新公告</button>`);
        } else {
          _push(`<button type="submit" class="btn btn-success"${ssrIncludeBooleanAttr(!valid.value) ? " disabled" : ""} data-v-dde6f67c>新增公告</button>`);
        }
        _push(`<button type="reset" class="btn btn-secondary" data-v-dde6f67c>重新填寫</button>`);
        if (announcement.value) {
          _push(`<button type="button" class="btn btn-warning" data-v-dde6f67c>取消編輯</button>`);
        } else {
          _push(`<!---->`);
        }
        if (announcement.value) {
          _push(`<button type="button" class="btn btn-danger"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""} data-v-dde6f67c>刪除公告</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></form><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<hr data-v-dde6f67c><div class="table-responsive" data-v-dde6f67c><table class="table" data-v-dde6f67c><thead data-v-dde6f67c><tr data-v-dde6f67c><th data-v-dde6f67c>公告日期</th><th data-v-dde6f67c>內容</th>`);
      if (unref(page).props.showForm) {
        _push(`<th data-v-dde6f67c>編輯</th>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tr></thead><tbody data-v-dde6f67c><!--[-->`);
      ssrRenderList(unref(page).props.announcements, (anno) => {
        _push(`<tr data-v-dde6f67c><td data-v-dde6f67c>${ssrInterpolate(new Date(anno.created_at).toLocaleString("zh-TW", { timeZone: "Asia/Taipei" }))}</td><td class="pre-line" data-v-dde6f67c>${ssrInterpolate(anno.content)}</td>`);
        if (unref(page).props.showForm) {
          _push(`<td data-v-dde6f67c><button type="button" class="btn btn-primary" data-v-dde6f67c>編輯</button></td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr>`);
      });
      _push(`<!--]--></tbody></table></div><!--]-->`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Announcements.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Announcements = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-dde6f67c"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Announcements
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 class="fw-bold">活動花絮</h2><hr><h3>待編</h3><!--]-->`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Background.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Background = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Background
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Comment",
  __ssrInlineRender: true,
  props: {
    comment: {},
    showButton: { type: Boolean }
  },
  setup(__props) {
    const show = ref(false);
    const props = __props;
    const f = useForm({
      reply: props.comment.reply ?? ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[--><hr data-v-23ff396d><div class="fw-bold" data-v-23ff396d>標題: ${ssrInterpolate(_ctx.comment.title)}</div><div class="fw-bold" data-v-23ff396d>內文:</div><p class="pre-line" data-v-23ff396d>${ssrInterpolate(_ctx.comment.content.trim())}</p><div class="fw-bold" data-v-23ff396d>回覆:</div><p class="pre-line" data-v-23ff396d>${ssrInterpolate((_a = _ctx.comment.reply) == null ? void 0 : _a.trim())}</p>`);
      if (_ctx.showButton) {
        _push(`<div class="btn-group pb-3" data-v-23ff396d><button type="button" class="btn btn-primary btn-sm" data-v-23ff396d>回覆這個留言</button><button type="button" class="btn btn-danger btn-sm"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""} data-v-23ff396d>刪除這個留言</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form style="${ssrRenderStyle(show.value ? null : { display: "none" })}" data-v-23ff396d><div class="pb-3" data-v-23ff396d><label class="form-label" data-v-23ff396d>回覆</label><textarea class="form-control" rows="5" data-v-23ff396d>${ssrInterpolate(unref(f).reply)}</textarea></div><div class="btn-group pb-3" data-v-23ff396d><button type="submit" class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""} data-v-23ff396d>回覆</button></div></form><!--]-->`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Comment.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Comment = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-23ff396d"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Comments",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const page = usePage();
    const f = useForm({
      title: "",
      content: "",
      user_id: (_a = page.props.auth.user) == null ? void 0 : _a.id
    });
    const valid = computed(() => {
      return f.title.length > 0 && f.content.length > 0 && f.user_id !== void 0 && !f.processing;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<!--[--><h2 class="fw-bold">問題留言</h2>`);
      if (unref(page).props.auth.user) {
        _push(`<!--[--><hr><form><div class="pb-3"><label class="form-label">標題</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(f).title)}></div><div class="pb-3"><label class="form-label">內容</label><textarea class="form-control" rows="5">${ssrInterpolate(unref(f).content)}</textarea></div><div class="btn-group pb-3"><button type="submit" class="btn btn-success"${ssrIncludeBooleanAttr(!valid.value) ? " disabled" : ""}>留言</button><button type="reset" class="btn btn-danger">重填</button></div></form><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (((_a2 = unref(page).props.comments) == null ? void 0 : _a2.length) > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(page).props.comments, (comment) => {
          _push(ssrRenderComponent(Comment, {
            key: comment.id,
            comment,
            "show-button": unref(page).props.showForm
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<h3 class="text-center">目前沒有任何留言喔</h3>`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Comments.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 class="fw-bold">競賽資訊</h2><hr><h3>活動宗旨</h3><p>透過比賽提升大學生之程式設計能力，熟悉ACM、ICPC等國際級程式設計競賽相關規則，增加程式設計實務經驗。同時亦可藉此活動增加大學生程式交流之機會，提昇彼此的程式能力。</p><hr><h3>參加對象</h3><p>全國各大專院校大學部學生。</p><hr><h3>活動地點</h3><p>國立彰化師範大學 寶山校區 工學院B2 EB211電腦教室</p><hr><h3 class="info-head">競賽規則</h3><ol class="rule-list"><li>參賽以個人為主</li><li>比賽當日請選手攜帶學生證進場，以利身份確認。</li><li>比賽方式以上機撰寫程式為主 <ul class="unstyled" style="${ssrRenderStyle({ "color": "red", "padding-left": "20px" })}"><li>比賽使用語言：C/C++、JAVA、Python</li><li>編譯器版本：GCC4.6.1、JDK1.6以上、Python 3.6以上</li><li>比賽提供IDE：VS Code、Code::Blocks</li></ul>若使用其他IDE軟體，請各選手自備安裝檔，比賽當天可在開放測試時間入場進行環境建置，惟各隊須自行承擔使用任何IDE造成之問題。 </li><li>比賽時間為<span style="${ssrRenderStyle({ "color": "red" })}"> 5 小時 ( 12:00~17:00 ) </span>，題目約6~8題不等，以中/英文出題。參賽者可攜帶最多20張A4大小雙面印刷之參考資料及紙本字典在競賽時參考。但<span style="${ssrRenderStyle({ "color": "red" })}">不可攜帶機器可讀寫的任何軟體或資料，亦不可攜帶自己的電腦、終端機、手機、電子辭典或隨身碟，並嚴禁使用行動電話及呼叫器</span>，以免干擾其他參賽者作答，現場不提供網路連線，亦不得用任何方法上網查詢資料，違者將取消參賽資格。</li><li>每題完成後請透過線上評分程式(Online-Judge)，上傳進行題目評測。</li><li>評分以題數計，上傳成功暨完全答對(Accept)得 100 分，非完全正確者給部份分，評分以線上評分程式為準。</li><li>評分以正確解題數目最多的參賽者為優勝，解題數相同時，以累計的解題時間較少者為優勝。</li><li>請於報名成功後三天內完成繳費，未完成繳費之參賽者視同報名無效，須重新線上報名。</li><ul class="unstyled" style="${ssrRenderStyle({ "color": "blue", "padding-left": "20px" })}"><li>繳費流程</li><li> 1.將報名費匯款/轉帳至本帳戶：</li><li>   <span style="${ssrRenderStyle({ "color": "red" })}">郵局代號：700</span></li><li>   <span style="${ssrRenderStyle({ "color": "red" })}">帳號：0081146 0128771</span></li><li>   <span style="${ssrRenderStyle({ "color": "red" })}">戶名：彰師資訊工程系學會林睿宏</span></li><li>   <span style="${ssrRenderStyle({ "color": "red" })}">郵局：彰化師大郵局</span></li><li> 2.匯款/轉帳時請務必備註：<span style="${ssrRenderStyle({ "color": "red" })}">繳款人姓名以及『參加中程盃比賽用』</span></li><li> ※報名費用為：<span style="${ssrRenderStyle({ "color": "red" })}"> 新台幣 100 元 </span></li><br><li style="${ssrRenderStyle({ "color": "red" })}"> 註：有特殊情況者，得經通知後於現場繳費</li></ul><li>參賽獎項 <ul class="unstyled"><li>第一名：禮卷六千元及獎狀乙紙。</li><li>第二名：禮卷四千元及獎狀乙紙。</li><li>第三名：禮卷三千元及獎狀乙紙。</li><li>佳作三名：禮卷一千元及獎狀乙紙。</li></ul></li><li>主辦單位保留一切權利。</li></ol><hr><h3 class="info-head">聯絡資訊</h3><ol><a href="mailto:ncuecsie.sa115@gmail.com">聯絡信箱: ncuecsie.sa115@gmail.com</a><br><a href="https://www.facebook.com/ncuecsieccpc" target="_blank" rel="noopener">Facebook 粉絲專頁</a></ol><!--]-->`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/CompetitionInfo.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const CompetitionInfo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CompetitionInfo
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const page = usePage();
    const f = useForm({
      name: ((_a = page.props.registration) == null ? void 0 : _a.name) ?? "",
      sid: ((_b = page.props.registration) == null ? void 0 : _b.sid) ?? "",
      university: ((_c = page.props.registration) == null ? void 0 : _c.university) ?? "",
      department: ((_d = page.props.registration) == null ? void 0 : _d.department) ?? "",
      tel: ((_e = page.props.registration) == null ? void 0 : _e.tel) ?? "",
      email: ((_f = page.props.registration) == null ? void 0 : _f.email) ?? "",
      account: ((_g = page.props.registration) == null ? void 0 : _g.account) ?? "",
      user_id: (_h = page.props.auth.user) == null ? void 0 : _h.id
    });
    const valid = computed(() => {
      return f.name.length > 0 && f.sid.length > 0 && f.university.length > 0 && f.department.length > 0 && f.tel.length > 0 && f.email.length > 0 && f.account.length > 0 && f.user_id !== void 0 && !f.processing;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(page).props.inPeriod) {
        _push(`<!--[-->`);
        if (unref(page).props.registration) {
          _push(`<h2 class="fw-bold">修改報名表單</h2>`);
        } else {
          _push(`<h2 class="fw-bold">填寫報名表單</h2>`);
        }
        _push(`<hr><form class="pb-3"><div class="pb-3"><label class="form-label">姓名</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(f).name)}></div><div class="pb-3"><label class="form-label">學號</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(f).sid)}></div><div class="pb-3"><label class="form-label">學校</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(f).university)}></div><div class="pb-3"><label class="form-label">系所</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(f).department)}></div><div class="pb-3"><label class="form-label">電子郵件</label><input type="email" class="form-control"${ssrRenderAttr("value", unref(f).email)}></div><div class="pb-3"><label class="form-label">電話號碼</label><input type="tel" class="form-control"${ssrRenderAttr("value", unref(f).tel)}></div><div class="pb-3"><label class="form-label">銀行帳戶</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(f).account)}></div><div class="btn-group">`);
        if (!unref(page).props.registration) {
          _push(`<button type="submit" class="btn btn-success"${ssrIncludeBooleanAttr(!valid.value) ? " disabled" : ""}>提交報名資料</button>`);
        } else {
          _push(`<!--[--><button type="submit" class="btn btn-success"${ssrIncludeBooleanAttr(!valid.value) ? " disabled" : ""}>修改報名資料</button><button type="button" class="btn btn-danger"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""}>取消報名</button><!--]-->`);
        }
        _push(`<button type="reset" class="btn btn-secondary">重新填寫</button></div></form><!--]-->`);
      } else {
        _push(`<h2>目前還沒開放報名喔</h2>`);
      }
      _push(`<hr><h2 class="fw-bold">我的留言</h2>`);
      if (unref(page).props.comments) {
        _push(`<!--[-->`);
        ssrRenderList(unref(page).props.comments, (comment) => {
          _push(ssrRenderComponent(Comment, {
            comment,
            key: comment.id
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><hr><h3>你沒有留下任何留言喔</h3><!--]-->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 class="fw-bold">活動日期</h2><hr><p>報名日期：即日起至 2025 年 5 月 18 日（日）</p><p style="${ssrRenderStyle({ "color": "red" })}">活動日期：2025 年 5 月 24 日（六）</p><h2 class="fw-bold">活動流程</h2><hr><table id="schedule-table" class="table table-bordered table-striped"><thead><tr><th class="schedule-subtitle schedule-head">時間</th><th class="schedule-content schedule-head">行程</th></tr></thead><tbody><tr><td class="schedule-subtitle">09:00 ~ 10:00</td><td class="schedule-content">隊伍報到及入場</td></tr><tr><td class="schedule-subtitle">10:00 ~ 10:30</td><td class="schedule-content">競賽說明及講解，測試競賽環境及機器</td></tr><tr><td class="schedule-subtitle">10:30 ~ 11:50</td><td class="schedule-content">工作人員設定參賽者電腦，參賽者可外出用餐</td></tr><tr><td class="schedule-subtitle">11:50 ~ 12:00</td><td class="schedule-content">參賽者進場</td></tr><tr><td class="schedule-subtitle">12:00 ~ 17:00</td><td class="schedule-content">進行比賽</td></tr><tr><td class="schedule-subtitle">17:00 ~ 17:30</td><td class="schedule-content">結算成績及名次</td></tr><tr><td class="schedule-subtitle">17:30 ~ 18:00</td><td class="schedule-content">頒獎</td></tr><tr><td class="schedule-subtitle">18:00 ~ </td><td class="schedule-content">快樂賦歸</td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Flow.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Flow = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Flow
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 class="fw-bold">首頁</h2><p>${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}中區大專院校程式設計競賽</p><!--]-->`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const f = useForm({
      name: "",
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="fw-bold">Login</h2><form><div class="pb-3"><label class="form-label">Email</label><input type="email" class="form-control"${ssrRenderAttr("value", unref(f).email)}></div><div class="pb-3"><label class="form-label">Password</label><input type="password" class="form-control"${ssrRenderAttr("value", unref(f).password)}></div><div class="pb-3"><div class="btn-group"><button type="submit" class="btn btn-success"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""}>Login</button><button type="reset" class="btn btn-danger">Reset</button></div><div> Do not have an account? <a href="javascript:void(0)">Register</a></div></div></form><!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Login.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Periods",
  __ssrInlineRender: true,
  setup(__props) {
    const period = ref();
    const page = usePage();
    const f = useForm({
      starts_at: /* @__PURE__ */ new Date(),
      ends_at: /* @__PURE__ */ new Date()
    });
    console.log(page.props.periods);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="fw-bold">報名開放期間</h2><p class="text-danger">請務必注意報名開放期間，逾時將無法報名。</p>`);
      if (unref(page).props.showForm) {
        _push(`<!--[--><hr>`);
        if (period.value) {
          _push(`<h3>正在修改報名開放期間 #${ssrInterpolate(period.value.id)}</h3>`);
        } else {
          _push(`<h3>新增報名開放期間</h3>`);
        }
        _push(`<form><div class="row"><div class="col-12 col-lg-6 pb-3"><label class="form-label">起始時間</label>`);
        _push(ssrRenderComponent(unref(VueDatePicker), {
          "model-value": unref(f).starts_at,
          "onUpdate:modelValue": ($event) => unref(f).starts_at = $event,
          clearable: false
        }, null, _parent));
        _push(`</div><div class="col-12 col-lg-6 pb-3"><label class="form-label">結束時間</label>`);
        _push(ssrRenderComponent(unref(VueDatePicker), {
          "model-value": unref(f).ends_at,
          "onUpdate:modelValue": ($event) => unref(f).ends_at = $event,
          clearable: false
        }, null, _parent));
        _push(`</div></div><div class="btn-group pb-3"><button type="submit" class="btn btn-success"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""}>提交</button><button type="reset" class="btn btn-secondary">重填</button>`);
        if (period.value) {
          _push(`<button type="button" class="btn btn-warning">取消修改</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></form><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<hr><div class="table-responsive"><table class="table"><thead><tr><th>起始時間</th><th>結束時間</th>`);
      if (unref(page).props.showForm) {
        _push(`<th>操作</th>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(page).props.periods, (period2) => {
        _push(`<tr><td>${ssrInterpolate(new Date(period2.starts_at).toLocaleString())}</td><td>${ssrInterpolate(new Date(period2.ends_at).toLocaleString())}</td>`);
        if (unref(page).props.showForm) {
          _push(`<td><div class="btn-group"><button type="button" class="btn btn-primary">修改</button><button type="button" class="btn btn-danger"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""}>刪除</button></div></td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr>`);
      });
      _push(`<!--]--></tbody></table></div><!--]-->`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Periods.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const f = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const valid = computed(() => {
      return f.name.length > 0 && f.email.length > 0 && f.password.length >= 8 && f.password === f.password_confirmation && !f.processing;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="fw-bold">Register</h2><form><div class="pb-3"><label class="form-label">Username</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(f).name)}></div><div class="pb-3"><label class="form-label">Email</label><input type="email" class="form-control"${ssrRenderAttr("value", unref(f).email)}></div><div class="pb-3"><label class="form-label">Password</label><input type="password" class="form-control"${ssrRenderAttr("value", unref(f).password)}><div class="${ssrRenderClass({ "text-danger": unref(f).password.length < 8 })}">Length: ${ssrInterpolate(unref(f).password.length)} (&gt;= 8 required)</div></div><div class="pb-3"><label class="form-label">Password Confirmation</label><input type="password" class="form-control"${ssrRenderAttr("value", unref(f).password_confirmation)}></div><div class="btn-group"><button type="submit" class="btn btn-success"${ssrIncludeBooleanAttr(!valid.value) ? " disabled" : ""}>Register</button><button type="reset" class="btn btn-danger">Reset</button></div><div> Already have an account? <a href="javascript:void(0)">Login</a></div></form><!--]-->`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Register.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Registration",
  __ssrInlineRender: true,
  props: {
    registration: {},
    editable: { type: Boolean }
  },
  setup(__props) {
    const page = usePage();
    const props = __props;
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
    function maskName(name) {
      var _a;
      if ((_a = page.props.auth.user) == null ? void 0 : _a.is_admin) return name;
      if (name.length <= 1) return name;
      if (name.length === 2) return name[0] + "*";
      return name[0] + "*" + name[name.length - 1];
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(_attrs)}><td>${ssrInterpolate(_ctx.registration.id)}</td><td>${ssrInterpolate(_ctx.registration.university)}</td><td>${ssrInterpolate(maskName(_ctx.registration.name))}</td>`);
      if (_ctx.editable) {
        _push(`<td><button type="button" class="${ssrRenderClass([{ "btn-success": _ctx.registration.is_paid, "btn-danger": !_ctx.registration.is_paid }, "btn"])}"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""}>${ssrInterpolate(_ctx.registration.is_paid ? "已繳費" : "未繳費")}</button></td>`);
      } else {
        _push(`<td class="${ssrRenderClass([{ "text-success": _ctx.registration.is_paid, "text-danger": !_ctx.registration.is_paid }, "fw-bold"])}">${ssrInterpolate(_ctx.registration.is_paid ? "已繳費" : "未繳費")}</td>`);
      }
      _push(`</tr>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Registration.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Registrations",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="fw-bold">報名結果</h2><hr><div class="table-responsive"><table class="table"><thead><tr><th>#</th><th>學校</th><th>姓名</th><th>繳費狀況</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(page).props.registrations, (registration) => {
        _push(ssrRenderComponent(_sfc_main$9, {
          registration,
          editable: unref(page).props.showForm,
          key: registration.id
        }, null, _parent));
      });
      _push(`<!--]--></tbody></table></div><!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Registrations.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Results",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const rankMap = /* @__PURE__ */ new Map();
    rankMap.set(1, "第一名");
    rankMap.set(2, "第二名");
    rankMap.set(3, "第三名");
    rankMap.set(1e3, "佳作");
    const getRankStr = (rank) => {
      const rankStr = rankMap.get(rank);
      if (!rankStr) {
        return "Unknown";
      }
      return rankStr;
    };
    const f = useForm({
      rank: void 0,
      registration_id: void 0
    });
    const qf = useForm({
      year: page.props.year
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="fw-bold">比賽結果</h2>`);
      if (unref(page).props.showForm) {
        _push(`<!--[--><hr><form><div class="row"><div class="col-12 col-lg-6 pb-3"><label class="form-label">參加者</label><select class="form-select"><option class="form-option"${ssrRenderAttr("value", void 0)}${ssrIncludeBooleanAttr(Array.isArray(unref(f).registration_id) ? ssrLooseContain(unref(f).registration_id, void 0) : ssrLooseEqual(unref(f).registration_id, void 0)) ? " selected" : ""}>請選擇參加者</option><!--[-->`);
        ssrRenderList(unref(page).props.people, (person) => {
          _push(`<option class="form-option"${ssrRenderAttr("value", person.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(f).registration_id) ? ssrLooseContain(unref(f).registration_id, person.id) : ssrLooseEqual(unref(f).registration_id, person.id)) ? " selected" : ""}>${ssrInterpolate(`${person.university} ${person.name}`)}</option>`);
        });
        _push(`<!--]--></select></div><div class="col-12 col-lg-6 pb-3"><label class="form-label">名次</label><select class="form-select"><option class="form-option"${ssrRenderAttr("value", void 0)}${ssrIncludeBooleanAttr(Array.isArray(unref(f).rank) ? ssrLooseContain(unref(f).rank, void 0) : ssrLooseEqual(unref(f).rank, void 0)) ? " selected" : ""}>請選擇名次</option><!--[-->`);
        ssrRenderList(unref(rankMap).keys(), (rank) => {
          _push(`<option class="form-option"${ssrRenderAttr("value", rank)}${ssrIncludeBooleanAttr(Array.isArray(unref(f).rank) ? ssrLooseContain(unref(f).rank, rank) : ssrLooseEqual(unref(f).rank, rank)) ? " selected" : ""}>${ssrInterpolate(getRankStr(rank))}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="btn-group pb-3"><button type="submit" class="btn btn-success">送出</button><button type="reset" class="btn btn-secondary">重新填寫</button></div></form><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<hr><form class="pb-3"><div class="row"><div class="col-12 col-lg-4"><label class="form-label">選擇年份</label><select class="form-select"><!--[-->`);
      ssrRenderList(10, (i) => {
        _push(`<option class="form-option"${ssrRenderAttr("value", i + 2024)}${ssrIncludeBooleanAttr(Array.isArray(unref(qf).year) ? ssrLooseContain(unref(qf).year, i + 2024) : ssrLooseEqual(unref(qf).year, i + 2024)) ? " selected" : ""}>${ssrInterpolate(i + 2024)}</option>`);
      });
      _push(`<!--]--></select></div></div></form><div class="table-responsive"><table class="table"><thead class="table-success"><tr><th>名次</th><th>學校</th><th>系所</th><th>姓名</th>`);
      if (unref(page).props.showForm) {
        _push(`<th>操作</th>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(page).props.results, (result) => {
        _push(`<tr><td>${ssrInterpolate(getRankStr(result.rank))}</td><td>${ssrInterpolate(result.person.university)}</td><td>${ssrInterpolate(result.person.department)}</td><td>${ssrInterpolate(result.person.name)}</td>`);
        if (unref(page).props.showForm) {
          _push(`<td><div class="btn-group"><button type="button" class="btn btn-danger">刪除</button></div></td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr>`);
      });
      _push(`<!--]--></tbody></table></div><!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Results.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Test",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(page).props.message)}</h1>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Test.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0$1 = "/build/assets/map-DbK6XEsB.jpg";
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 class="fw-bold">交通資訊</h2><label class="bg-info w-100 text-dark fw-bold">鐵公路：</label><p>從彰化火車站搭乘彰化客運 2 路公車，於彰化師大寶山校區下車(7:00、7:10、8:10 發車)。 </p><img class="img-fluid" src="https://www.changhuabus.com.tw/upload/product/images/202409241427171.PNG" style="${ssrRenderStyle({ "min-width": "100%" })}"><label class="bg-info w-100 text-dark fw-bold">中山高速公路：</label><p>高速公路下彰化交流道，沿中華西路、中華路、孔門路、東民街、公園路一段、南郭路一段、寶山路，即可抵達。</p><label class="bg-info w-100 text-dark fw-bold">高鐵：</label><p><b class="text-danger">臺灣高鐵台中站下車</b>，轉搭火車至彰化火車站後請參考”鐵公路”路線說明。(註：以上資訊若有異動，以高鐵車站現場公告為準)</p><img class="img-fluid" alt="交通及資訊位置圖"${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle({ "min-width": "100%" })}"><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/TransportationInfo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TransportationInfo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TransportationInfo
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Paginator",
  __ssrInlineRender: true,
  props: {
    first: {},
    last: {},
    length: {},
    current: {}
  },
  emits: ["to"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const start = computed(() => {
      if (props.current <= props.length) {
        return props.first;
      } else {
        return props.current;
      }
    });
    const end = computed(() => {
      if (props.last - props.current <= props.length) {
        return props.last;
      } else {
        return props.current + props.length - 1;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "Page navigation example" }, _attrs))}><ul class="pagination"><li class="page-item"><a href="javascript:void(0)" aria-label="Previous" class="${ssrRenderClass([{ disabled: _ctx.current <= _ctx.first }, "page-link"])}">First</a></li><li class="page-item"><a href="javascript:void(0)" aria-label="Previous" class="${ssrRenderClass([{ disabled: _ctx.current <= _ctx.first }, "page-link"])}">Prev</a></li><!--[-->`);
      ssrRenderList(end.value - start.value + 1, (p) => {
        _push(`<li class="page-item"><a class="page-link" href="javascript:void(0)">${ssrInterpolate(p)}</a></li>`);
      });
      _push(`<!--]--><li class="page-item"><a href="javascript:void(0)" aria-label="Previous" class="${ssrRenderClass([{ disabled: _ctx.current >= _ctx.last }, "page-link"])}">Next</a></li><li class="page-item"><a href="javascript:void(0)" aria-label="Previous" class="${ssrRenderClass([{ disabled: _ctx.current >= _ctx.last }, "page-link"])}">Last</a></li></ul></nav>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Paginator.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Users",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const user = ref();
    const qf = useForm({
      page: 1
    });
    const f = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: false,
      user_id: 0
    });
    const onTo = (p) => {
      qf.page = p;
      qf.get(route("users.index"));
    };
    const valid = computed(() => {
      return f.name.length > 0 && f.email.length > 0 && (f.password.length >= 8 || f.password.length == 0) && f.password === f.password_confirmation && !f.processing;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="fw-bold" data-v-05368bd5>使用者一覽</h2><hr data-v-05368bd5>`);
      if (user.value) {
        _push(`<h3 data-v-05368bd5>正在修改使用者 #${ssrInterpolate(user.value.id)}</h3>`);
      } else {
        _push(`<h3 data-v-05368bd5>新增使用者</h3>`);
      }
      _push(`<form data-v-05368bd5><div class="pb-3" data-v-05368bd5><label class="form-label" data-v-05368bd5>Name</label><input type="text" class="form-control"${ssrRenderAttr("value", unref(f).name)} data-v-05368bd5></div><div class="pb-3" data-v-05368bd5><label class="form-label" data-v-05368bd5>Email</label><input type="email" class="form-control"${ssrRenderAttr("value", unref(f).email)} data-v-05368bd5></div><div class="pb-3" data-v-05368bd5><label class="form-label" data-v-05368bd5>Password</label><input type="password" class="form-control"${ssrRenderAttr("value", unref(f).password)} data-v-05368bd5></div><div class="pb-3" data-v-05368bd5><label class="form-label" data-v-05368bd5>Password confirm</label><input type="password" class="form-control"${ssrRenderAttr("value", unref(f).password_confirmation)} data-v-05368bd5></div><div class="form-check pb-3" data-v-05368bd5><input class="form-check-input" type="checkbox" id="flexCheckDefault"${ssrIncludeBooleanAttr(Array.isArray(unref(f).is_admin) ? ssrLooseContain(unref(f).is_admin, null) : unref(f).is_admin) ? " checked" : ""} data-v-05368bd5><label class="form-check-label" data-v-05368bd5>Admin?</label></div><div class="btn-group pb-3" data-v-05368bd5><button type="submit" class="btn btn-success"${ssrIncludeBooleanAttr(!valid.value) ? " disabled" : ""} data-v-05368bd5>${ssrInterpolate(user.value ? "更新使用者" : "新增使用者")}</button><button type="reset" class="btn btn-secondary" data-v-05368bd5>重新填寫</button>`);
      if (user.value) {
        _push(`<button type="reset" class="btn btn-warning" data-v-05368bd5>取消填寫</button>`);
      } else {
        _push(`<!---->`);
      }
      if (user.value) {
        _push(`<button type="reset" class="btn btn-danger"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""} data-v-05368bd5>刪除使用者</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form><div class="fw-bold" data-v-05368bd5>特別注意</div><p class="text-danger" data-v-05368bd5>請不要取消所有管理員帳號的管理權限<br data-v-05368bd5>不然會進不來這個地方</p><hr data-v-05368bd5>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        first: 1,
        last: unref(page).props.data.last_page,
        length: 5,
        current: unref(page).props.data.current_page,
        onTo
      }, null, _parent));
      _push(`<div class="table-responsive" data-v-05368bd5><table class="table" data-v-05368bd5><thead data-v-05368bd5><tr data-v-05368bd5><th data-v-05368bd5>#</th><th data-v-05368bd5>Name</th><th data-v-05368bd5>Email</th><th data-v-05368bd5>Admin?</th><th data-v-05368bd5>Actions</th></tr></thead><tbody data-v-05368bd5><!--[-->`);
      ssrRenderList(unref(page).props.data.data, (u) => {
        _push(`<tr data-v-05368bd5><td data-v-05368bd5>${ssrInterpolate(u.id)}</td><td data-v-05368bd5>${ssrInterpolate(u.name)}</td><td data-v-05368bd5>${ssrInterpolate(u.email)}</td><td data-v-05368bd5>${ssrInterpolate(u.is_admin)}</td><td data-v-05368bd5><button type="button" class="btn btn-primary" data-v-05368bd5>修改</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Users.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Users = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-05368bd5"]]);
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Users
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "/build/assets/ncue-MXcaKxho.png";
const _imports_1 = "/build/assets/ncue-csie-RZ2ntHzW.png";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const f = useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg bg-body-tertiary" }, _attrs))}><div class="container"><a class="navbar-brand fw-bold" href="javascript:void(0)">CCPC</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="javascript:void(0)">Home</a></li><li class="nav-item"><a class="nav-link" aria-current="page" href="javascript:void(0)">競賽資訊</a></li><li class="nav-item"><a class="nav-link" aria-current="page" href="javascript:void(0)">交通資訊</a></li><li class="nav-item"><a class="nav-link" aria-current="page" href="https://www.google.com.tw/maps/place/國立彰化師範大學寶山校區/@24.065726,120.5570761,18z/data=!3m1!5s0x346938f6c4fb4003:0x6a63c81bc46c46c7!4m6!3m5!1s0x346938f433a801cd:0x9210ba63eab99f6f!8m2!3d24.0654!4d120.5576389!16s%2Fg%2F1v_n9877?hl=zh-TW&amp;entry=ttu&amp;g_ep=EgoyMDI1MDQzMC4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener">看地圖</a></li><li class="nav-item"><a class="nav-link" aria-current="page" href="https://www.csie.ncue.edu.tw/csie/" target="_blank" rel="noopener">彰師資工</a></li><li class="nav-item"><a class="nav-link" aria-current="page" href="https://www.ncue.edu.tw/" target="_blank" rel="noopener">彰師大</a></li>`);
      if (!unref(page).props.auth.user) {
        _push(`<li class="nav-item"><a class="nav-link" aria-current="page" href="javascript:void(0)">Login</a></li>`);
      } else {
        _push(`<!--[--><li class="nav-item"><a class="nav-link" aria-current="page" href="javascript:void(0)">Hello, ${ssrInterpolate(unref(page).props.auth.user.name)}</a></li>`);
        if (unref(page).props.auth.user.is_admin) {
          _push(`<li class="nav-item"><a class="nav-link" aria-current="page" href="javascript:void(0)">使用者管理</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li class="nav-item"><button type="button" class="btn btn-sm btn-danger"${ssrIncludeBooleanAttr(unref(f).processing) ? " disabled" : ""}>Logout</button></li><!--]-->`);
      }
      _push(`</ul></div></div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    toastErrors(page.props.errors);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "main" }, _attrs))} data-v-35e96185>`);
      _push(ssrRenderComponent(_sfc_main$2, { "data-bs-theme": "dark" }, null, _parent));
      _push(`<div class="container" data-v-35e96185>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/BaseLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BaseLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-35e96185"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BaseLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row pt-4 pb-4"${_scopeId}><div class="col-12 col-lg-8 pb-2"${_scopeId}><h1 class="text-center fw-bold d-flex align-items-center h-100"${_scopeId}>${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}中區大專院校程式設計競賽</h1></div><div class="col-12 col-lg-4 pt-2"${_scopeId}><div class="row text-center"${_scopeId}><div class="col-3 p-2"${_scopeId}><div class="d-grid"${_scopeId}><a href="javascript:void(0)"${_scopeId}>競賽公告</a></div></div><div class="col-3 p-2"${_scopeId}><div class="d-grid"${_scopeId}><a href="javascript:void(0)"${_scopeId}>競賽資訊</a></div></div><div class="col-3 p-2"${_scopeId}><div class="d-grid"${_scopeId}><a href="javascript:void(0)"${_scopeId}>報名結果</a></div></div><div class="col-3 p-2"${_scopeId}><div class="d-grid"${_scopeId}><a href="javascript:void(0)"${_scopeId}>開放期間</a></div></div><div class="col-3 p-2"${_scopeId}><div class="d-grid"${_scopeId}><a href="javascript:void(0)"${_scopeId}>活動流程</a></div></div><div class="col-3 p-2"${_scopeId}><div class="d-grid"${_scopeId}><a href="javascript:void(0)"${_scopeId}>問題留言</a></div></div><div class="col-3 p-2"${_scopeId}><div class="d-grid"${_scopeId}><a href="javascript:void(0)"${_scopeId}>競賽結果</a></div></div><div class="col-3 p-2"${_scopeId}><div class="d-grid"${_scopeId}><a href="javascript:void(0)"${_scopeId}>活動花絮</a></div></div></div></div></div><hr${_scopeId}><div class="row pt-4 pb-4"${_scopeId}><div class="col-12 col-lg-8 pb-4"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="col-12 col-lg-4"${_scopeId}><div class="d-grid pb-4"${_scopeId}><button type="button" class="btn btn-primary fw-bold"${_scopeId}>報名/修改報名</button></div><div class="fw-bold ds-2 pb-4"${_scopeId}>指導單位</div><a href="https://www.ncue.edu.tw/"${_scopeId}><div class="fw-bold ds-2 pb-4"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "min-width": "100%" })}"${_scopeId}></div></a><div class="fw-bold ds-2"${_scopeId}>主辦單位</div><a href="https://www.csie.ncue.edu.tw/csie/"${_scopeId}><div class="fw-bold ds-2"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "min-width": "100%" })}"${_scopeId}></div></a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "row pt-4 pb-4" }, [
                createVNode("div", { class: "col-12 col-lg-8 pb-2" }, [
                  createVNode("h1", { class: "text-center fw-bold d-flex align-items-center h-100" }, toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + "中區大專院校程式設計競賽", 1)
                ]),
                createVNode("div", { class: "col-12 col-lg-4 pt-2" }, [
                  createVNode("div", { class: "row text-center" }, [
                    createVNode("div", { class: "col-3 p-2" }, [
                      createVNode("div", { class: "d-grid" }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => unref(toNamedRoute)("announcements.index")
                        }, "競賽公告", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "col-3 p-2" }, [
                      createVNode("div", { class: "d-grid" }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => unref(toNamedRoute)("competitionInfo")
                        }, "競賽資訊", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "col-3 p-2" }, [
                      createVNode("div", { class: "d-grid" }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => unref(toNamedRoute)("registrations.index")
                        }, "報名結果", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "col-3 p-2" }, [
                      createVNode("div", { class: "d-grid" }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => unref(toNamedRoute)("periods.index")
                        }, "開放期間", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "col-3 p-2" }, [
                      createVNode("div", { class: "d-grid" }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => unref(toNamedRoute)("flow")
                        }, "活動流程", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "col-3 p-2" }, [
                      createVNode("div", { class: "d-grid" }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => unref(toNamedRoute)("comments.index")
                        }, "問題留言", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "col-3 p-2" }, [
                      createVNode("div", { class: "d-grid" }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => unref(toNamedRoute)("results.index")
                        }, "競賽結果", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "col-3 p-2" }, [
                      createVNode("div", { class: "d-grid" }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => unref(toNamedRoute)("background")
                        }, "活動花絮", 8, ["onClick"])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("hr"),
              createVNode("div", { class: "row pt-4 pb-4" }, [
                createVNode("div", { class: "col-12 col-lg-8 pb-4" }, [
                  renderSlot(_ctx.$slots, "default")
                ]),
                createVNode("div", { class: "col-12 col-lg-4" }, [
                  createVNode("div", { class: "d-grid pb-4" }, [
                    createVNode("button", {
                      type: "button",
                      class: "btn btn-primary fw-bold",
                      onClick: ($event) => unref(toNamedRoute)("dashboard")
                    }, "報名/修改報名", 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "fw-bold ds-2 pb-4" }, "指導單位"),
                  createVNode("a", { href: "https://www.ncue.edu.tw/" }, [
                    createVNode("div", { class: "fw-bold ds-2 pb-4" }, [
                      createVNode("img", {
                        class: "img-fluid",
                        src: _imports_0,
                        style: { "min-width": "100%" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fw-bold ds-2" }, "主辦單位"),
                  createVNode("a", { href: "https://www.csie.ncue.edu.tw/csie/" }, [
                    createVNode("div", { class: "fw-bold ds-2" }, [
                      createVNode("img", {
                        class: "img-fluid",
                        src: _imports_1,
                        style: { "min-width": "100%" }
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./pages/Announcements.vue": __vite_glob_0_0, "./pages/Background.vue": __vite_glob_0_1, "./pages/Comments.vue": __vite_glob_0_2, "./pages/CompetitionInfo.vue": __vite_glob_0_3, "./pages/Dashboard.vue": __vite_glob_0_4, "./pages/Flow.vue": __vite_glob_0_5, "./pages/Home.vue": __vite_glob_0_6, "./pages/Login.vue": __vite_glob_0_7, "./pages/Periods.vue": __vite_glob_0_8, "./pages/Register.vue": __vite_glob_0_9, "./pages/Registrations.vue": __vite_glob_0_10, "./pages/Results.vue": __vite_glob_0_11, "./pages/Test.vue": __vite_glob_0_12, "./pages/TransportationInfo.vue": __vite_glob_0_13, "./pages/Users.vue": __vite_glob_0_14 });
      let page2 = pages[`./pages/${name}.vue`];
      page2.default.layout = _sfc_main;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).use(Vue3Toastify, {
        autoClose: 3e3
      });
    }
  }),
  { cluster: true }
);
