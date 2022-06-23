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
                  <NuxtLink to="/beers">Beers</NuxtLink>
                </li>
                <li class="breadcrumb-item active">
                  Y/B/A/P #007 Blowin’ through Jasmine
                </li>
              </ul>
              <!-- breadcrumb-list end -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="single-product-wrap">
      <div class="c-beer__mainimg">
        <img
          v-lazy="require('@/assets/img/beer/ybap/7.png')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="c-beer__content">
        <h1>HISTORY</h1>
        <dl>
          <dt>2020.12.18</dt>
          <dd>仕込み</dd>
          <dt>2020.2.24</dt>
          <dd>
            木樽（赤ワイン樽）へ移送。ブレタノマイセス（野生酵母）を投入。
          </dd>
          <dt>2022.1.20</dt>
          <dd>木樽からステンレスタンクへと移送。ジャスミンを漬ける。</dd>
          <dt>2022.1.31</dt>
          <dd>ボトリング その後瓶内発酵・熟成</dd>
        </dl>

        <p class="note">
          ※ 樽熟成（Barrel
          Aging）で使用した木樽は、山梨の奥野田ワイナリーで使用されたものを譲り受けたもの。
        </p>

        <h1>TASTING NOTES</h1>
        <p>
          明るめの黒色の外観。熟したフルーツのような香り。ジャスミンの香り。黒ビールのカカオやコーヒー的なモルト感。
          <br />野生酵母による心地よいファンキーさ。軽い酸とタンニンが合わさり、後味を締める。夏の夕方に涼しい風を浴びながら飲みたい一杯。肉料理や、八角を効かせた中華料理などと合いそうな印象。
        </p>
        <div class="product-details-content">
          <div class="product_meta mt-30">
            <div class="sku_wrapper item_meta">
              <span class="label"> Style: </span>
              Barrel Aged Dark Lager w/Jasmine
            </div>
            <div class="posted_in item_meta">
              <span class="label">Abv: </span>
              5.5%
            </div>
          </div>

          <div
            class="
              product_socials
              section-space--mt_60
              pb-20
              section-space--mb_60
            "
          >
            <span class="label">Share :</span>
            <ul class="helendo-social-share socials-inline">
              <li>
                <a
                  class="share-twitter helendo-twitter"
                  href="#"
                  target="_blank"
                  ><i class="social_twitter"></i
                ></a>
              </li>
              <li>
                <a
                  class="share-facebook helendo-facebook"
                  href="#"
                  target="_blank"
                  ><i class="social_facebook"></i
                ></a>
              </li>
            </ul>
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
      'ヨロッコビール / Yorocco Beer : Y/B/A/P #007 Blowin through Jasmine',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_blowin_through_jasmine/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Y/B/A/P #007 Blowin through Jasmine',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/7.png`,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: '' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '' },
    ],
  },
})
</script>
