<template>
  <div id="main-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 section-space--pb_120">
          <div class="mainImg">
            <img
              width="1080"
              height="607"
              v-lazy="require('@/assets/images/main/img1.jpg')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({})
</script>
