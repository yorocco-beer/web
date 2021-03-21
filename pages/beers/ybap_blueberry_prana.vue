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
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5 col-sm-12">
            <img
              src="@/assets/images/beer/4.jpg"
              class="img-fluid center"
              alt=""
            />
          </div>
          <div class="col-md-8 mt-40 col-sm-12">
            <div class="product-details-content">
              <header class="font-weight--reguler mb-20 text-center">
                <h6>Y/B/A/P #003</h6>
                <h5>Dry Hopped Brett Saison</h5>
              </header>

              <div class="quickview-peragraph mt-10">
                <h6 class="font-weight--bold mb-10">HISTORY</h6>
                <dl>
                  <dt>2019.11.8</dt>
                  <dd>
                    仕込み オリジナルのビールはBlack Saintとしてリリース。
                  </dd>
                  <dt>2019.12.18</dt>
                  <dd>木樽（コニャック樽）へ移送</dd>
                  <dt>2020.8.6</dt>
                  <dd>収穫したばかりのフレッシュなブルーベリーを木樽に浸漬</dd>
                  <dt>2020.11.10</dt>
                  <dd>
                    木樽（赤ワイン樽）へ液体のみを移送
                    ブルーベリーから渋みが出すぎるのを防ぐため、ビールと果実を分離することが狙い。
                  </dd>
                  <dt>2021.1.15</dt>
                  <dd>ボトリング その後瓶内発酵・熟成</dd>
                </dl>

                <p class="note mb-30">
                  ※使用したコニャック樽は、フランスのコニャック蒸留所で使用された後、日本へ輸入されたもの。赤ワイン樽は山梨の奥野田ワイナリーより譲り受けた後、ヨロッコブルワリーで数回ビールに使用したもの。アメリカンオーク。
                </p>
                <h6 class="font-weight--bold mb-10">TASTING NOTES</h6>
                <p>
                  黒に近い、濃いルビイ色。果実味溢れるエキス感。心地よく、あとをひく酸。軽やかな凝縮感。そもそもは重めのビールだったが、木樽内での野生酵母（ブレタノマイセス）による発酵により、残糖分はかなり発酵されており、そこに発泡（ガス感）も加わることで、軽めの赤ワインのような楽しみ方ができるビールになっている。
                </p>
              </div>

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
import Header from '~/components/Header.vue'

export default defineComponent({})
</script>


Header
