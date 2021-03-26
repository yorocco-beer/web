<template>
  <div id="main-wrapper">
    <div class="breadcrumb-area mb-40">
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
                  Y/B/A/P #002 Plum Plum Bon
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
          v-lazy="require('@/assets/img/beer/2.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="c-beer__content">
        <h1>HISTORY</h1>
        <dl>
          <dt>2019.6.21</dt>
          <dd>
            仕込み オリジナルのビールは、Plum Bon
            Saisonとして、大阪の箕面ビールとコラボして仕込まれた。和歌山のすももを使用
          </dd>
          <dt>2019.8.15</dt>
          <dd>木樽（赤ワイン樽）へ移送</dd>
          <dt>2020.6.16</dt>
          <dd>地元で収穫された梅を木樽に浸漬</dd>
          <dt>2020.11.5</dt>
          <dd>ボトリング その後瓶内発酵・熟成</dd>
        </dl>

        <p class="note">
          ※ 樽熟成（Barrel
          Aging）で使用した木樽は、2015年に山梨の奥野田ワイナリーより譲っていただいたもの。フレンチオーク。ワイナリーでは最後にカベルネ・ソーヴィニヨンに使用された。その後ヨロッコブルワリーにて、数回ビールに使用されたもの。Biwavanaが入っていたバレル。
        </p>

        <h1>TASTING NOTES</h1>
        <p>
          ドライなセゾン。木樽での熟成により味わいはオリジナルより柔らかく変化している。ブレタノマイセスによるファンキーさとドライホッピングによる香りが合わさり、有名なベルギーの修道院ビールの存在を思い起こさせるが、全体的にそれよりも優しく素朴な印象を持つ。食中酒として、楽しんでいただくことをお勧めしたい。今後の熟成により、ホップ由来の風味は薄れることが予想されるが、ブレタノマイセス由来のファンキーさは強まる可能性もある。
        </p>
        <div class="product-details-content">
          <div class="product_meta mt-30">
            <div class="sku_wrapper item_meta">
              <span class="label"> Style: </span>
              Barrel Aged / Fruited Saison
            </div>
            <div class="posted_in item_meta">
              <span class="label">Abv: </span>
              5.5%
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
    title: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #002 Plum Plum Bon',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_plum_plum_bon/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #002 Plum Plum Bon',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/2.jpg`,
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

