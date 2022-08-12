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
                <li class="breadcrumb-item active">vol.17</li>
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
          v-lazy="require('@/assets/img/mood/vol17.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>鳥手羽中のスパイス揚げ</h1>
                <h2>Spicy Chicken Wings</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  鳥手羽中に塩胡椒で下味をつける。<br />
                  プレーンヨーグルトにおろしたニンニクと生姜、クミン、オールスパイス、カイエンペッパー、塩をいれ下味した手羽中をつけ、1時間〜一晩つける。<br />
                  揚げ油を200度にし、小麦粉をまぶした手羽中をあげる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>スイカとミントのライタ</h1>
                  <h2>Raita with watermelon ans mints</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  スイカの皮から半分くらいを使う。<br />
                  果肉の部分の種をとりあらみじん切り。<br />
                  外皮のをとり白い部分をあらみじん切り。<br />
                  フライパンに油、ホールスパイス(クミン、フェネグリーク)を入れ弱火で香りを出す。<br />
                  プレーンヨーグルトに少しのニンニクをおろし、塩、スイカの果肉、白皮、刻んだミントを入れ混ぜる。<br />
                  冷ましたスパイスオイルを入れ、混ぜる。<br />
                  味をととのえる。
                </p>
                <p class="divider">・</p>
                <p class="side">
                  ココナッツポテトサラダ<br />
                  茄子とピーマンのアチャール<br />
                  青トマトとビーツのピクルス
                </p>
                <p class="divider">・</p>
                <p class="date">2022.08.12</p>
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
    title:
      'ヨロッコビール / Yorocco Beer : Mood : vol.17 鳥手羽中のスパイス揚げ',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol17/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.17 鳥手羽中のスパイス揚げ',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol17.jpg`,
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
