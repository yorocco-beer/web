<template>
  <div id="main-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <swiper ref="mySwiper">
            <swiper-slide
              ><img src="~/assets/images/main/4.jpg" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img src="~/assets/images/main/2.jpg" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img src="~/assets/images/main/3.jpg" width="100%" alt=""
            /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>

    <div class="about-us-area section-space--pb_120 section-space--pt_60">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="about-us-content_6 text-center">
              <h2>Your Local Brewery</h2>
              <p>Local tiny brewery.Based in Zushi/Kamakura,Japan</p>
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

