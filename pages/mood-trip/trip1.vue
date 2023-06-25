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
                <li class="breadcrumb-item active">Trip.1</li>
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
          v-lazy="require('@/assets/img/mood-trip/trip1/main.jpg')"
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
              <header class="c-mood-header">
                <h1>MOODは食卓を離れることにしました。</h1>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  逆説的な言い方ですが、その時その場所でしか撮れない景色が、どこでも有ります。<br /><br />
                  視点や角度を少しずらすだけで。
                  <br /><br />
                  きっと日常の中にも。
                  <br /><br />
                  そんな光景をフォーカスしてゆけたらと思います。
                </p>

                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip1/1.jpg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip1/2.jpg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip1/3.jpg')"
                  class="img-fluid center my-5"
                  alt=""
                />
                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip1/4.jpg')"
                  class="img-fluid center my-5"
                  alt=""
                />
                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip1/5.jpg')"
                  class="img-fluid center my-5"
                  alt=""
                />
                <p class="divider">・</p>

                <img
                  v-lazy="require('@/assets/img/mood-trip/trip1/6.jpg')"
                  class="img-fluid center my-5"
                  alt=""
                />

                <p class="date">2021.3.23</p>
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
    title:
      'ヨロッコビール / Yorocco Beer : Mood : vol.1 甘エビと鰆のフリット サルサヴェルデ添え',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol1/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.1 甘エビと鰆のフリット サルサヴェルデ添え',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol1.jpg`,
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
