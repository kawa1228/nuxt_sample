<template>
  <div>
    <span>default layout</span>
    <AppNavigation/>
    <p>
      <nuxt-link to="/">トップへ戻る</nuxt-link>
    </p>
    <hr>
    <nuxt/>
    <hr>
    <footer>footer</footer>
  </div>
</template>

<script>
import AppNavigation from "~/components/AppNavigation.vue";
export default {
  components: {
    AppNavigation
  }
};
</script>
