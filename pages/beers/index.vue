<template>
  <div id="main-wrapper">
    <div class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row breadcrumb_box align-items-center">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <!-- breadcrumb-list start -->
                <ul class="breadcrumb-list text-center text-sm-right">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item active">Beers</li>
                </ul>
                <!-- breadcrumb-list end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-beer></my-beer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import MyBeer from '@/components/Beers.vue'

export default defineComponent({
  components: {
    MyBeer,
  },
  setup() {
    const test = ref('this is message')
    return {
      test,
    }
  },
})
</script>

