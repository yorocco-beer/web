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
                <li class="breadcrumb-item active">Vol.4</li>
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
          v-lazy="require('@/assets/img/mood/vol4.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>豚挽き肉とミントのサラダ</h1>
                <h2>Larb - Minced Pork &amp; Mint Salad</h2>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  生米を160℃のオーブンでロースト。<br />
                  にんにく、レモングラスの根に近いところをみじん切りにし、<br />
                  熱したフライパンで菜種油で炒める。豚挽肉を入れ、焼くように炒める。<br />
                  火が通ったら塩、きび砂糖、ナンプラーで味付け。<br />
                  赤玉葱をスライスし少しの塩でしんなりさせ水につけ塩気を抜く。<br />
                  味をした豚挽肉、ローストした米、水気を絞った赤玉葱を合わせライムを絞る。<br />
                  ちぎったミント、小さく切ったトマトを和える。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>焼き茄子のオリエンタルマリネ</h1>
                  <h2>Grilled Eggplant with Oriental marinade sauce</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  茄子を丸ごと200℃のオーブンでグリル。<br />
                  タレをつくる。<br />
                  菜種油にみじん切りしたにんにくを入れ火にかける。<br />
                  こんがり色づいてきたら火を止める。<br />
                  少し冷めてきたら醤油、オイスターソース、塩、きび糖を入れ混ぜる、<br />最後にレモン汁を一絞り。<br />
                  よく混ぜる。<br />
                  グリルした茄子を手で割く。<br />
                  タレと合わせてマリネする、<br />
                  香菜をかざる。
                </p>
                <p class="divider">・</p>
                <p class="date">2021.7.1</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.4 豚挽き肉とミントのサラダ',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol4/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.4 豚挽き肉とミントのサラダ',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol4.jpg`,
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
