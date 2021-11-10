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
                <li class="breadcrumb-item active">vol.8</li>
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
          v-lazy="require('@/assets/img/mood/vol8.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>豚肉とアサリのアレンテージョ</h1>
                <h2>Carne de Porco à Alentejana</h2>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  豚肩ロース肉ブロックを一口大にし、すりおろした生姜とにんにく、マッサ(赤パプリカと塩で作られたポルトガルの発酵調味料)、塩と少しのきび砂糖で下味をつける。<br />
                  30分ほどマリネ。<br />
                  アサリは砂だしをしておく。<br />
                  玉葱は粗微塵に。<br />
                  ジャガイモは丸のまま蒸して一口大に切り、素揚げしておく。<br />
                  熱したフライパンにオリーブ油をひき、マリネした豚肉を両面焼き、玉葱、アサリの順に炒める。<br />
                  少しのビール(今回はchipotle)を入れ蓋をし蒸し煮にする。<br />
                  アサリの口が開いたら塩胡椒で味をととのえ火を止める。<br />
                  器に盛り、パクチーをたくさん盛る。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>ビィファーナ (ポルトガル風豚肉サンド)</h1>
                  <h2>Bifana</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  豚モモスライスを、塩、少しのきび砂糖、おろした生姜でマリネする。<br />
                  タレを作る。(粒マスタード、醤油、塩、きび砂糖、すりおろしたリンゴをあわせる。)<br />
                  熱したフライパンに油をひき、マリネした豚肉を焼く。<br />
                  仕上がる寸前に、タレをかけ味をからませる。<br />
                  切り込みを入れたフランスパンにフレッシュリーフ、焼いた豚肉、スライスした赤パプリカをはさみ、フライパンに残ったタレを少しかける。<br />
                  お好みでパクチーをはさむ。
                </p>

                <p class="divider">・</p>
                <p class="date">2021.11.11</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.8 豚肉とアサリのアレンテージョ',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol8/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.8 豚肉とアサリのアレンテージョ',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol8.jpg`,
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
