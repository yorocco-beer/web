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
                  Y/B/A/P #004 Blueberry Prana
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
          v-lazy="require('@/assets/img/beer/4.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="c-beer__content">
        <h1>HISTORY</h1>
        <dl>
          <dt>2019.11.8</dt>
          <dd>仕込み オリジナルのビールはBlack Saintとしてリリース。</dd>
          <dt>2019.12.18</dt>
          <dd>木樽（コニャック樽）へ移送</dd>
          <dt>2020.08.06</dt>
          <dd>収穫したばかりのフレッシュなブルーベリーを木樽に浸漬</dd>
          <dt>2020.11.10</dt>
          <dd>
            木樽（赤ワイン樽）へ液体のみを移送
            ブルーベリーから渋みが出すぎるのを防ぐため、ビールと果実を分離することが狙い。
          </dd>
          <dt>2021.1.15</dt>
          <dd>ボトリング その後瓶内発酵・熟成</dd>
        </dl>
        <p class="note">
          ※
          使用したコニャック樽は、フランスのコニャック蒸留所で使用された後、日本へ輸入されたもの。赤ワイン樽は山梨の奥野田ワイナリーより譲り受けた後、ヨロッコブルワリーで数回ビールに使用したもの。アメリカンオーク。
        </p>
        <h1>TASTING NOTES</h1>
        <p>
          黒に近い、濃いルビイ色。果実味溢れるエキス感。心地よく、あとをひく酸。軽やかな凝縮感。そもそもは重めのビールだったが、木樽内での野生酵母（ブレタノマイセス）による発酵により、残糖分はかなり発酵されており、そこに発泡（ガス感）も加わることで、軽めの赤ワインのような楽しみ方ができるビールになっている。
        </p>
        <div class="product-details-content">
          <div class="product_meta mt-30">
            <div class="sku_wrapper item_meta">
              <span class="label"> Style: </span>
              Barrel Aged / Dark Ale with Blueberries
            </div>
            <div class="posted_in item_meta">
              <span class="label">Abv: </span>
              7.5%
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
    title: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #004 Blueberry Prana',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_blueberry_prana/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #004 Blueberry Prana',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/4.jpg`,
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
