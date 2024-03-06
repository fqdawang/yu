<template>
  <div class="container">
    <p>
      忙里偷闲的几行代码
      <button @click="handleAlert">click me</button>
    </p>
    <p>
      送给小鱼的烟花
      <button @click="handleGo('http://fqdawang.gitee.io/fireworks/')">
        click me
      </button>
    </p>
    <p>
      <el-input
        v-model="dailyValue"
        placeholder="Please input"
        style="width: 100px; margin-right: 6px"
      />
      <button @click="handleDaily">click me</button>
    </p>
    <!-- <p>
      咔嚓咔嚓
      <button @click="handleRouter('/photo')">click me</button>
    </p> -->
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const $router = useRouter();
const $route = useRoute();

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
// 路由跳转
function handleRouter(path) {
  $router.push({ path });
}

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
  "不羡鸳鸯不羡仙，过好我们的小日子~",
  "看到你出现，我的世界一下子亮堂了起来。",
  "宝贝，你出现的刚刚好，在对的时间遇到对的人，我会珍惜的。",
  "咱俩胶黏，咱俩的心也要胶黏胶黏，劲往一处使。",
  "你不开心我也跟着难受(T＿T)",
  "你不在我身边我好想你~~~宝贝~~~~",
];

function handleDaily() {
  if (dailyValue.value == "20231202") {
    alert(`宝贝，还记得这天吗？疯狂且美好。`);
    alert(`
      宝贝，我要跟你在一起。
      想跟你过稀松平常的每一天，安稳度日，共抵风雨。
    `);
    $router.push({ path: "/daily" });
  } else if (dailyValue.value == "小鱼") {
    alert("我的小鱼，我想你了~");
  } else if (dailyValue.value == "牛牛") {
    alert("我是牛牛，想我了嘛~");
  } else {
    let index = parseInt(Math.random() * writingList.length);
    alert(writingList[index]);
  }
}

// 网址跳转
function handleGo(address) {
  window.open(address);
}
</script>

<style lang="less" scoped>
.container {
  padding-top: 50px;
  text-align: center;
  p {
    line-height: 40px;
  }
  /deep/ .el-input__inner {
    color: #000;
  }
}
</style>

