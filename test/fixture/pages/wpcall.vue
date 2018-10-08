<template>
  <div>
    <p>Page id: <span>{{ page.id }}</span></p>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    let page = await app.$wp
      .pages()
      .slug("sample-page")
      .get();

    return {
      page: page[0]
    };
  }
};
</script>
