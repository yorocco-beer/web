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
                  <NuxtLink to="/mood">Mood</NuxtLink>
                </li>
                <li class="breadcrumb-item active">Vol.5</li>
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
          width="1480"
          height="987"
          v-lazy="require('@/assets/img/mood/vol5.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>長芋と紫蘇の肉餃子</h1>
                <h2>Gyouza &amp; Edamame</h2>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  長芋は粗みじん切り、ニラはざく切り、生姜と豆豉はみじん切り。<br />
                  豚肉に塩、胡椒、オイスターソースを加えよく練る。<br />
                  全てを合わせてさっと練る。<br />
                  皮に紫蘇をおき、その上に肉ダネをのせて包む。<br />
                  熱したフライパンに油を入れ並べる。<br />
                  熱湯を入れ蓋をして蒸す。<br />
                  皮のはじか透明になったら余分な水分を捨てて胡麻油をたらす。<br />
                  カリッと焼き上げる。
                </p>
                <p class="divider">・</p>
                <p class="date">2021.8.3</p>
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
    title: 'ヨロッコビール / Yorocco Beer : Mood : vol.5 長芋と紫蘇の肉餃子',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol5/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.5 長芋と紫蘇の肉餃子',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol5.jpg`,
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
