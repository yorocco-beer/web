<template>
  <div class="page-box">
    <my-header></my-header>
    <Nuxt />
    <my-footer></my-footer>
    <a id="scroll-top" href="#" class="scroll-top">
      <i class="arrow-top icon-arrow-up"></i>
      <i class="arrow-bottom icon-arrow-up"></i>
    </a>
    <menu-overlay></menu-overlay>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MyHeader from '~/components/Header.vue'
import MyFooter from '~/components/Footer.vue'
import MenuOverlay from '~/components/MenuOverlay.vue'

export default defineComponent({
  components: {
    MyHeader,
    MyFooter,
    MenuOverlay,
  },
})
</script>
