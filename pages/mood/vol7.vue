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
                <li class="breadcrumb-item active">vol.7</li>
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
          v-lazy="require('@/assets/img/mood/vol7.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>秋刀魚のコンフィ</h1>
                <h2>Saury Confit</h2>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  秋刀魚をさっと洗い、全体に塩をして1時間ほどおく。<br />
                  魚が出た水分にあたらないように網などの上におく。<br />
                  軽く表面の水分をとる。<br />
                  耐熱の器にセロリの葉っぱをひき、秋刀魚、ローリエ、スパイス、にんにくスライス、鷹の爪をいれ、菜種油を入れる。<br />
                  秋刀魚が表面に出ないくらいの油が目安。<br />
                  油は好みの油でよいが、菜種油は軽い仕上がりになる。<br />
                  80〜90度くらいのオーブンで3時間ほどじっくり火を入れる。<br />
                  出来立てよりも翌日の方が美味しい。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>秋野菜のオーブン焼き</h1>
                  <h2>Oven baked Autumn Vegetables</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  かぼちゃ、サツマイモは角切りに切り、スパイス、塩、オイルで和えておく。<br />
                  200度のオーブンで20分ほど、火が通るまでグリル。<br />
                  栗は一晩くらい水にさらし、虫がいないか確かめる。<br />
                  先を十字にきり、圧力鍋で蒸す。 7分加圧後、自然放置。<br />
                  鬼皮、渋皮をむく。<br />
                  耐熱皿にバターを塗り、グリルした芋類、栗を入れ、ブルーチーズをちぎって入れパルメジャーノチーズをたっぷりかける。<br />
                  250度のオーブンで焦げ目がうっすらつくまで焼く。
                </p>

                <p class="divider">・</p>
                <p class="side">
                  <span>Grilled brown mushroom / Fresh leaf salad </span>
                  ブラウンマッシュルームのグリル　フレッシュリーフ添え
                </p>
                <p class="divider">・</p>
                <p class="date">2021.10.15</p>
                <p class="by">
                  Dishes : Ikuyo Segi - オイチイチ -
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
    title: 'ヨロッコビール / Yorocco Beer : Mood : vol.7 秋刀魚のコンフィ',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol7/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.7 秋刀魚のコンフィ',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol7.jpg`,
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
