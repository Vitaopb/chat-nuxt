<template>
  <v-app dark>
    <div class="container-img">
      <div class="background">
        <Nuxt />
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>

<style>
.container-img {
  background-image: url("../static/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: 0px;
}

.background {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    75deg,
    rgb(40, 43, 54) 0%,
    rgb(40, 43, 54) 50%,
    rgba(40, 43, 54, 0.8) 100%
  );
}
</style>
