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
                  Y/B/A/P #008 Barrel Aged Blackbird Sipping
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
          v-lazy="require('@/assets/img/beer/ybap/8.png')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="c-beer__content">
        <h1>HISTORY</h1>
        <dl>
          <dt>2020.12.25</dt>
          <dd>仕込み</dd>
          <dt>2021.2.9</dt>
          <dd>
            木樽（コニャック樽）へ移送。ブレタノマイセス（野生酵母）を投入。
          </dd>
          <dt>2021.４月</dt>
          <dd>苺（Second Use）を浸漬。</dd>
          <dt>2022.2.1</dt>
          <dd>ボトリング その後瓶内発酵・熟成</dd>
        </dl>

        <p class="note">
          ※ 樽熟成（Barrel
          Aging）で使用した木樽は、フランスのコニャック蒸留所で使われていたもの。
        </p>

        <h1>TASTING NOTES</h1>
        <p>
          黒い液色。洋梨の爽やかな香り。熟した果実香。モルトの香り。Woodyな樽香。レーズンなどのドライフルーツのフレーバー。いちご由来の酸味も強く感じられる。炭酸ガスの弾ける感じとピチッとした果実味。そもそもがドライなビールであるが、野生酵母の働きにより残糖分のほぼ無い仕上がりとなっている。チーズや肉料理などと。
        </p>
        <div class="product-details-content">
          <div class="product_meta mt-30">
            <div class="sku_wrapper item_meta">
              <span class="label"> Style: </span>
              Barrel Aged Brux Porter
            </div>
            <div class="posted_in item_meta">
              <span class="label">Abv: </span>
              7%
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
      'ヨロッコビール / Yorocco Beer : Y/B/A/P #008 Barrel Aged Blackbird Sipping',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_barrel-aged-blackbird/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Y/B/A/P #008 Barrel Aged Blackbird Sipping',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/assets/img/beer/ybap/8.png`,
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
