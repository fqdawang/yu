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
let writingList = [
  "乖乖，长长的路我们慢慢地走。",
  "咱俩胶黏胶黏。",
  "期待和你一起去许多地方。",
  "想和你一起吃许多次饭。",
  "要和你一起睡许多次觉。",
  "宝贝，祝你今天通畅！",
  "过好当下，珍惜眼前人，宝贝。",
  "宝贝，我喜欢你，希望你一切都好。",
  "喵~喵喵~黏着你。",
  "宝贝，有隐藏款惊喜哦~",
  "静下心来，好好生活。",
  "宝贝，祝你今天有个好心情！",
];

function handleDaily() {
  showDaily.value = false;
  if (dailyValue.value == "20231202") {
    alert(`宝贝，还记得这天吗？疯狂且美好。`)
    alert(`
      宝贝，我要跟你在一起。
      想跟你过稀松平常的每一天，安稳度日，共抵风雨。
    `);
    showDaily.value = true;
  } else if (dailyValue.value == "小鱼") {
    alert("我的小鱼~");
  } else if (dailyValue.value == "牛牛") {
    alert("我是牛牛，想我了嘛~");
  } else {
    let index = parseInt(Math.random() * writingList.length);
    alert(writingList[index]);
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
