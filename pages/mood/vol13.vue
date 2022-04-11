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
                <li class="breadcrumb-item active">vol.13</li>
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
          v-lazy="require('@/assets/img/mood/vol13.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>空豆と厚切りベーコンのピザ</h1>
                <h2>Bacon and Fava beans Pizza</h2>
              </header>
              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  ピザ生地をつくる。<br />
                  中力粉240gにドライイースト6gとぬるま湯300gを入れよく混ぜる。しっかり混ぜ合わせたら中力粉240g塩8gを加えて、手でこねる。丸めてボールに入れ濡れ布巾をかけ温かい場所で3〜40分ほど寝かせる。<br />
                  分割して丸めて濡れ布巾をかぶせ5分ほどおく。<br />
                  手で少しづつ丸くのばす。<br />
                  <br />
                  トマトソースをつくる。<br />
                  お鍋にオリーブ油と潰したにんにくを入れ火にかける。<br />
                  香りがしたらトマト缶を入れ少し煮詰める。<br />
                  少しのきび砂糖と塩で味をととのえる。<br />
                  <br />
                  ベーコンを厚切りに。<br />
                  新玉葱をスライス。<br />
                  空豆は鞘から取り軽くゆでておく。<br />
                  <br />
                  のばした生地の上にトマトソース、新玉葱、ベーコン、空豆をのせていき、最後にチーズをたっぷりのせ200℃のオーブンで15分ほと焼く。
                </p>

                <p class="divider">・</p>
                <p class="side">
                  <span>Salad Pizza with herbs and grapefruit</span>
                  グレープフルーツとハーブのサラダピザ
                </p>
                <p class="divider">・</p>
                <p class="date">2022.04.11</p>
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
      'ヨロッコビール / Yorocco Beer : Mood : vol.13 空豆と厚切りベーコンのピザス',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol13/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.13 空豆と厚切りベーコンのピザス',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol13.jpg`,
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
