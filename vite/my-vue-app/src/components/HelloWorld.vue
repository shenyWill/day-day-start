<script setup lang="ts">
import { ref } from 'vue'
import { cloneDeep } from 'lodash';
import testImg from '../assets/images/test.jpeg'

defineProps<{ msg: string }>()

const count = ref(0);
const baseUrl = import.meta.env.BASE_URL;
const testAlias = import.meta.env;
console.log('testAlias', testAlias);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>{{ testAlias }}</p>
  <p>{{ cloneDeep(1223) }}</p>
  <p>{{ baseUrl }}</p>
  <img :src="testImg" alt="" class="logo" />

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
