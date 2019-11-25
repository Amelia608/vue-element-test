<template>
  <div>
    <p>foo:{{foo}}</p>
    <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild>
  </div>
</template>
<script>
import childDomChild from './ChildDomChild'
export default {
  components: { childDomChild },
  name: 'child-dom',
  props: ["foo"]
}
</script>
