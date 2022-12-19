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
                <li class="breadcrumb-item active">vol.21</li>
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
          v-lazy="require('@/assets/img/mood/vol21.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>ローストポーク 林檎マスタードのソース</h1>
                <h2>Roast Pork with Apple Mustard source</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  豚ロース肉の塊に塩 砂糖
                  胡椒をし、一晩寝かせる。焼く前に30分ほど常温に戻し紐をしてかたちをつくる。<br />
                  玉葱、林檎をスライスする。<br />
                  オーブンを210℃に温める。<br />
                  天板にオイルを薄く塗り玉葱、林檎を敷く。<br />
                  その上に紐をした肉を置き、天板に水を入れオーブンに。45分焼いたところで林檎と玉葱を取り出し、さらに15分ほど焼く。(その際表面が焦げはじめたら、アルミをかぶせる)<br />
                  焼き上がったらアルミをかぶせ、放置。<br />
                  余熱で中まで火を通す。<br />
                  紐をとり薄くスライスする。<br />
                  ソースは、オーブンから取り出した玉葱と林檎をフードプロセッサーにかけ、粒マスタード、煮詰めたバルサミコ酢、醤油、塩、砂糖を入れて混ぜる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>紫キャベツの赤ワインマリネ</h1>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  紫キャベツは千切りにする。<br />
                  赤ワイン、シナモンリーフ、粒胡椒を火にかけアルコールを飛ばす。<br />
                  紫キャベツを炒めしんなりしたらアルコールを飛ばした赤ワインをいれ、さらに炒める。火からおろし赤ワインビネガー、塩、砂糖、胡椒、パプリカパウダー、オレガノで味をつける。
                </p>
                <p class="divider">・</p>
                <p class="side">バスクチーズケーキ</p>
                <p class="divider">・</p>
                <p class="date">2022.12.19</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.21 ローストポーク 林檎マスタードのソース',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol21/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.21 ローストポーク 林檎マスタードのソース',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol21.jpg`,
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
