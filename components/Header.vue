<template>
  <div class="header-area header-area--default">
    <!-- Header Bottom Wrap Start -->
    <header
      class="header-area header-sticky container-fluid"
      :class="{ 'is-sticky': isSticky }"
      ref="sticky"
    >
      <div class="row">
        <div class="col-lg-12 d-none d-md-block">
          <div class="top-logo-area">
            <div class="logo text-md-center">
              <a href="/"
                ><img src="@/assets/img/logo.png" width="180px" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-3 col-lg-3 col-6">
          <div
            class="header-right-items content__hidden d-none d-md-block"
          ></div>
          <div class="logo__hidden text-left">
            <a class="d-block" href="/"
              ><img src="@/assets/img/logo.svg" width="120px" alt=""
            /></a>
          </div>
        </div>

        <div class="col-lg-6 col-lg-6 d-none d-lg-block">
          <!-- navigation menu -->
          <div class="header__navigation d-none d-lg-block">
            <nav class="navigation-menu">
              <ul class="justify-content-center">
                <li>
                  <NuxtLink to="/beers"><span>BEERS</span></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/mood/vol1"><span>MOOD</span></NuxtLink>
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
          </div>
        </div>
        <div class="col-lg-3 col-lg-3 col-6">
          <div class="header-right-side text-right">
            <div class="header-right-items">
              <a
                href="#"
                class="mobile-navigation-icon"
                id="mobile-menu-trigger"
                @click="onOpenMenu"
              >
                <i class="icon-menu"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Header Bottom Wrap End -->
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const sticky = ref<HTMLDivElement>()
    const isSticky = ref(false)
    onMounted(() => {
      window.addEventListener('scroll', (ev) => {
        var scroll = window.scrollY
        const headerHeight = sticky.value?.clientHeight
          ? sticky.value?.clientHeight
          : 0
        if (window.innerWidth >= 320) {
          if (scroll < headerHeight) {
            isSticky.value = false
          } else {
            isSticky.value = true
          }
        }
      })
    })
    const onOpenMenu = (e: Event) => {
      e.preventDefault()
      const menuOverlay = document.getElementById('mobile-menu-overlay')
      if (menuOverlay) {
        menuOverlay.classList.toggle('active')
      }
      document.body.classList.toggle('no-overflow')
    }

    // $("#mobile-menu-close-trigger").on('click', function(){
    //     $("#mobile-menu-overlay").removeClass("active");
    //     $body.removeClass('no-overflow');
    // });
    return {
      onOpenMenu,
      isSticky,
      sticky,
    }
  },
})
</script>
