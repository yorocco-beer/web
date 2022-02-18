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
                <li class="breadcrumb-item active">vol.11</li>
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
          v-lazy="require('@/assets/img/mood/vol11.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>サーモンのムニエル マッシュポテト添え</h1>
                <h2>Salmon Meuniere with Mashed Potato</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  サーモンに軽く塩をし10分程おく。<br />
                  余分な水分をペーパーでしっかりとる。<br />
                  おろしたニンニクと少量のオリーブオイルでマリネする。<br />
                  粉をまんべんなく魚にまぶす。 余分な粉ははたく。<br />
                  フライパンにオイルをいれ火にかける。魚を皮目から焼く。<br />
                  皮がカリッとなったら身を順番にやく。<br />
                  バターを入れ溶かしながら焼き上げる。
                </p>

                <p class="text with-divider">
                  マッシュポテトをつくる。<br />
                  ジャガイモはしっかり洗い蒸し上げる。<br />
                  温かいうちに皮を剥き鍋に入れる。<br />
                  別鍋に牛乳とバターを入れ温めておく。<br />
                  ジャガイモを崩し、温めた牛乳を入れてに火にかける。<br />
                  滑らかになるまで火をいれる。<br />
                  塩胡椒で味をし、少しのおろしたニンニクをいれる。<br />
                  仕上げにシナモンを入れる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>ルッコラとナッツのペースト</h1>
                  <h2>Rocket Green Sauce</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  カシューナッツをフードプロセッサーで砕く。<br />
                  そこにルッコラ、パルミジャーノ、塩、胡椒、オリーブオイルを入れて撹拌する。<br />
                  ムニエルやパンに添える。
                </p>

                <p class="divider">・</p>
                <p class="date">2022.02.18</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.11 サーモンのムニエル マッシュポテト添え',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol11/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.11 サーモンのムニエル マッシュポテト添え',
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
