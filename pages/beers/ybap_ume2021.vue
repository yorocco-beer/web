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
                <li class="breadcrumb-item active">Y/B/A/P #0011 UME 2021</li>
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
          v-lazy="require('@/assets/img/beer/ybap/11.webp')"
          class="img-fluid center"
          alt=""
        />
      </div>

      <div class="c-beer__content">
        <h1>HISTORY</h1>
        <dl>
          <dt>2021.6.9</dt>
          <dd>仕込み。地元で収穫された梅をふんだんに使ったセゾン。</dd>
          <dt>2021.7.14</dt>
          <dd>
            木樽（赤ワイン樽）へ移送。ブレタノマイセス（野生酵母）を投入。
          </dd>
          <dt>2023.5.11</dt>
          <dd>ボトリング</dd>
        </dl>

        <p class="note">※ その後瓶内発酵・熟成</p>

        <h1>TASTING NOTES</h1>
        <p>
          明るい金色の外観。梅のさわやかな香り。シャープな酸味。ビネガー感。ドライ。軽いファンキーさ。ライム。軽い樽香。
        </p>
        <div class="product-details-content">
          <div class="product_meta mt-30">
            <div class="sku_wrapper item_meta">
              <span class="label"> Style: </span>
              Fruited Saison
            </div>
            <div class="posted_in item_meta">
              <span class="label">Abv: </span>
              4.5%
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
    title: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #011 UME 2021',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_ume2021/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #011 UME 2021',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/11.jpg`,
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
