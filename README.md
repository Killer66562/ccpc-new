# 中區大專院校程式設計競賽網站

## 使用方法
1. 報名期間 => 每年比賽要辦的時候，只需要去新增一個開放期間，參賽者在報名的時候，系統就會自動偵測現在是不是報名期間，是的話則開放報名，反之則不開放，且報名結果頁面會顯示最近的比賽報名結果
2. 公告 => 可以新增純文字公告，別刪掉以前的公告謝謝
3. 留言 => 如果有人在留言區提問，可以點「回覆這個留言」按鈕回覆，幫忙解惑
4. 剩的每年可能還是得改一點東西，但應該都是靜態檔案或純文字而已，而且資料庫相關的東西應該都不會動到了，還是怕改爛的話就找會的人幫忙吧

## 目錄結構
+ app
    - Console => 終端機相關
        + Commands => 終端機artisan指令
    - Http => 和Http請求有關的
        + Controllers => 控制器，裡面會寫各種請求的處理方法
        + Middleware => 中間件，主要拿來做請求前處理或驗證身份
        + Requests => 封裝過的請求，基礎的驗證規則會寫在裡面
    - Models => ORM模型
    - Policies => 驗證操作
    - Providers => 提供服務
+ bootstrap
+ config => 配置檔
+ database => 資料庫相關
    + factories => 定義模型的預設狀態用的
    + migrations => 遷移檔，主要拿來更新資料庫的資料表欄位
    + seeders => 用來生成假資料的
+ public => 公共檔案，網站圖標和```npm run build```完的檔案會在這邊
+ resources => 各種資源
    + assets => 靜態檔案(圖片等)
    + css => 樣式表
    + js => 一堆js程式和Vue元件
        + components => Vue元件
        + layouts => Vue布局元件
        + lib => 一些好用的程式
        + pages => 頁面檔案
        + types => 類型定義
        + app.js => 程式入口
        + bootstrap.js => 這個不要動它
        + ziggy.d.ts => 這個不要動它
        + ziggy.js => 這個不要動它
    + views => php blade模板檔案，不要動它
+ routes => 路由檔案
+ storage => 存使用者上傳的檔案的地方，目前用不到，但一樣不要動它
+ tests => 放測試檔，雖然我一個測試都沒寫
+ vendor => 你用composer裝的包都在這
+ .env => 環境變數

## 常用指令
```php artisan make:migration <name>``` => 新增遷移檔

```php artisan migrate``` => 跑遷移

```php artisan migrate:rollback``` => 回滾遷移

```npm run build``` => 打包，伺服器serve的是build過的檔案

```composer run dev``` => 跑開發伺服器

```mysql -u <username> -p``` => 用命令列進mysql

```mysqldump -u <username> -p <db_name> > <filename>``` => 匯出資料庫的sql檔

## Vue tips
範例vue檔
```html
<!--程式區塊-->
<script setup lang="ts">
    import { ref } from 'vue'

    const msg = ref<string>("Hello, world!");
</script>

<!--畫面區塊-->
<template>
    <h1>{{ msg }}</h1>
</template>

<!--樣式區塊-->
<style>
    
</style>
```
:attr="" => 單向綁定，元件的狀態會隨著其綁定之物件的狀態改變，但更改元件的狀態不會讓其綁定之物件的狀態跟著改變

v-model="" => 雙向綁定，元件的狀態會隨著其綁定之物件的狀態改變，且更改元件的狀態也會讓其綁定之物件的狀態跟著改變

@attr="" => 事件監聽，當發生某件事時，執行某個函式

## 後續開發建議
1. 任何會動到主資料庫的東西都務必先在資料和主資料庫一致的測試資料庫上測過，例如在主資料庫存在資料的情況下跑遷移，要複製資料庫可以用mysqldump和mysql
2. 這專案有用git做版控，如果要做新功能建議另開一個分支，功能做好再commit，接著merge回主分支，然後每次開這專案都記得```git pull```一下
3. code改完記得跑```npm run build```，不然你會發現網站根本沒變化
