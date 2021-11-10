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
                <li class="breadcrumb-item active">Mood</li>
              </ul>
              <!-- breadcrumb-list end -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-mood-index">
      <div class="c-mood-description">
        “There is nothing better than sharing good food with others.”
      </div>

      <p class="divider">・</p>

      <div class="c-mood-thumbnail">
        <NuxtLink to="/mood/vol8">
          <h1>November.2021</h1>
          <p class="by">Dishes : Ikuyo Segi, Picture : Yumi Saito</p>
          <img
            width="600"
            v-lazy="require('@/assets/img/mood/vol8.jpg')"
            class="img-fluid center"
            alt=""
          />
        </NuxtLink>
      </div>

      <p class="divider">・</p>

      <div class="c-mood-thumbnail">
        <NuxtLink to="/mood/vol7">
          <h1>October.2021</h1>
          <p class="by">Dishes : Ikuyo Segi, Picture : Yumi Saito</p>
          <img
            width="600"
            v-lazy="require('@/assets/img/mood/vol7.jpg')"
            class="img-fluid center"
            alt=""
          />
        </NuxtLink>
      </div>

      <p class="divider">・</p>

      <div class="c-mood-thumbnail">
        <NuxtLink to="/mood/vol6">
          <h1>September.2021</h1>
          <p class="by">Dishes : Ikuyo Segi, Picture : Yumi Saito</p>
          <img
            width="600"
            v-lazy="require('@/assets/img/mood/vol6.jpg')"
            class="img-fluid center"
            alt=""
          />
        </NuxtLink>
      </div>

      <p class="divider">・</p>

      <div class="c-mood-thumbnail">
        <NuxtLink to="/mood/vol5">
          <h1>August.2021</h1>
          <p class="by">Dishes : Ikuyo Segi, Picture : Yumi Saito</p>
          <img
            width="600"
            v-lazy="require('@/assets/img/mood/vol5.jpg')"
            class="img-fluid center"
            alt=""
          />
        </NuxtLink>
      </div>

      <p class="divider">・</p>

      <div class="c-mood-thumbnail">
        <NuxtLink to="/mood/vol4">
          <h1>July.2021</h1>
          <p class="by">Dishes : Ikuyo Segi, Picture : Yumi Saito</p>
          <img
            width="600"
            v-lazy="require('@/assets/img/mood/vol4.jpg')"
            class="img-fluid center"
            alt=""
          />
        </NuxtLink>
      </div>

      <p class="divider">・</p>

      <div class="c-mood-thumbnail">
        <NuxtLink to="/mood/vol3">
          <h1>June.2021</h1>
          <p class="by">Dishes : Ikuyo Segi, Picture : Yumi Saito</p>
          <img
            width="600"
            v-lazy="require('@/assets/img/mood/vol3.jpg')"
            class="img-fluid center"
            alt=""
          />
        </NuxtLink>
      </div>

      <p class="divider">・</p>

      <div class="c-mood-thumbnail">
        <NuxtLink to="/mood/vol2">
          <h1>May.2021</h1>
          <p class="by">Dishes : Ikuyo Segi, Picture : Yumi Saito</p>
          <img
            width="600"
            v-lazy="require('@/assets/img/mood/vol2.jpg')"
            class="img-fluid center"
            alt=""
          />
        </NuxtLink>
      </div>

      <p class="divider">・</p>

      <div class="c-mood-thumbnail">
        <NuxtLink to="/mood/vol1">
          <h1>April.2021</h1>
          <p class="by">Dishes : Ikuyo Segi, Picture : Yumi Saito</p>
          <img
            width="600"
            v-lazy="require('@/assets/img/mood/vol1.jpg')"
            class="img-fluid center"
            alt=""
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  head: {
    title: 'ヨロッコビール / Yorocco Beer : Mood',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol1/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ヨロッコビール / Yorocco Beer : Mood',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Current Mood.Nothing better than sharing good food with others.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/ogp/mood/vol1.jpg`,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '' },
    ],
  },
})
</script>
