<template>
  <NavBarCom />

  <div class="container services">
    <div v-if="loading">
      <div>
        <PageLoader />
      </div>
    </div>
    <!-- text -->
    <div class="container pt-lg-5">
      <div class="row d-flex justify-content-center">
        <!-- text -->
        <div class="col-md-10">
          <h1
            class="text-end text-lg-center background backgroundcenter fw-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            data-aos-once="false"
          >
            <strong> التطبيقات والمواقع </strong>
          </h1>
          <div style="width: 100%">
            <p class="fw-bold text-center">
              نساعدك في تحقيق أهدافك والمساهمة في جعل فكرتك حية على أرض الواقع،
              بتقديم خدمات تقنية وتسويقية احترافية.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- FILTER BUTTONS -->
    <div class="filters text-center mb-3">
      <!-- SHOW ALL BUTTON -->
      <!-- FILTER BUTTONS -->
      <div class="p-3" style="overflow: auto; white-space: nowrap">
        <button
          class="filter-button nav-link fw-bold bttn btn-border-3"
          @click="showAll()"
        >
          الكل
        </button>
        <button
          class="filter-button nav-link fw-bold bttn btn-border-3"
          v-for="(cat, index) in cats"
          :key="index"
          @click="filterApps(cat)"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>
    <!-- products -->
    <div class="row d-flex justify-content-center">
      <!-- text -->
      <div class="col-md-10">
        <div class="row justify-content-start">
          <div
            class="col-lg-3 containerr col-md-6 p-3"
            v-for="item in filterapps"
            :key="item.id"
            data-aos="zoom-in"
            :data-aos-delay="100 + i * 10"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
            data-aos-once="1"
          >
            <router-link
              class="text-decoration-none"
              :to="{ name: 'app', params: { id: item.id } }"
            >
              <div
                class="card border-0 services_img"
                style="width: 100%; background-color: #f3f3f3"
              >
                <div class="text-center">
                  <img
                    :src="item.image"
                    alt="img"
                    height="200"
                    style="width: 100%"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold">
                    <strong>{{ item.title }}</strong>
                  </h5>
                  <!-- description-->
                  <!-- <p class="text-dark" v-html="item.desc"></p> -->
                </div>
                <div class="d-flex justify-content-between">
                  <button class="ordernow fw-bold">عرض المزيد</button>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterCom />
</template>
<script>
import PageLoader from "@/components/pageloader/PageLoder.vue";
import NavBarCom from "@/components/navbar/NavBar.vue";
import axios from "axios";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "AppsCom",
  components: { NavBarCom, FooterCom, PageLoader },
  data() {
    return {
      loading: false,
      filteredCat: null,
      cats: [],
      products: [],
    };
  },
  methods: {
    filterApps(cat) {
      // Set filteredCat data to
      // selected product's name
      this.filteredCat = cat.id;
    },
    // set filteredCat data to null
    showAll() {
      this.filteredCat = null;
    },
  },
  computed: {
    // When filteredCat data changed
    // filterapps computed property will
    // automatically create new data model
    // by filtering out unmatched products
    filterapps() {
      // If filteredCat is equal to null
      // display all data
      const data = this.filteredCat
        ? this.products.filter((item) => item.cat_id === this.filteredCat)
        : this.products;
      return data;
    },
  },
  async mounted() {
    this.loading = true;
    let result = await axios.get(`https://admin.growth-tech.co/api/apps`);
    if (result.status == 200) {
      this.cats = result.data.cats;
      this.products = result.data.apps;
    }
    this.loading = false;
  },
};
</script>
<style>
.services ::-webkit-scrollbar {
  height: 5px;
  background-color: #421a1a;
}
.services ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.services ::-webkit-scrollbar-thumb {
  background: #ef4823;
  transition: all 1s ease-in-out;
}

.services ::-webkit-scrollbar-thumb:hover {
  background: #ef482349;
}
.services .bttn {
  position: relative;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  color: #999999;
  background: #ef4823;
  border: 3px solid #999999;
  cursor: pointer;
  transition: ease-out 0.5s;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
}
.services .bttn.btn-border-3::after,
.bttn.btn-border-3::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  transition: 0.5s;
}

.services .bttn.btn-border-3::after {
  top: -9px;
  left: -9px;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

.services .bttn.btn-border-3::before {
  bottom: -9px;
  right: -9px;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

.services .bttn.btn-border-3:hover {
  color: #1f1e1e;
  border: transparent;
}

.services .bttn.btn-border-3:hover::after,
.bttn.btn-border-3:hover::before {
  width: 30px;
  height: 30px;
  border-color: #ef4823;
}
.services .filter-button {
  text-transform: uppercase;
  margin: 6px 6px;
  width: 130.43px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
}

.services.item {
  margin-bottom: 2%;
}

.services {
  direction: rtl;
  color: #1f1e1e;
}
.services .ordernow {
  width: 50%;
  height: 40px;
  border: 1px solid #ef4823;
  border-bottom-right-radius: 20px;
  background-color: #ef4823;
  color: #1a1615;
  transition: all 0.3s ease-in-out;
}
.services .containerr {
  padding: 1em 0;
  float: left;
  width: 50%;
}
@media screen and (max-width: 640px) {
  .services .containerr {
    display: block;
    width: 100%;
  }
  .services .services_img {
    border-bottom-left-radius: 30px;
    width: 100%;

    object-fit: cover;
  }
  .services .services_img img {
    width: 100%;
  }
}
/* ipad */
@media screen and (min-width: 768px) {
  .services .containerr {
    width: 48.33333%;
  }
  .services .services_img {
    width: 100%;
    border-bottom-left-radius: 30px;
    object-fit: cover;
  }
  .services .services_img img {
    width: 100%;
    height: 150px;
  }
}

@media screen and (min-width: 920px) {
  .services .containerr {
    width: 33.33333%;
  }
  .services .services_img {
    height: 220px;
    width: 100%;
    border-bottom-right-radius: 30px;
  }
  .services .services_img img {
    max-width: 100%;
  }
}
@media only screen and (min-width: 1024px) {
  .services .containerr {
    width: 33.33333%;
  }
  .services .services_img {
    height: 365px;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #222222;
  }
  .services .services_img img {
    max-width: 100%;
    height: 200px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
}
</style>
