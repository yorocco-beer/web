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
                <li class="breadcrumb-item active">vol.12</li>
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
          v-lazy="require('@/assets/img/mood/vol12.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>ローストポーク 蕗の薹とナッツのソース</h1>
                <h2>Roast Poak / Japanese Butterbur scape and nuts sauce</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  豚もも肉塊に塩、マーマレードをぬり一晩マリネする。<br />
                  焼く前に常温に30分ほど戻して200度のオーブンで20〜30分焼く。オーブンから出したらアルミを被せ余熱で中まで火を通す。<br />
                  ソースを作る。<br />
                  蕗の薹はよく洗い、ざく切り。<br />
                  にんにく生姜のみじん切り、スパイスをオリーブオイルで香りが出るまで熱し、蕗の薹を入れ炒める。<br />
                  ボールにみじん切りの玉ねぎ、砕いたナッツ(今回はカシューナッツ)、炒めた蕗の薹、フレンチマスタードを入れ混ぜる。塩で味を整える。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>若芽と菜の花、春キャベツのコールスロー</h1>
                  <h2>Coleslaw with Wakame seaweed</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  生若芽を一口大に切りる。にんにく生姜のみじん切り、スパイス、オリーブオイルを熱し香りをだす。生若芽を炒める。若布が弾く場合があるので注意。塩、きび砂糖、醤油、バルサミコ酢で軽く味付け。<br />
                  キャベツは千切りにして塩をまぶす。<br />
                  水気がでたら固く絞る。<br />
                  菜の花はさっと湯掻き水気を絞って、一口大にきる。<br />
                  玉葱をみじん切りにし水に晒す。10分ほとで水気を固く絞る。<br />
                  全てをボールに入れ、ヨーグルト、粒マスタードを入れ和える。<br />
                  塩ときび砂糖で味を整える。
                </p>

                <p class="divider">・</p>
                <p class="date">2022.03.19</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.12 ローストポーク 蕗の薹とナッツのソース',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol12/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.12 ローストポーク 蕗の薹とナッツのソース',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol12.jpg`,
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
