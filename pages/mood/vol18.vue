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
                <li class="breadcrumb-item active">vol.18</li>
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
          v-lazy="require('@/assets/img/mood/vol18.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>鰯の挟みフライ</h1>
                <h2>Deep Fried Sardine stuffed dried radish strips</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  鰯は頭を落とし内臓をとる。<br />
                  水洗いし水気をよくふく。<br />
                  戻した切り干し大根をしぼりざく切りにし、エゴマ、コチュジャン、生姜のすりおろし、醤油、きび砂糖、塩を入れ味をつけ、鰯のお腹につめる。<br />
                  水で溶いた小麦粉、パン粉の順でつけていく。<br />
                  170〜180度の油で骨までしっかり揚げる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>赤紫蘇のポテトサラダ</h1>
                  <h2>Potato Salad with Aka-Shiso</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  赤紫蘇をさっと洗い水気を絞って梅酢につけておく。(1ヶ月以上漬け込んだものがいい。ない場合は梅干しについてる紫蘇またはゆかりでも代用可)<br />
                  細かくきる。<br />
                  じゃがいもを蒸し皮をむく。<br />
                  きゅうりは小口切りに薄くスライスし塩をして水気を固く絞る。<br />
                  赤玉ねぎはみじん切りにし30分ほど水にさらし、水気を固く絞る。<br />
                  牛乳に刻んだニンニク、塩をいれ弱火で火を入れる。<br />
                  じゃがいもを潰し、熱した牛乳で味をつける。<br />
                  粗熱が取れたらきゅうり、玉ねぎをいれ混ぜて塩胡椒で味をととのえる。
                </p>
                <p class="divider">・</p>
                <p class="side">
                  茄子の揚げ浸し<br />
                  とうもろこしと切り干しのトマト煮<br />
                  出汁巻き卵焼き
                </p>
                <p class="divider">・</p>
                <p class="date">2022.09.23</p>
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
    title: 'ヨロッコビール / Yorocco Beer : Mood : vol.18 鰯の挟みフライ',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol18/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Mood : vol.18 鰯の挟みフライ',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol18.jpg`,
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
