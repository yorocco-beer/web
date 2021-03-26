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
