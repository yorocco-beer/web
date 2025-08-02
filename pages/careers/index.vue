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
                <li class="breadcrumb-item active">Careers</li>
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
          v-lazy="require('@/assets/img/careers/main.png')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>スタッフ募集のお知らせ 2025</h1>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  ヨロッコビールでは、この秋（もしくは冬）くらいから一緒に働く仲間を募集したいと思います。<br /><br />
                  ヨロッコビールは、現在のところ、総勢６名の小さな会社です。<br />
                  ご承知のとおり、小さな会社ゆえの、メリット・デメリットはあると思います。
                  <br />
                  <br />
                  どれだけの応募があるか分かりませんが、今回はいちおう３つのポジションを設定させていただきました。
                  <br />
                  <br />
                  <strong>【ブルワー】</strong><br />
                  醸造に関する知識や経験（もしくは学ぼうとする意欲）が必須となります。体力とコミュニケーションスキルも必要な職種です。
                  <br />
                  <br />
                  <strong>【配達及び出荷アシスタント】</strong><br />
                  お取引店様と直接触れ合う機会の多い、とても大切なポジションだと捉えています。ヨロッコビールで働いてみたい、クラフトビール業界に足を踏み入れてみたいという方も歓迎です。
                  <br />
                  <br />
                  <strong>【飲食部門スタッフ】</strong><br />
                  現時点ですぐに人が必要というわけではないのですが、これからの業務拡張も見据えて、継続的に募集したいと考えています。海沿いで暮らしたい料理人の方ですとか、クラフトビールについて深く見識を深めたい方などなど。
                  <br />
                  <br />
                  全てのポジションで採用者が出るとは限りませんが、間口を広くして、たくさんの方と接点を持てたらと考えております。
                  <br />
                  <br />
                  ご興味のある方、またありそうな方に、ぜひお伝えしてもらえたら嬉しいです。
                  <br />
                  <br />
                  応募される方は、応募フォームより申込をお願いします。
                  ８月末まで募集をいたします（延長の可能性あり）。
                  <br />
                  <br />
                  まずは書類選考させていただき、その後面接という流れになります。
                  諸々のご連絡はメールにて行わせていただきます。
                  <br />
                  <br />
                  下記に応募条件を記させていただきます。
                  ぜひ奮ってご応募ください。
                </p>

                <a
                  class="btn--lg"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeioPL1YrUsdC-TKjUa0dJMZ_J0Op40cgNUVH_R0QPVls3i0A/viewform?pli=1"
                  style="margin-bottom: 4rem"
                  >応募フォーム</a
                >

                <p class="divider">・</p>

                <p class="by">Text : Akio Kichise</p>
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
    title: 'ヨロッコビール / Yorocco Beer : Careers',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/careers/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Careers',
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
        content: `${process.env.BASE_URL}/ogp/pub.jpg`,
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
