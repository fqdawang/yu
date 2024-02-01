<template>
  <div class="container">
    <p>
      忙里偷闲的几行代码
      <button @click="handleAlert">click me</button>
    </p>
    <p>
      <el-input
        v-model="dailyValue"
        placeholder="Please input"
        style="width: 100px; margin-right: 6px"
      />
      <!-- <button @click="handleDaily">click me</button> -->
      <el-button type="primary" @click="handleDaily">click me</el-button>
    </p>
  </div>
  <main>
    <Daily v-if="showDaily" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Daily from "./components/Daily.vue";

let dt = new Date();
let year = dt.getFullYear();
let month = dt.getMonth() + 1;
let date = dt.getDate();

function handleAlert() {
  alert(`
    ${year}年${month}月${date}日
    我的小鱼宝，今天依旧喜欢你！
  `);
}

let showDaily = ref(false);
let dailyValue = ref("与小鱼");

function handleDaily() {
  showDaily.value = false;
  if (dailyValue.value == "20231202") {
    alert("宝贝，我要跟你在一起。");
    showDaily.value = true;
  } else {
    alert("乖乖，长长的路我们慢慢地走。");
  }
}
</script>

<style scoped>
.container {
  padding-top: 50px;
  text-align: center;
}
p {
  line-height: 40px;
}
.container >>> .el-input__inner {
  color: #000;
}
</style>
