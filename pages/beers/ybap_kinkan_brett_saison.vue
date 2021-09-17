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
                  Y/B/A/P #005 Kinkan Brett Saison
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
          v-lazy="require('@/assets/img/beer/5.jpg')"
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
            木樽（赤ワイン樽）へ移送。ブレタノマイセス（野生酵母）を投入。
          </dd>
          <dt>2021.2.5</dt>
          <dd>鎌倉の「もっちゃんの畠」にて収穫した金柑を木樽に浸漬</dd>
          <dt>2021.5.28</dt>
          <dd>ボトリング その後瓶内発酵・熟成 ※樽熟成</dd>
        </dl>

        <p class="note">
          ※ 樽熟成（Barrel
          Aging）で使用した木樽は、フランスのワイナリーで使用されたのち日本へ輸入されたもの。
        </p>

        <h1>TASTING NOTES</h1>
        <p>
          クリアなアンバーカラー。Woodyな樽香と柑橘のスッとした香り。口に含むと杏を想わせる甘みと金柑の果皮や果肉のニュアンス。
          ブレタノマイセスによるファンキー・トロピカルなエステルとピチピチとした発泡感が合わさり、最後は綺麗な酸の余韻でフィニッシュ。
          全体として爽やかで酸味と金柑の果実感を楽しめるビール。ソテーした白身魚にハーブを振りかけたような料理、あるいはカルパッチョのような魚介の料理に合いそうな印象。
          （2021.9.9）
        </p>
        <div class="product-details-content">
          <div class="product_meta mt-30">
            <div class="sku_wrapper item_meta">
              <span class="label"> Style: </span>
              Barrel Aged / Fruited Saison
            </div>
            <div class="posted_in item_meta">
              <span class="label">Abv: </span>
              6.5%
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
    title: 'ヨロッコビール / Yorocco Beer : Y/B/A/P #005 Kinkan Brett Saison',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_kinkan_brett_saison/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Y/B/A/P #005 Kinkan Brett Saison',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/5.jpg`,
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

