<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import TheWelcome from "./components/TheWelcome.vue";
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
</script>

<template>
  <div class="wrapper">
    <p>
      忙里偷闲的几行代码
      <button @click="handleAlert">click me</button>
    </p>
    <p>
      与小鱼的点滴
      <button @click="handleDaily">click me</button>
    </p>
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!11" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
.wrapper {
  padding-top: 50px;
  text-align: center;
}
</style>
