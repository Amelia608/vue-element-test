<template>
  <input type="checkbox"  v-on:change="$emit('change', $event.target.checked)">
</template>
<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  data () {
    return {
      inputVal: ''
    }
  }
}
</script>

