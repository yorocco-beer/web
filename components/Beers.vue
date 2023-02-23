<template>
  <div class="product-wrapper section-space--pb_60 mt-10">
    <div class="container">
      <div class="tab-content">
        <div class="tab-pane fade active show" id="tab_list_01">
          <!-- product-slider-active -->
          <div class="row">
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_blueberry_saison/"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/thumb1.jpg')"
                      alt=""
                      width="263"
                      height="245"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_blueberry_saison/"
                      ><span class="sub">Y/B/A/P #001</span>
                      Blueberry Saison
                    </NuxtLink>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_plum_plum_bon"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/thumb2.jpg')"
                      alt=""
                      width="263"
                      height="245"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_blueberry_saison/"
                      ><span class="sub">Y/B/A/P #002</span>
                      Plum Plum Bon
                    </NuxtLink>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_dry_hopped_brett_saison"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/thumb3.jpg')"
                      width="263"
                      height="245"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_dry_hopped_brett_saison"
                      ><span class="sub">Y/B/A/P #003</span>
                      Dry Hopped Brett Saison
                    </NuxtLink>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_blueberry_prana/"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/thumb4.jpg')"
                      alt=""
                      width="263"
                      height="245"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_blueberry_prana/"
                      ><span class="sub">Y/B/A/P #004</span>
                      Blueberry Prana
                    </NuxtLink>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_kinkan_brett_saison/"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/thumb5.jpg')"
                      alt=""
                      width="263"
                      height="245"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_kinkan_brett_saison/"
                      ><span class="sub">Y/B/A/P #005</span>
                      Kinkan Brett Saison
                    </NuxtLink>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_barrel-blended-saison/"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/thumb6.jpg')"
                      alt=""
                      width="263"
                      height="245"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_barrel-blended-saison/"
                      ><span class="sub">Y/B/A/P #006</span>
                      Barrel Blended Saison
                    </NuxtLink>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_blowin_through_jasmine/"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/ybap/thumb7.png')"
                      alt=""
                      width="263"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_blowin_through_jasmine/"
                      ><span class="sub">Y/B/A/P #007</span>
                      Blowin’ through Jasmine
                    </NuxtLink>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_barrel-aged-blackbird/"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/ybap/thumb8.png')"
                      alt=""
                      width="263"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_barrel-aged-blackbird/"
                      ><span class="sub">Y/B/A/P #008</span>
                      Barrel Aged Blackbird Sipping
                    </NuxtLink>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_kinkan-blonde_2022/"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/ybap/thumb9.png')"
                      alt=""
                      width="263"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_kinkan-blonde_2022/"
                      ><span class="sub">Y/B/A/P #009</span>
                      Kinkan Blonde 2022
                    </NuxtLink>
                  </h6>
                </div>
              </div>

              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <NuxtLink
                    to="/beers/ybap_blueberry-quad/"
                    class="product-thumbnail"
                  >
                    <img
                      v-lazy="require('@/assets/img/beer/ybap/thumb10.png')"
                      alt=""
                      width="263"
                    />
                  </NuxtLink>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <NuxtLink to="/beers/ybap_blueberry-quad/"
                      ><span class="sub">Y/B/A/P #010</span>
                      BlueBerry Quad
                    </NuxtLink>
                  </h6>
                </div>
              </div>

              <!-- Single Product Item End -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>
