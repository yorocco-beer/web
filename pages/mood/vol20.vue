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
                <li class="breadcrumb-item active">vol.20</li>
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
          v-lazy="require('@/assets/img/mood/vol20.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>穴子と菊芋の天ぷら</h1>
                <h2>Anago (Conger) Tempura test</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  穴子は余分な水分をとり、縦に細かく切り目を入れる。<br />
                  適当な大きさに切り、すりおろした生姜でマリネする。<br />
                  菊芋は適当な大きさに切り酢を入れた熱湯で1分ほど茹でる。茹で上がった菊芋を醤油でマリネする。<br />
                  小麦粉に冷水、おろした生姜、塩をいれさっくり混ぜる。<br />
                  穴子、菊芋の順にくぐらせ、17〜180度の油でカラッと揚げる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>林檎と白菜のマリネ</h1>
                  <h2>Marinade Salad of Apple and Hakusai</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  白菜は芯と葉に分け、芯の部分だけ使う。<br />
                  4〜5センチほどの荒い千切りにする。<br />
                  塩をして余分な水気をしぼる。<br />
                  赤玉葱はスライスして、塩をして余分な水気をしぼる。<br />
                  林檎は千切りにする。<br />
                  全てを合わせ、レモン汁、レモンの皮すりおろし、薄口醤油で和える。塩味が足りない場合は塩で調節。<br />
                  炒りごまをかける。
                </p>
                <p class="divider">・</p>
                <p class="side">自家製あん肝</p>
                <p class="divider">・</p>
                <p class="date">2022.11.18</p>
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
    title: 'ヨロッコビール / Yorocco Beer : Mood : vol.20 穴子と菊芋の天ぷら',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol20/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.20 穴子と菊芋の天ぷら',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol20.jpg`,
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
