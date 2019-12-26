<template>
  <svg class="iconfont" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'Iconfont',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.icon}`
    }
  }
}
</script>

<style scoped lang="stylus">
.iconfont
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow hidden
</style>
