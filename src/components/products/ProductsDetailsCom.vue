<template>
  <NavBarCom />
  <div v-if="loading">
    <div>
      <PageLoader />
    </div>
  </div>
  <!-- text and image -->
  <div class="container mt-5 details">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="row align-items-center justify-content-between mb-2">
          <!-- text -->
          <div
            class="col-lg-6 mb-4 fw-bold align-middle text-center text-lg-end"
            style="height: 300px"
          >
            <div class="card border-0" style="width: 100%">
              <div class="card-body">
                <h1
                  class="card-title mt-0 mb-4 fw-bold"
                  style="font-weight: 900 !important"
                >
                  {{ product.title }}
                </h1>
                <div
                  class="p-2"
                  v-html="product.ads"
                  style="overflow: hidden; overflow-y: scroll; height: 180px"
                ></div>
              </div>
              <div class="text-start">
                <router-link
                  class="ordernow text-white text-decoration-none"
                  :to="{ name: 'ordernow' }"
                >
                  <button
                    type="button"
                    class="btn"
                    style="background-color: #ef4823; width: 50%"
                  >
                    <!-- اطلب الان -->
                    اطلب الان
                  </button>
                </router-link>
                <span class="ms-5 fw-bold" style="font-weight: 900 !important">
                  {{ product.price }} $</span
                >
              </div>
            </div>
          </div>
          <!-- img -->
          <div class="col-lg-6 text-center text-lg-start">
            <img
              class="img-fluid rounded-3"
              style="width: 100%; height: 300px"
              :src="product.image"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- v-html -->
  <div class="container mt-5 details" style="direction: rtl">
    <!-- <div class="row">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-6">
            <div class="col-md-6 bg-danger" v-html="product.desc"></div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="container container mb-5 pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="row mb-2">
            <div style="direction: rtl">
              <div v-html="product.desc"></div>
            </div>
          </div>
          <!-- <h1>post article {{ id }}</h1> -->
        </div>
      </div>
    </div>
  </div>

  <FooterCom />
</template>
<script>
import PageLoader from "@/components/pageloader/PageLoder.vue";
import axios from "axios";
import NavBarCom from "@/components/navbar/NavBar.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "ProductDetailsCom",
  components: {
    NavBarCom,
    PageLoader,
    FooterCom,
  },
  data() {
    return {
      loading: false,
      id: this.$route.params.id,
      product: [],
    };
  },
  async mounted() {
    this.loading = true;
    let result = await axios
      .get(`https://admin.growth-tech.co/api/product/${this.id}`)
      .catch(() => this.$router.push({ path: "/servererror" }));
    if (result.status == 200) {
      this.product = result.data.product;
    }
    this.loading = false;
  },
};
</script>
<style>
.details .container-fluid {
  width: 100% !important;
}
.details ::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ef4823;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ef482356;
}
</style>
