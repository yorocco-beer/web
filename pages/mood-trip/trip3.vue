<template>
  <div id="main-wrapper">
    <div class="breadcrumb-area">
      <div class="container">
        <div class="col-12">
          <div class="row breadcrumb_box align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <!-- breadcrumb-list start -->
              <ul class="breadcrumb-list text-center">
                <li class="breadcrumb-item">
                  <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/mood-trip">Mood Trip</NuxtLink>
                </li>
                <li class="breadcrumb-item active">Trip.3</li>
              </ul>
              <!-- breadcrumb-list end -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="single-product-wrap">
      <div class="mood-main">
        <img
          v-lazy="require('@/assets/img/mood-trip/trip3/main.jpg')"
          width="1480"
          height="987"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <div class="c-mood-text">
                <p class="text with-divider">
                  その時、その場所でしか見れない光景と、
                  <br /><br />
                  少し視点をずらすだけで、そこに在る景色。
                </p>

                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6392.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6387.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6137.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6186.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6217.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>
                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6247.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>
                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6257.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>
                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6264.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>
                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6298.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>
                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6410.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>
                <img
                  v-lazy="require('@/assets/img/mood-trip/trip3/6370.jpeg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>

                <p class="date">2023.7.22</p>
                <p class="by">
                  Dishes : Ikuyo Segi
                  <br />
                  Picture : Yumi Saito
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  head: {
    title: 'ヨロッコビール / Yorocco Beer : Mood Trip 3 ',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood-trip/trip3`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Mood Trip 3',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Current Mood.Nothing better than sharing good food with others.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/mood-trip/3.jpg`,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '' },
    ],
  },
})
</script>
