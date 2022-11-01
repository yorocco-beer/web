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
                <li class="breadcrumb-item active">vol.19</li>
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
          v-lazy="require('@/assets/img/mood/vol19.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>秋刀魚のグリル 自家製アリッサ＆林檎と木の子のチャツネ</h1>
                <h2>Grilled Saury with housemade Harissa and Chutney</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  アリッサを作る<br />
                  フライパンにオイル、マスタードシード、クミンシード入れ弱火にかけ香りを出す。<br />
                  フレッシュの唐辛子(なければ乾燥)、塩、ニンニクを石臼で潰す。(なければプロセッサー)
                  全てを瓶に入れ、コリアンダーパウダー、シナモンパウダー、パプリカパウダー、加える。<br />
                  シナモンスティック、オイルを入れて一週間以上寝かす。<br />
                  チャツネを作る<br />
                  ニンニクみじん切り、 林檎、木の子、玉葱は粗みじん切り。<br />
                  鍋に油、ニンニクをいれ香りをだす。<br />
                  残りの材料をいれ火を弱めてしっかり炒める。<br />
                  水分が少なければ少し水を足しても良い。<br />
                  しっかり炒めたらフードプロセッサーに入れて煮詰めたバルサミコ酢を加えペースト状にする<br />
                  冷蔵庫で1ヶ月くらいもつ。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>柿と豆腐のレモンサラダ</h1>
                  <h2>Persimon and Tofu Salad</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  木綿豆腐は水切りをする。<br />
                  柿は食べやすい大きさに切る。<br />
                  少しのニンニクすりおろしとレモン、オリーブオイル、塩胡椒と和える。
                </p>
                <p class="divider">・</p>
                <p class="side">栗とチーズのガーリックライス</p>
                <p class="divider">・</p>
                <p class="date">2022.10.31</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.19 秋刀魚のグリル 自家製アリッサ＆林檎と木の子のチャツネ',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol19/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.19 秋刀魚のグリル 自家製アリッサ＆林檎と木の子のチャツネ',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol19.jpg`,
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
