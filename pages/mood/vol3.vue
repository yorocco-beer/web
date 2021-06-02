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
                  <NuxtLink to="/mood">Mood</NuxtLink>
                </li>
                <li class="breadcrumb-item active">Vol.3</li>
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
          width="1480"
          height="987"
          v-lazy="require('@/assets/img/mood/vol3.jpg')"
          class="img-fluid center"
          alt=""
        />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="c-mood-content text-center">
              <header class="c-mood-header">
                <h1>海老とアボガドの揚げ春巻き</h1>
                <h2>Spring Roll with shrimps and avocado</h2>
              </header>

              <div class="c-mood-text">
                <p class="divider">・</p>
                <p class="text with-divider">
                  むき海老を包丁であらめに叩く。<br />
                  赤玉葱のみじん切り、アボガドのあらみじん切りと合わせる。<br />
                  塩、少しのきび砂糖、ナンプラーで味付ける。<br />
                  春巻きの皮にのせ細く長く巻く。<br />
                  170°Cくらいの油でカリッと揚げる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>砂肝とズッキーニのナムル</h1>
                  <h2>Giblets and Zucchini Namul</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  砂肝は硬い部分を取り除き、切れ込みを入れる。<br />
                  塩、少しのきび砂糖で下味。 多めの油で焼く。<br />
                  ズッキーニと人参はそれぞれ薄く、細く切り、
                  塩をして余分な水分をとる。<br />
                  かたくしぼり、焼いた砂肝と合わせる。<br />
                  塩、豆板醤、生姜、蜂蜜、胡麻油を合わせたタレと手で和える。<br />
                  最後に煎り胡麻で仕上げる。
                </p>

                <header class="c-mood-header with-divider">
                  <h1>豆豉ポテト</h1>
                  <h2>Potate salad with Douchi</h2>
                </header>
                <p class="divider">・</p>
                <p class="text with-divider">
                  じゃがいもを蒸す。<br />
                  皮をむき、つぶす。<br />
                  塩、刻んだ豆豉、胡麻油を加えまぜる。<br />
                  アクセントで歯応えのよい野菜を加えてまぜる。<br />
                  今回は絹さやを茹でで斜め切りしたもの。
                </p>

                <p class="divider">・</p>
                <p class="date">2021.6.2</p>
                <p class="by">
                  Dishes : Ikuyo Segi
                  <br />
                  Picture : Yumi Saito
                </p>
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
    title:
      'ヨロッコビール / Yorocco Beer : Mood : vol.3 海老とアボガドの揚げ春巻き',
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}/mood/vol3/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'ヨロッコビール / Yorocco Beer : Mood : vol.3 海老とアボガドの揚げ春巻き',
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
        content: `${process.env.BASE_URL}/ogp/mood/vol3.jpg`,
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
