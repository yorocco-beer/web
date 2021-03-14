<template>
  <header class="l-header">
    <div class="l-header__inner">
      <h1 class="l-header__logo">
        <a href="/"><img src="~/assets/images/logo.svg" /></a>
      </h1>

      <div class="l-header__navs">
        <div class="l-header__navs__inner">
          <nav class="l-header__nav"></nav>
        </div>
      </div>

      <div class="l-header__toggle">
        <button class="l-header__toggle__button" type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const test = ref('this is message')
    return {
      test,
    }
  },
})
</script>
// <style lang="scss">
// .l-header {
//   position: relative;
//   .l-header__inne {
//     display: flex;
//     padding: 22px 20px;
//     flex-flow: row nowrap;
//     align-items: center;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     z-index: 10;
//     background: #f1efe9;
//     box-shadow: 0 0 15px 20px #f1efe9;
//     backface-visibility: hidden;
//   }
//   .l-header__logo {
//     width: 390px;
//     position: absolute;
//     top: 114px;
//     left: 50%;
//     transform: translateX(-50%);
//   }
//   .l-header__toggle {
//     width: 40px;
//     height: 40px;
//     position: absolute;
//     top: 30px;
//     left: 35px;
//   }
// }
//
</style>
