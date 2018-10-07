<template>
  <div>
    <p>Page id: <span>{{ page.id }}</span></p>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    let page = await app.$wp
      .pages()
      .id(2)
      .get();

    return {
      page: page
    };
  }
};
</script>
