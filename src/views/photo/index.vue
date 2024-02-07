<template>
  <div class="wrapper">
    <div class="photo_item" v-for="item in list" :key="item.url">
      <div class="img_container">
        <img :src="item.url" alt="" />
      </div>
      <div class="desc">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script setup>
let list = [
  {
    url: new URL("@/assets/images/2023121701.jpg", import.meta.url).href,
    desc: "白泥地公园第一次看日落，超美",
  },
  {
    url: new URL("@/assets/images/2023122101.jpg", import.meta.url).href,
    desc: "小鱼夹在我书里的字条",
  },
  {
    url: new URL("@/assets/images/2023122201.jpg", import.meta.url).href,
    desc: "第一次一起包饺子，韭菜肉馅",
  },
  {
    url: new URL("@/assets/images/2023122202.jpg", import.meta.url).href,
    desc: "2023年冬至，一起过的",
  },
  {
    url: new URL("@/assets/images/2023123002.jpg", import.meta.url).href,
    desc: "到上海第一顿饭，蟹黄面",
  },
  {
    url: new URL("@/assets/images/2023123001.jpg", import.meta.url).href,
    desc: "静安寺",
  },
  {
    url: new URL("@/assets/images/2023123003.jpg", import.meta.url).href,
    desc: "武康路",
  },
  {
    url: new URL("@/assets/images/2023123101.jpg", import.meta.url).href,
    desc: "2023年外滩跨年",
  },
  {
    url: new URL("@/assets/images/2023123102.jpg", import.meta.url).href,
    desc: "徐家汇",
  },
  {
    url: new URL("@/assets/images/2023123103.jpg", import.meta.url).href,
    desc: "小鱼选的上海菜贼好吃",
  },
  {
    url: new URL("@/assets/images/2024010103.jpg", import.meta.url).href,
    desc: "南京路步行街",
  },
  {
    url: new URL("@/assets/images/2023123105.jpg", import.meta.url).href,
    desc: "城隍庙",
  },
  {
    url: new URL("@/assets/images/2024010102.jpg", import.meta.url).href,
    desc: "外滩",
  },
  {
    url: new URL("@/assets/images/2024010101.jpg", import.meta.url).href,
    desc: "沪回青的高铁上",
  },
  {
    url: new URL("@/assets/images/2024011201.jpg", import.meta.url).href,
    desc: "圣·索菲亚大教堂",
  },
  {
    url: new URL("@/assets/images/2024011202.jpg", import.meta.url).href,
    desc: "正宗东北铁锅炖",
  },
  {
    url: new URL("@/assets/images/2024011301.jpg", import.meta.url).href,
    desc: "冰雪大世界，贼壮观",
  },
  {
    url: new URL("@/assets/images/2024011302.jpg", import.meta.url).href,
    desc: "马迭尔雪糕",
  },
  {
    url: new URL("@/assets/images/2024011304.jpg", import.meta.url).href,
    desc: "憨憨的大雪人",
  },
  {
    url: new URL("@/assets/images/2024011305.jpg", import.meta.url).href,
    desc: "冰糖葫芦",
  },
  {
    url: new URL("@/assets/images/2024011306.jpg", import.meta.url).href,
    desc: "中央大街",
  },
  {
    url: new URL("@/assets/images/2024012001.jpg", import.meta.url).href,
    desc: "一起看小王子话剧",
  },
  {
    url: new URL("@/assets/images/2024012502.jpg", import.meta.url).href,
    desc: "石老人沙滩",
  },
  {
    url: new URL("@/assets/images/2024012501.jpg", import.meta.url).href,
    desc: "石老人海水浴场",
  },
  {
    url: new URL("@/assets/images/2024012701.jpg", import.meta.url).href,
    desc: "赶李村大集，中午的饭",
  },
  {
    url: new URL("@/assets/images/2024012702.jpg", import.meta.url).href,
    desc: "小鱼家楼顶看日落",
  },
  {
    url: new URL("@/assets/images/2024012801.jpg", import.meta.url).href,
    desc: "白泥地公园看日落",
  },
  {
    url: new URL("@/assets/images/2024013001.jpg", import.meta.url).href,
    desc: "小鱼做菜真好吃",
  },
  {
    url: new URL("@/assets/images/2024013101.jpg", import.meta.url).href,
    desc: "小鱼做菜又快又好吃",
  },
  {
    url: new URL("@/assets/images/2024020201.jpg", import.meta.url).href,
    desc: "小鱼送来单位的蛋糕",
  },
  {
    url: new URL("@/assets/images/2024020401.jpg", import.meta.url).href,
    desc: "2023年青岛最大的一场雪，和小鱼一起",
  },
  {
    url: new URL("@/assets/images/2024020501.jpg", import.meta.url).href,
    desc: "雪后的石老人海滩",
  },
];
</script>

<style scoped>
.wrapper {
  padding: 40px 10px 20px 10px;
  text-align: center;
}
/* .photo_item {
  padding-bottom: 10px;
} */
.img_container {
  width: 400px;
  margin: 0 auto;
}
img {
  width: 100%;
}
.desc {
  color: #999;
  font-size: 12px;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .wrapper {
    max-width: 768px;
    margin: 0 auto;
  }
}
@media (max-width: 440px) {
  .img_container {
    width: 100%;
    margin: 0 auto;
  }
}
</style>

