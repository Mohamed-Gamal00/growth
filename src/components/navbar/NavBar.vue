<template>
  <!-- Navbar & Hero Start -->
  <div class="style sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img
            src="@/assets/new_img/color-2.png"
            width="100"
            height="40"
            alt="img"
          />
        </router-link>
        <span
          style="background-color: #ef4823; color: white"
          class="navbar-toggler p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span class="p-2"><FontAwesome icon="caret-down" /></span> -->
          <span class="navbar-toggler-icon"></span>
        </span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav nav mx-auto mb-2 mb-lg-0 p-0">
            <router-link
              class="m-2 ms-lg-4 me-lg-4"
              :to="{ name: 'home' }"
              exact
              ><span class="fw-bold">الرئيسة</span></router-link
            >

            <router-link class="m-2 ms-lg-4 me-lg-4" :to="{ name: 'ourwork' }"
              ><span class="fw-bold">اعمالنا</span></router-link
            >

            <router-link class="m-2 ms-lg-4 me-lg-4" to="/products"
              ><span class="fw-bold">منتجاتنا</span></router-link
            >
            <router-link class="m-2 ms-lg-4 me-lg-4" to="/articles"
              ><span class="fw-bold">المدونة</span></router-link
            >

            <router-link class="m-2 ms-lg-4 me-lg-4" to="/about"
              ><span class="fw-bold">من نحن</span></router-link
            >
          </div>
          <router-link class="m-2 border-0" :to="{ name: 'ordernow' }" exact>
            <span
              style="background-color: #ef4823; height: 43px"
              class="btn border-0 text-light fw-bold rounded-pill py-2 px-4"
              >اطلب الان</span
            >
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBarCom",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.style {
  direction: rtl;
}

.nav a {
  text-decoration: none;
  color: #353536;
  font-weight: 900;
}
.nav a:hover {
  color: #f53105;
}
.router-link-exact-active a {
  border-bottom: 3px solid #ef4823;
  padding: 5px;
  color: #ef4823;
}
.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: rgb(203 21 21 / 55%);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
</style>
