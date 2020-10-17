<!-- Item.vue -->
<template>
  <div> Item Page  {{ item }}</div>
</template>

<script>
export default {
  asyncData ({ store }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem')
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return JSON.stringify(this.$store.state.items)
    }
  }
}
</script>