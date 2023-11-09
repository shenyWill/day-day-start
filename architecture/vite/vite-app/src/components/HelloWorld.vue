<template>
  <div>
    <h1>HelloWorld 组件</h1>
    <slot name="test" data="赵子龙"></slot>
    <slot data="张翼德"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
