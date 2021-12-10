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
                <li class="breadcrumb-item active">vol.9</li>
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
          v-lazy="require('@/assets/img/mood/vol9.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>参鶏湯</h1>
                <h2>Samgye-tang (Ginseng chicken soup)</h2>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  丸鶏のお腹にお湯をかけ臭みをとる。 余分な脂をとる。<br />
                  水気をふき、塩、きび砂糖、おろした生姜を全体にぬる。<br />
                  一晩浸水した餅米、生栗、ナツメをお腹にいれとめる。<br />
                  圧力鍋に丸鶏、長ネギ、ニンニクを入れ水をひたひたまで入れる。<br />
                  火にかけ灰汁をとる。<br />
                  蓋をし圧がかかったら弱火にし7〜8分後火をとめる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>里芋と黄人参のナムル</h1>
                  <h2>Namul Taro and Yellow Carrot</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  里芋は皮を剥いて茹で、一口大にきる。<br />
                  人参は千切りにし塩をして余分な水分をしぼる。<br />
                  味噌、豆板醤、きび砂糖、米酢を合わせる。<br />
                  いりごまを摺る。<br />
                  全てを和え、胡麻油、塩で味を整える。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>ひじきと青菜のナムル</h1>
                  <h2>Namul Hijiki and Greens</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  ひじきを戻し、ニンニク、胡麻油で炒める。<br />
                  醤油、きび砂糖、塩で味をつける。<br />
                  青菜を茹で水気を絞り、一口大にきる。<br />
                  全てを和える。
                </p>

                <p class="divider">・</p>
                <p class="side">紅芯大根のナムル / 白菜と人参のナムル</p>

                <p class="divider">・</p>
                <p class="date">2021.12.10</p>
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
    title: 'ヨロッコビール / Yorocco Beer : Mood : vol.9 参鶏湯',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol9/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Mood : vol.9 参鶏湯',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol9.jpg`,
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
