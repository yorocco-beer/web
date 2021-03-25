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
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5 col-sm-12">
            <img
              v-lazy="require('@/assets/images/beer/2.jpg')"
              class="img-fluid center"
              alt=""
            />
          </div>
          <div class="col-md-8 mt-40 col-sm-12">
            <div class="product-details-content">
              <header class="font-weight--reguler mb-20 text-center">
                <h6>Y/B/A/P #002</h6>
                <h5>Plum Plum Bon</h5>
              </header>

              <div class="quickview-peragraph mt-10">
                <h6 class="font-weight--bold mb-10">HISTORY</h6>
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

                <p class="note mb-30">
                  ※樽熟成（Barrel
                  Aging）で使用した木樽は、2015年に山梨の奥野田ワイナリーより譲っていただいたもの。フレンチオーク。ワイナリーでは最後にカベルネ・ソーヴィニヨンに使用された。その後ヨロッコブルワリーにて、数回ビールに使用されたもの。Biwavanaが入っていたバレル。
                </p>
                <h6 class="font-weight--bold mb-10">TASTING NOTES</h6>
                <p>
                  ほんのりとピンクがかった黄色〜山吹色。果実由来の心地よい酸味。軽い飲み口。よく熟したすももと梅のニュアンス。ガス感は弱め。食事全般に合うと思われるが、軽やかな味わいのもの、あるいは塩気の効いたもの、またはサクッとした食感のもの等に合いそうな雰囲気。
                </p>
              </div>

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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  head: {
    title: 'Yorocco Beer : Y/B/A/P #002 Plum Plum Bon',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_plum_plum_bon/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Yorocco Beer : Y/B/A/P #002 Plum Plum Bon',
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

