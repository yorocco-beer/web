<template>
  <div class="product-wrapper section-space--pb_120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="section-title text-lg-left text-center mb-20">
            <h3 class="section-title">Beers</h3>
          </div>
        </div>
      </div>

      <div class="tab-content">
        <div class="tab-pane fade active show" id="tab_list_01">
          <!-- product-slider-active -->
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <a href="/ybap_blueberry_saison" class="product-thumbnail">
                    <img src="@/assets/images/beer/1.jpg" alt="" />
                  </a>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <a href="/ybap_blueberry_saison/"
                      >Y/B/A/P #001<br />
                      Blueberry Saison
                    </a>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <a href="product-details.html" class="product-thumbnail">
                    <img src="@/assets/images/beer/2.jpg" alt="" />
                  </a>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <a href="product-details.html"
                      >Y/B/A/P #002<br />
                      Plum Plum Bon
                    </a>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <a href="product-details.html" class="product-thumbnail">
                    <img src="@/assets/images/beer/3.jpg" alt="" />
                  </a>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <a href="product-details.html"
                      >Y/B/A/P #003<br />
                      Dry Hopped Brett Saison
                    </a>
                  </h6>
                </div>
              </div>
              <!-- Single Product Item End -->
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <!-- Single Product Item Start -->
              <div class="single-product-item text-center">
                <div class="products-images">
                  <a href="product-details.html" class="product-thumbnail">
                    <img src="@/assets/images/beer/4.jpg" alt="" />
                  </a>
                </div>
                <div class="product-content">
                  <h6 class="prodect-title">
                    <a href="product-details.html"
                      >Y/B/A/P #004<br />
                      Blueberry Prana
                    </a>
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
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const test = ref('this is message')
    return {
      test,
    }
  },
})
</script>
