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
                <li class="breadcrumb-item">Mood</li>
                <li class="breadcrumb-item active">Vol.2</li>
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
          v-lazy="require('@/assets/img/mood/vol2.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>青大豆のチリ</h1>
                <h2>Green Soybean Chili</h2>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  青大豆を一晩浸水し茹でる。<br />
                  茹でる時にブラックペッパーやローリエを入れると良い。<br />
                  みじん切りのにんにく、玉葱をよく炒める。<br />
                  別のフライパンでスパイスと挽肉を焼くように炒める。<br />
                  牛肉の割合が多い方がよく合う。<br />
                  炒めた玉葱と挽肉を合わせて炒め、
                  トマトホール、バルサミコ酢、きび砂糖、塩、茹でた青大豆を合わせて煮込んでいく。<br />
                  仕上げに刻んだハラペーニョをいれ、味を整える。
                </p>
                <p class="divider">・</p>
                <header class="c-mood-header with-divider">
                  <h1>フレッシュトマトサルサ</h1>
                  <h2>Fresh Tomato Salsa</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  トマトは横半分に切り種と水分を取り除く。<br />
                  ざく切りにする。<br />
                  赤玉葱をみじん切りにし、水にさらす。<br />
                  香菜の芯、ほんの少しのにんにく、ハラペーニョをみじん切りにし加える。<br />
                  水気をしっかり絞った赤玉葱を加える。<br />
                  食べる寸前に塩、ほんの少しのきび砂糖、レモン汁で味をととのえる。
                </p>
                <p class="text">
                  ビーツのピクルス、アボガドディップ、フレッシュリーフ、自家製ハラペーニョソースと一緒に。
                </p>

                <p class="divider">・</p>
                <p class="date">2021.4.30</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.1 甘エビと鰆のフリット サルサヴェルデ添え',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol1/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.1 甘エビと鰆のフリット サルサヴェルデ添え',
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
