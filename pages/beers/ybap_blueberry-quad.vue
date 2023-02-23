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
                  Y/B/A/P #010 Blueberry Quad
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
          v-lazy="require('@/assets/img/beer/ybap/10.png')"
          class="img-fluid center"
          alt=""
        />
      </div>

      <div class="c-beer__content">
        <h1>HISTORY</h1>
        <dl>
          <dt>2021.12 仕込み</dt>
          <dd>オリジナルのビールはBELGIAN QUADRUPLEとしてリリース</dd>
          <dt>2022.1</dt>
          <dd>木樽（赤ワイン樽）へ移送。ブレタノマイセス（野生酵母）投入</dd>
          <dt>2022.8</dt>
          <dd>
            藤沢の綿貫農園で収穫したブルーベリーを木樽に投入 2023.1
            ボトリング<br />その後瓶内発酵・熟成
          </dd>
        </dl>

        <p class="note">
          ※ 樽熟成（Barrel
          Aging）で使用した木樽は、2015年に山梨の奥野田ワイナリーより譲っていただいたもの。フレンチオーク。ワイナリーでは最後にカベルネ・ソーヴィニヨンに使用された。その後ヨロッコブルワリーにて、数回ビールに使用されたもの。
        </p>

        <h1>TASTING NOTES</h1>
        <p>
          深い琥珀色。チョコレートとブルーベリーの混ざった色合い。ブルーベリー由来のタンニン、酸味。元々のクアドラプルに在った酵母由来のダークフルーツの味わいがブルーベリー由来のベリー味と調和して感じられる。また、酸味のおかげで元々のクアドラプルと比較するとアフターテイストがシュッとスムーズに。ハイアルコール故のアルコール感が未だ感じられるが、瓶内での熟成による変化に期待。比較的穏やかな樽香。総じて、ベリーやダークフルーツ、モルトを感じさせるリッチで複雑な味わいだが、酸味が
          全体を軽やかにしている。
          食後酒として、または赤身肉と合わせて飲むのが良さそうなミディアム〜フルボディのビール。
        </p>
        <div class="product-details-content">
          <div class="product_meta mt-30">
            <div class="sku_wrapper item_meta">
              <span class="label"> Style: </span>
              Barrel Aged Belgain Quadruple with Blueberry
            </div>
            <div class="posted_in item_meta">
              <span class="label">Abv: </span>
              11%
            </div>
          </div>

          <div class="product_socials section-space--mt_60 pb-4">
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
    title: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #010 Blueberry Quad',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_blueberry-quad/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #010 Blueberry Quad',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/10.png`,
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
