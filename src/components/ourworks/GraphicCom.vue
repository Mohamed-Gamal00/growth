<template>
  <NavBarCom />
  <div v-if="loading">
    <div>
      <PageLoader />
    </div>
  </div>
  <div class="container graphics">
    <div class="container pt-lg-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <h1
            class="text-end text-lg-center background backgroundcenter fw-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            data-aos-once="false"
          >
            <strong> جرافيك </strong>
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
    <div class="filters text-center mb-3">
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
          @click="filterArticle(cat)"
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
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
            data-aos-once="1"
          >
            <div class="card border-0 graphics_img">
              <div class="images" v-viewer>
                <img
                  :src="item.image"
                  alt="img"
                  height="200"
                  style="width: 100%"
                />
              </div>
            </div>
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
  name: "GraphicCom",
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
    filterArticle(cat) {
      this.filteredCat = cat.id;
    },
    showAll() {
      this.filteredCat = null;
    },
  },
  computed: {
    filterapps() {
      const data = this.filteredCat
        ? this.products.filter((item) => item.cat_id === this.filteredCat)
        : this.products;
      return data;
    },
  },
  async mounted() {
    this.loading = true;
    let result = await axios.get(`https://admin.growth-tech.co/api/graphics`);
    if (result.status == 200) {
      this.cats = result.data.cats;
      this.products = result.data.graphics;
    }
    this.loading = false;
  },
};
</script>
<style>
/************************************scrollbar**********************************/
.graphics ::-webkit-scrollbar {
  height: 5px;
  background-color: #421a1a;
}
.graphics ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.graphics ::-webkit-scrollbar-thumb {
  background: #ef4823;
  transition: all 1s ease-in-out;
}

.graphics ::-webkit-scrollbar-thumb:hover {
  background: #8e8f8f;
}
/*********************************button product css الاقسام********************************* */
.graphics .bttn {
  position: relative;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  color: #999999;
  background: #ffffff;
  border: 3px solid #999999;
  /* cursor: pointer; */
  transition: ease-out 0.5s;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
}
.graphics .bttn.btn-border-3::after,
.bttn.btn-border-3::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  transition: 0.5s;
}

.graphics .bttn.btn-border-3::after {
  top: -9px;
  left: -9px;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

.graphics .bttn.btn-border-3::before {
  bottom: -9px;
  right: -9px;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

.graphics .bttn.btn-border-3:hover {
  color: #1f1e1e;
  border: transparent;
}

.graphics .bttn.btn-border-3:hover::after,
.bttn.btn-border-3:hover::before {
  width: 30px;
  height: 30px;
  border-color: #ef4823;
}
.graphics .filter-button {
  margin: 6px 6px;
  width: 15%;
  display: table-column-group;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
}
.graphics .graphics_img {
  transition: all 0.5s ease-in-out;
}
.graphics .graphics_img img {
  transition: all 0.3s ease-in-out;
  transform: scale(0.9);
}
.graphics .graphics_img:hover img {
  transform: scale(1);
}

.graphics.item {
  margin-bottom: 2%;
}

/***********************card style*******************************/
.graphics {
  direction: rtl;
  color: #1f1e1e;
}

.graphics .containerr {
  padding: 1em 0;
  float: left;
  width: 50%;
}
/* mobile */
@media screen and (max-width: 640px) {
  .graphics .containerr {
    display: block;
    width: 100%;
  }
  .graphics .graphics_img {
    width: 100%;
    object-fit: cover;
  }
  .graphics .graphics_img img {
    width: 100%;
  }
  .graphics .filter-button {
    margin: 6px 6px;
    width: 60%;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
  }
}
/* ipad */
@media screen and (min-width: 768px) {
  .graphics .containerr {
    width: 48.33333%;
  }
  .graphics .graphics_img {
    width: 100%;
    object-fit: cover;
  }
  .graphics .graphics_img img {
    width: 100%;
    height: 150px;
  }
  .graphics .filter-button {
    margin: 6px 6px;
    width: 20%;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 920px) {
  .graphics .containerr {
    width: 33.33333%;
  }
  .graphics .graphics_img {
    height: 220px;
    width: 100%;
  }
  .graphics .graphics_img img {
    max-width: 100%;
  }
  .graphics .filter-button {
    margin: 6px 6px;
    width: 15%;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 1024px) {
  .graphics .containerr {
    width: 33.33333%;
  }
  .graphics .graphics_img {
    height: 200px;
    width: 100%;
  }
  .graphics .graphics_img img {
    max-width: 100%;
    height: 200px;
  }
}
</style>
