<template>
  <div class="wrapper">
    <el-date-picker
      v-model="month"
      type="month"
      size="small"
      placeholder="Pick a month"
      value-format="YYYY-MM"
      style="margin-bottom: 10px"
      @change="changeMonth"
      :disabled-date="disabledDate"
      :editable="false"
    />
    <div class="item" v-for="item in list" :key="item.date">
      <div>
        {{ item.date.split("-")[0] }}年{{ Number(item.date.split("-")[1]) }}月{{
          Number(item.date.split("-")[2])
        }}日
      </div>
      <div v-html="item.msg" class="info"></div>

      <div
        class="photo_item"
        v-for="imgItem in item.imgList"
        :key="imgItem.url"
      >
        <div class="img_container">
          <img :src="imgItem.url" alt="" />
        </div>
        <div class="desc">{{ imgItem.desc }}</div>
      </div>
    </div>
  </div>
  <el-backtop />
</template>

<script setup>
import { ref } from "vue";
import dailyList from "@/assets/data/daily.js";

let list = ref(dailyList);
let month = ref("");

// 月份更改
function changeMonth(val) {
  let res = dailyList.filter((e) => {
    return e.date.indexOf(val) != -1;
  });
  list.value = res;
  if (!val) {
    list.value = dailyList;
  }
}
// 禁用日期
const disabledDate = (time) => {
  let startTime = Date.parse("2023-11");
  return time.getTime() < startTime || time.getTime() > Date.now();
};
</script>

<style lang="less" scoped>
.wrapper {
  padding: 40px 10px 70px 10px;
}
.item {
  margin-bottom: 20px;
  .info {
    margin-bottom: 10px;
  }
  .photo_item {
    text-align: center;
    .img_container {
      width: 400px;
      margin: 0 auto;
      img {
        width: 100%;
        vertical-align: top;
      }
    }
    .desc {
      color: #999;
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
}
@media (min-width: 768px) {
  .wrapper {
    max-width: 768px;
    margin: 0 auto;
  }
}
@media (max-width: 440px) {
  .img_container {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
