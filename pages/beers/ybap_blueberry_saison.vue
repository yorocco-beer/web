<template>
  <div id="main-wrapper">
    <div class="breadcrumb-area">
      <div class="container">
        <div class="col-12">
          <div class="row breadcrumb_box align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <!-- breadcrumb-list start -->
              <ul class="breadcrumb-list text-center text-sm-right">
                <li class="breadcrumb-item">
                  <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/beers">Beers</NuxtLink>
                </li>
                <li class="breadcrumb-item active">
                  Y/B/A/P #001 Blueberry Saison
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
          v-lazy="require('@/assets/img/beer/1.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="c-beer__content">
        <h1>HISTORY</h1>
        <dl>
          <dt>2019.7.31</dt>
          <dd>仕込み オリジナルのビールはAutumn Boogieとしてリリース</dd>
          <dt>2019.9.4</dt>
          <dd>
            藤沢の綿貫農園で収穫したブルーベリーとともに木樽（赤ワイン樽）へ。
            <p class="note">
              このブルーベリーはSECOND
              USEと言って、別のビールに１回漬け込まれたものを再利用する形で使用した。
              また、その際同時にブレタノマイセスという野生酵母も投入している。
            </p>
          </dd>
          <dt>2020.2.27</dt>
          <dd>ボトリング その後瓶内発酵・熟成</dd>
        </dl>

        <p class="note">
          ボトリングの時点ではブルーベリー由来のエグ味が強いように感じられたが、１年超の瓶内熟成期間を経て、かなり柔らかく調和してきている。
        </p>
        <p class="note">
          ※ 樽熟成（Barrel
          Aging）で使用した木樽は、2015年に山梨の奥野田ワイナリーより譲っていただいたもの。フレンチオーク。ワイナリーでは最後にカベルネ・ソーヴィニヨンに使用された。その後ヨロッコブルワリーにて、数回ビールに使用されたもの。
        </p>

        <h1>TASTING NOTES</h1>
        <p>
          薄い赤〜紫色。ブルーベリーの果皮を思わせる少し鉄っぽいニュアンス。軽い酸味。ブレタノマイセス由来のライトなファンキー感。ライトボディ。食前または食中に良さそう。グラスに注いで軽く空気に触れさせるほど、硬い香りが柔らかくなる印象を受ける。
        </p>
        <div class="product-details-content">
          <div class="product_meta mt-30">
            <div class="sku_wrapper item_meta">
              <span class="label"> Style: </span>
              Barrel Aged / Fruited Saison
            </div>
            <div class="posted_in item_meta">
              <span class="label">Abv: </span>
              6%
            </div>
          </div>

          <div class="product_socials section-space--mt_60 pb-20">
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
      'ヨロッコビール / Yorocco Beer : Y/B/A/P #001 Y/B/A/P #001 Blueberry Saison',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_blueberry_saison/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Y/B/A/P #001 Y/B/A/P #001 Blueberry Saison',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/1.jpg`,
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

