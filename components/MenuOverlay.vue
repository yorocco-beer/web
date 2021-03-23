<template>
  <div class="mobile-menu-overlay" id="mobile-menu-overlay">
    <div class="mobile-menu-overlay__inner">
      <div class="mobile-menu-close-box text-left">
        <span
          @click="onCloseMenu"
          class="mobile-navigation-close-icon"
          id="mobile-menu-close-trigger"
        >
          <i class="icon-cross2"></i
        ></span>
      </div>

      <div class="mobile-menu-overlay__body">
        <nav class="offcanvas-navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <NuxtLink to="/beers"><span>BEERS</span></NuxtLink>
            </li>
            <li>
              <a href="https://yorocco-beer.stores.jp/" target="_blank"
                ><span>ONLINE SHOP</span></a
              >
            </li>
            <li>
              <a href="https://yorocco-beer.blogspot.com/" target="_blank"
                ><span>BLOG</span></a
              >
            </li>
            <li>
              <a
                href="https://yorocco-beer.blogspot.com/2020/09/blog-post.html"
                target="_blank"
                ><span>SHOP LIST</span></a
              >
            </li>
          </ul>
        </nav>

        <div class="mobile-menu-social-share section-space--mt_60">
          <h6>SNS</h6>
          <ul class="social-share">
            <li>
              <a href="https://www.facebook.com/yoroccobeer" target="_blank"
                ><i class="social social_facebook"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/yorocco_beer/" target="_blank"
                ><i class="social social_instagram"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const onCloseMenu = (e: Event) => {
      e.preventDefault()
      const menuOverlay = document.getElementById('mobile-menu-overlay')
      if (menuOverlay) {
        menuOverlay.classList.toggle('active')
      }
      document.body.classList.toggle('no-overflow')
    }
    return { onCloseMenu }
  },
})
</script>
