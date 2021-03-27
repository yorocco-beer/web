<template>
  <div class="footer-area-wrapper">
    <div class="footer-copyright-area border-top section-space--ptb_30">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 order-md-1 order-1">
            <span class="copyright-text text-center text-md-left"
              >© 2021 Yorocco Beer.
              <a href="" target="_blank">All Rights Reserved.</a></span
            >
          </div>

          <div class="col-lg-6 col-md-6 order-md-2 order-2">
            <div class="footer-bottom-social">
              <ul class="list footer-social-networks">
                <li class="item">
                  <a
                    href="https://www.facebook.com/yoroccobeer"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <i class="social social_facebook"></i>
                  </a>
                </li>
                <li class="item">
                  <a
                    href="https://www.instagram.com/yorocco_beer/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <i class="social social_instagram"></i>
                  </a>
                </li>
              </ul>
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
