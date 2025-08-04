<template>
  <div id="mobile-menu-overlay" class="mobile-menu-overlay">
    <div class="mobile-menu-overlay__inner">
      <div class="mobile-menu-close-box text-left">
        <span
          id="mobile-menu-close-trigger"
          class="mobile-navigation-close-icon"
          @click="onCloseMenu"
        >
          <i class="icon-cross2"></i
        ></span>
      </div>

      <div class="mobile-menu-overlay__body">
        <nav class="offcanvas-navigation">
          <ul>
            <li @click="onCloseMenu">
              <NuxtLink to="/"><span>HOME</span></NuxtLink>
            </li>
            <li @click="onCloseMenu">
              <NuxtLink to="/beers"><span>BEERS</span></NuxtLink>
            </li>
            <li @click="onCloseMenu">
              <NuxtLink to="/mood"><span>MOOD</span></NuxtLink>
            </li>
            <li @click="onCloseMenu">
              <NuxtLink to="/mood-trip"><span>MOOD Trip</span></NuxtLink>
            </li>
            <li @click="onCloseMenu">
              <NuxtLink to="/pub"><span>PUB</span></NuxtLink>
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
              <a href="/careers"><span>CAREERS</span></a>
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
import { defineComponent } from '@vue/composition-api'

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
