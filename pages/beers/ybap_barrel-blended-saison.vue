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
                  Y/B/A/P #006 Barrel Blended Saison
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
          v-lazy="require('@/assets/img/beer/6.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="c-beer__content">
        <h1>HISTORY</h1>
        <dl>
          <dt>2020.1.27</dt>
          <dd>仕込み</dd>
          <dt>2020.2.12</dt>
          <dd>
            3本の木樽（赤ワイン樽）へ移送。それぞれの木樽に異なる種族のブレタノマイセス（野生酵母）を投入。Brettanomyces
            lambicus /Brettanomyces bruxellensis / Brettanomyces bruxellensis
            Trois Vrai
          </dd>
          <dt>2021.7.13</dt>
          <dd>
            3本の木樽をステンレスタンクへ移送してブレンド。この際に、酸味を補う目的で、少量の梅セゾンもブレンドした。
          </dd>
          <dt>2021.7.15</dt>
          <dd>ボトリング その後瓶内発酵・熟成</dd>
        </dl>

        <p class="note">
          ※ 樽熟成（Barrel
          Aging）で使用した木樽は、フランスのワイナリーで使用されたのち日本へ輸入されたもの。
        </p>

        <h1>TASTING NOTES</h1>
        <p>
          クリアなアンバーカラー。ブレタノマイセスによるファンキーな香りとWoodyな樽香。口に含むと柔らかな甘みが広がり、その中には洋梨のような香り、ライチなどの南国の果実を想わせる香りなど様々な要素が見え隠れする。マイルドな酸味と余韻のフィニッシュ。いま現在は複雑で若干まとまりのない印象もあるが、今後１〜２年をかけて熟成して、味わいの変化を楽しむこともできるだろう。（2021.9.9）
        </p>
        <div class="product-details-content">
          <div class="product_meta mt-30">
            <div class="sku_wrapper item_meta">
              <span class="label"> Style: </span>
              Barrel Aged Saison
            </div>
            <div class="posted_in item_meta">
              <span class="label">Abv: </span>
              6%
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
    title: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #006 Barrel Blended Saison',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_barrel-blended-saison/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Y/B/A/P #006 Barrel Blended Saison',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/6.jpg`,
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
