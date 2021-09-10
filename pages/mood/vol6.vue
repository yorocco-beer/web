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
                <li class="breadcrumb-item active">vol.6</li>
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
          v-lazy="require('@/assets/img/mood/vol6.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>ムール貝のビール蒸し</h1>
                <h2>Saison steamed Mussels</h2>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  ムール貝をたわしなどでよく洗い、ヒゲをとる。<br />
                  玉葱はスライス。<br />
                  フライパンにオリーブオイル、つぶしたニンニクを入れ火にかける。<br />
                  香りがでたら玉葱を入れさっと炒めムール貝を。<br />
                  貝の1/4位のビールを入れ蓋をする。<br />
                  (さっぱりとしたビールがよい。今回は梅のビールで香りよく)<br />
                  貝の口が開いたら完成。<br />
                  少しの塩と胡椒で味をととのえる。お好みでハーブ。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>ヤリイカと蓮根のマリネ</h1>
                  <h2>Marinated Squid salad with Renkon</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  ヤリイカは背骨を取り胴体と脚にわけて、内臓をとりさっと洗う。<br />
                  沸騰したお湯に生姜、野菜クズを入れイカをさっと茹でる。一度にたくさん入れると温度が下がるので数回にわけて入れる。半生くらいが美味しい。<br />
                  適当な大きさに切る。<br />
                  蓮根は皮を剥いてスライスし酢水でさっと茹でる。<br />
                  玉葱はみじん切り、にんにくはすりおろす。<br />
                  種無しオリーブはスライス。<br />
                  ボールにワインビネガー、きび砂糖、塩、胡椒を入れ混ぜ、にんにく、玉葱、蓮根の順でよく和える。<br />
                  イカとオリーブをいれさっと和える。<br />
                  塩と胡椒、オリーブオイルで仕上げる。
                </p>

                <p class="divider">・</p>
                <p class="side">
                  <span>Aglio e Olio with sardines and Jalapeños</span>
                  スモークサーディンとハラペーニョのアーリオオーリオ
                </p>
                <p class="divider">・</p>
                <p class="date">2021.9.10</p>
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
    title: 'ヨロッコビール / Yorocco Beer : Mood : vol.6 ムール貝のビール蒸し',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol6/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.6 ムール貝のビール蒸し',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol6.jpg`,
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
