<template>
  <div class="product-wrapper section-space--pb_60 mt-10">
    <div class="container">
      <div class="tab-content">
        <div class="tab-pane fade active show" id="tab_list_01">
          <div class="row">
            <!-- 商品アイテムのループ -->
            <div
              v-for="(product, index) in products"
              :key="index"
              class="col-lg-3 col-md-4 col-6"
            >
              <div class="single-product-item text-center">
                <div class="products-images">
                  <!-- 商品リンク -->
                  <NuxtLink :to="product.link" class="product-thumbnail">
                    <!-- 商品画像 -->
                    <img
                      v-lazy="require(`@/assets/img/beer/${product.image}`)"
                      :alt="product.name"
                      width="263"
                      height="245"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <!-- 商品タイトル -->
                  <h6 class="prodect-title">
                    <NuxtLink :to="product.link">
                      <span class="sub">{{ product.code }}</span>
                      {{ product.name }}
                    </NuxtLink>
                  </h6>
                </div>
              </div>
            </div>
            <!-- 商品アイテムのループ終了 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      products: [
        {
          code: 'Y/B/A/P #013',
          name: 'Strawberry Hope',
          link: '/beers/ybap_strawberry_hope/',
          image: 'ybap/13.jpg',
        },
        {
          code: 'Y/B/A/P #012',
          name: 'SUMOMO 2021',
          link: '/beers/ybap_sumomo_2021/',
          image: 'ybap/12.webp',
        },
        {
          code: 'Y/B/A/P #011',
          name: 'UME 2021',
          link: '/beers/ybap_ume2021/',
          image: 'ybap/11.webp',
        },
        {
          code: 'Y/B/A/P #010',
          name: 'BlueBerry Quad',
          link: '/beers/ybap_blueberry-quad/',
          image: 'ybap/thumb10.png',
        },
        {
          code: 'Y/B/A/P #009',
          name: 'Kinkan Blonde 2022',
          link: '/beers/ybap_kinkan-blonde_2022/',
          image: 'ybap/thumb9.png',
        },
        {
          code: 'Y/B/A/P #008',
          name: 'Barrel Aged Blackbird Sipping',
          link: '/beers/ybap_barrel-aged-blackbird/',
          image: 'ybap/thumb8.png',
        },
        {
          code: 'Y/B/A/P #007',
          name: 'Blowin’ through Jasmine',
          link: '/beers/ybap_blowin_through_jasmine/',
          image: 'ybap/thumb7.png',
        },
        {
          code: 'Y/B/A/P #006',
          name: 'Barrel Blended Saison',
          link: '/beers/ybap_barrel-blended-saison/',
          image: 'thumb6.jpg',
        },
        {
          code: 'Y/B/A/P #005',
          name: 'Kinkan Brett Saison',
          link: '/beers/ybap_kinkan_brett_saison/',
          image: 'thumb5.jpg',
        },
        {
          code: 'Y/B/A/P #004',
          name: 'Blueberry Prana',
          link: '/beers/ybap_blueberry_prana/',
          image: 'thumb4.jpg',
        },
        {
          code: 'Y/B/A/P #003',
          name: 'Dry Hopped Brett Saison',
          link: '/beers/ybap_dry_hopped_brett_saison',
          image: 'thumb3.jpg',
        },
        {
          code: 'Y/B/A/P #002',
          name: 'Plum Plum Bon',
          link: '/beers/ybap_plum_plum_bon',
          image: 'thumb2.jpg',
        },
        {
          code: 'Y/B/A/P #001',
          name: 'Blueberry Saison',
          link: '/beers/ybap_blueberry_saison/',
          image: 'thumb1.jpg',
        },
      ],
    }
  },
})
</script>
