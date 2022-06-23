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
                <li class="breadcrumb-item active">vol.15</li>
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
          v-lazy="require('@/assets/img/mood/vol15.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>豚挽肉と香味野菜のサラダ</h1>
                <h2>Thai Pork Larb Salad</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  玄米をさっと洗い弱火で炒る。<br />
                  レモングラス、にんにく、生姜、(あればこぶみかんの葉)をみじん切り。<br />
                  フライパンにオイルを入れ、鷹の爪、みじん切りにしたにんにくなどを香りが出るまで弱火で炒める。<br />
                  豚挽肉を入れ焼くように炒める。<br />
                  ナンプラー、きび砂糖、塩、で味つける。<br />
                  パクチー、赤玉ねぎを荒みじん切りにする。<br />
                  炒った玄米をくだく。<br />
                  全てをあわせる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>タイ風さつま揚げ</h1>
                  <h2>Thai Fish Cakes</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  白身魚の骨皮をとり、にんにく、生姜、レモングラス、山芋、レットカレーペースト、塩を一緒にフードプロセッサーにかける。<br />
                  一口大に丸め片栗粉をつけて180度の油で揚げる。
                </p>
                <p class="divider">・</p>
                <p class="side">
                  <span>Fresh Spring Roll</span>
                  蒸し鶏の生春巻き
                </p>
                <p class="divider">・</p>
                <p class="date">2022.05.20</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.15 豚挽肉と香味野菜のサラダ',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol15/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.15 豚挽肉と香味野菜のサラダ',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol15.jpg`,
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
