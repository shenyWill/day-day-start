<template>
  <div id="viewport">
    <div>{{ start }}</div>
    <div id="content" :style="{height: list.length * 50 + 'px'}">
      <div class="content-list" v-for="item in showList" :key="item" :style="{top: `${item * 50}px`}">{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, computed, nextTick } from 'vue';
const list = reactive([]);
for(let i = 0; i < 1000; i++) {
  list.push(i);
}
const start = ref(0);
const isFirst = ref(true); // 第一次进入
const showList = computed(() => list.slice(start.value, 20));
const observer = () => {
  const contentList = document.querySelectorAll('.content-list');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      // 离开的时候
      if(!entry.isIntersecting) {
        const { top, bottom } = entry.boundingClientRect;
        // 如果不是初始化
        if (!isFirst.value) {
          console.log(top)
          // 如果是往下滚动
          if (top < 50) {
            start.value = start.value + 1;
          } else {
            start.value = start.value - 1;
          }
          // 移除这个的监听
          // obs.unobserve(entry.target);
          // observer();
        }
      }
    });
  });
  // 将初始化的20个节点添加到监听器
  contentList.forEach(ele => obs.observe(ele));
  setTimeout(() => {
    isFirst.value = false;
  }, 2000);
};
onMounted(() => {
  nextTick(() => observer());
})
</script>

<style scoped>
#viewport {
  height: 400px;
  width: 300px;
  background-color:aliceblue;
  overflow-y: auto;
  padding: 20px;
  position: relative;
}
#content {
  background-color: bisque;
  position: relative;
}
.content-list {
  position: absolute;
  width: 100%;
  height: 50px;
}
</style>
