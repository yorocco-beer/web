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
                <li class="breadcrumb-item active">vol.14</li>
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
          v-lazy="require('@/assets/img/mood/vol14.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>フライドチキン</h1>
                <h2>Fried Chicken</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  骨つき鶏モモ肉を3分割する。<br />
                  塩、すりおろしたニンニクでマリネ。 スパイスミックスを作る。<br />
                  (カイエンペッパー、オレガノ、白胡椒、黒胡椒、フライドオニオン(ミキサーで砕く)、パプリカパウダー、)<br />
                  ヨーグルト、塩、スパイスミックスを合わせ、マリネした鶏肉をつけこむ。<br />
                  中力粉をまぶし、もう一度漬け込み液にくぐらせまた中力粉をまぶす。<br />
                  余分な粉をおとし、200℃の油で揚げる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>レーズンと人参のサラダ</h1>
                  <h2>Carrots and Raisins Salad</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  人参は荒くスライスし、塩をして水気を出す。<br />
                  ボールにサワークリーム、レーズン、ワインビネガー、塩、胡椒、パプリカパウダーを合わせ、水気を絞った人参を入れて混ぜる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>ブロッコリーと豆のマリネ</h1>
                  <h2>Broccoli and Beans Marinade</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  ブロッコリーは半分くらいにカットし、沸騰したお湯で柔らかめに茹でる。<br />
                  レッドキドニービーンズを水気をきる。<br />
                  (豆から煮る場合は一晩浸水し、水から好みの硬さに茹でる)<br />
                  セロリ、赤玉ねぎを5mm角にきり、水にさらす。<br />
                  ボールに赤ワインビネガー、きび砂糖、塩、カイエンペッパー、パプリカパウダー、を入れ混ぜる。<br />
                  ブロッコリー、豆、水気をしっかりきったセロリ、赤玉ネギをいれマリネする。<br />
                  仕上げに胡椒。
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
    title: 'ヨロッコビール / Yorocco Beer : Mood : vol.14 フライドチキン',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol14/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Mood : vol.14 フライドチキン',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol14.jpg`,
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
