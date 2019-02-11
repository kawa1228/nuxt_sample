<template>
  <div>
    <h2>ログインページ</h2>
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
import Cookies from "universal-cookie";

export default {
  methods: {
    login() {
      const cookies = new Cookies();
      cookies.set("credential", "true", { maxAge: 90 });
      this.$router.push("/");
    }
  }
};
</script>
