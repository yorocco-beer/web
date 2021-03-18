<template>
  <div class="header-area header-area--default bg-white">
    <!-- Header Bottom Wrap Start -->
    <header class="header-area header-sticky">
      <div class="container-fluid container-fluid--cp-100">
        <div class="row">
          <div class="col-lg-12 d-none d-md-block">
            <div class="top-logo-area">
              <div class="logo text-md-center">
                <a href="index.html"
                  ><img src="@/assets/images/logo.svg" width="180px" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-center pt-3 pb-3">
          <div class="col-lg-3 col-lg-3 col-6">
            <div
              class="header-right-items content__hidden d-none d-md-block"
            ></div>
            <div class="logo__hidden text-left">
              <a href="#"><img src="@/assets/images/logo.svg" alt="" /></a>
            </div>
          </div>

          <div class="col-lg-6 col-lg-6 d-none d-lg-block">
            <!-- navigation menu -->
            <div class="header__navigation d-none d-lg-block">
              <nav class="navigation-menu">
                <ul class="justify-content-center">
                  <li class="has-children has-children--multilevel-submenu">
                    <a href="#"><span>Beers</span></a>
                  </li>
                  <li class="has-children">
                    <a href="#"><span>OnLine Shop</span></a>
                  </li>
                  <!-- <li class="has-children has-children--multilevel-submenu">
                    <a href="#"><span>Pages</span></a>
                  </li>
                  <li class="has-children has-children--multilevel-submenu">
                    <a href="#"><span>Blog</span></a>
                  </li> -->
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
                >
                  <i class="icon-menu"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Header Bottom Wrap End -->
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
