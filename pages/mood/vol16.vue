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
                <li class="breadcrumb-item active">vol.16</li>
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
          v-lazy="require('@/assets/img/mood/vol16.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>ピーマンとパイナップルの酢豚</h1>
                <h2>Sweet and Sour Pork</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  豚肩ロース肉を一口大に切る。<br />
                  塩、胡椒、パイナップルのみじん切りで漬け込む。<br />
                  ピーマン、赤玉ねぎはそれぞれ下処理し一口大に切る。<br />
                  合わせ調味料を作る。<br />
                  醤油、オイスターソース、塩、ニンニク生姜のみじん切り、豆板醤、黒酢をあわせる。<br />
                  漬け込んだ肉に水溶き片栗粉と菜種油を混ぜる。<br />
                  片栗粉を万遍なくつける。<br />
                  180〜190度の油でしっかり揚げる。<br />
                  ピーマン、赤玉ねぎはさっと揚げる。<br />
                  中華鍋に合わせた調味料を入れ沸いたら水溶き片栗粉でとろみをつける。<br />
                  揚げた肉と野菜をさっと入れ絡める。<br />
                  胡麻油をたらす。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>揚げ茄子の冷製 夏野菜のタレ</h1>
                  <h2>Fried Eggplant with Summer vegi sauce</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  茄子は適当な大きさに切り180度の油で素揚げする。<br />
                  揚げすぎないこと。<br />
                  タレをつくる。<br />
                  きゅうり、ネギ、青ネギ、黄色ピーマン、緑ピーマンあらみじん切りにする。<br />
                  (野菜はなんでもよい。コリンキーや紫蘇など)<br />
                  ニンニク、生姜は細かいみじん切りにする。<br />
                  合わせダレをつくる。<br />
                  醤油、酢、豆板醤、塩、きび砂糖、胡麻油を合わせる。<br />
                  (柑橘を絞っても良い)<br />
                  揚げた茄子を盛り付け、合わせダレをたっぷりかける。<br />
                  白髪ネギと胡麻をかける。
                </p>
                <p class="divider">・</p>
                <p class="side">
                  きゅうりの花山椒醤油漬け<br />
                  ズッキーニの赤玉葱和え
                </p>
                <p class="divider">・</p>
                <p class="date">2022.07.15</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.16 ピーマンとパイナップルの酢豚',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol16/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.16 ピーマンとパイナップルの酢豚',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol16.jpg`,
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
