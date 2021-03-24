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
                <li class="breadcrumb-item">Mood</li>
                <li class="breadcrumb-item active">Vol.1</li>
              </ul>
              <!-- breadcrumb-list end -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="single-product-wrap">
      <div class="mood-main">
        <img
          v-lazy="require('@/assets/images/mood/vol1.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 mt-40 col-sm-12">
          <div class="product-details-content">
            <header class="font-weight--reguler mb-20 text-center">
              <h5>甘エビと鰆のフリット サルサヴェルデ添え</h5>
              <p>
                Fritto Spanish Mackerel &amp; Northern Shrimp with Salsa Verde
              </p>
            </header>

            <div class="mood-content mt-10 text-center">
              <p class="mb-20">
                サルサヴェルデをつくる。<br />
                グリーンのハーブをさっと洗い、太い茎を取り除く。<br />
                今回は香菜とフェンネル。<br />
                アンチョビ、ナッツ、塩、きび砂糖、バルサミコ、オリーブオイルを入れフードプロセッサーにかける。
              </p>
              <p class="mb-20">
                甘エビは頭と尻尾の剣をハサミで切る。<br />
                体の殻を取っておく。<br />
                鰆は適当な大きさに切り、塩を少々ふる。
              </p>
              <p class="mb-20">
                衣をつくる。<br />
                小麦粉、塩にビールを入れ柔らかめに混ぜる。<br />
                ハーブがあればみじん切りにしていれる。
              </p>
              <p class="mb-20">
                鰆はたっぷり、甘エビは体にだけ衣をつけ<br />180°cくらいの油で揚げる。
                <br />
                甘エビは体が先に揚がるのでトングなどを使いの頭をしっかり揚げる。
              </p>
              <p class="mb-40">サルサヴェルデを添えていただく。</p>
              <p class="mb-40">
                Side
                Dishes:挽肉と切り干し大根のトマト煮込み、プラムチーズとクラッカー
              </p>
              <span class="en">2021.3.23</span>
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
    title: 'Yorocco Beer : Y/B/A/P #004 Blueberry Prana',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/beers/ybap_blueberry_prana/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Yorocco Beer : Y/B/A/P #004 Blueberry Prana',
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
