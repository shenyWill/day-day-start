<template>
  <div id="viewport">
    <div id="content" :style="{height: list.length * 50 + 'px'}"></div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
const list = reactive([]);
const getList = () => {
  for(let i = 0; i < 100; i++) {
    list.push(i);
  }
}
const observer = () => {
  const viewport = document.getElementById('viewport');
  const content = document.getElementById('content');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry);
      if(entry.isIntersecting) {
        const { top, bottom } = entry.boundingClientRect;
        console.log(top, bottom);
      }
    });
  });
  obs.observe(content);
};
onMounted(() => {
  getList();
  observer();
})
</script>

<style scoped>
#viewport {
  height: 400px;
  width: 300px;
  background-color:aliceblue;
  overflow-y: auto;
  padding: 20px;
}
#content {
  background-color: bisque;
}
</style>
