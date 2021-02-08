<template>
  <section class="container">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="`/blog/${post.sys.id}`">{{
          post.fields.title
        }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  async asyncData({ payload }) {
    // 記事一覧を取得
    const entries = await client.getEntries({
      content_type: process.env.CTFL_CONTENT_TYPE_POST,
    })
    return {
      posts: entries.items,
    }
  },
}
</script>
