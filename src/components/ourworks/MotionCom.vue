<template>
  <NavBarCom />
  <div v-if="loading">
    <div>
      <PageLoader />
    </div>
  </div>
  <div class="container motions">
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
            <strong>motion</strong>
          </h1>
          <div style="width: 100%">
            <p class="fw-bold text-center">
              فيديو الموشن جرافيك عبارة عن وسيلة سحرية تستطيع من خلالها توصيل
              فكرة مقالاتك أو كتاباتك وخصوصًا منتجاتك إلى جميع عملائك بشكل سريع
              جداً ومفهوم ، وتتضمن فيديوهات طولية و عرضية بالاضافة الي التصاميم
              المتحركة.
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
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
            data-aos-once="1"
          >
            <div
              class="card border-0 motions_ifram"
              style="width: 100%; background-color: #f3f3f3"
            >
              <div class="text-center" style="cursor: pointer">
                <iframe
                  :src="item.link"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div>
                  <br />
                </div>
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
    let result = await axios.get(`https://admin.growth-tech.co/api/motions`);
    if (result.status == 200) {
      this.cats = result.data.cats;
      this.products = result.data.motions;
    }
    this.loading = false;
  },
};
</script>
<style>
/************************************scrollbar**********************************/
.motions ::-webkit-scrollbar {
  height: 5px;
  background-color: #421a1a;
}
/* Track */
.motions ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.motions ::-webkit-scrollbar-thumb {
  background: #ef4823;
  transition: all 1s ease-in-out;
}

/* Handle on hover */
.motions ::-webkit-scrollbar-thumb:hover {
  background: #ef482341;
}
/*********************************button product css الاقسام********************************* */
.motions .bttn {
  position: relative;
  display: inline-block;
  /* margin: 15px;
    padding: 12px 27px; */
  text-align: center;
  font-size: 16px;
  /* letter-spacing: 1px; */
  text-decoration: none;
  color: #999999;
  background: #ffffff;
  border: 3px solid #999999;
  cursor: pointer;
  transition: ease-out 0.5s;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
}
.motions .bttn.btn-border-3::after,
.bttn.btn-border-3::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  transition: 0.5s;
}

.motions .bttn.btn-border-3::after {
  top: -9px;
  left: -9px;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

.motions .bttn.btn-border-3::before {
  bottom: -9px;
  right: -9px;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

.motions .bttn.btn-border-3:hover {
  color: #1f1e1e;
  border: transparent;
}

.motions .bttn.btn-border-3:hover::after,
.bttn.btn-border-3:hover::before {
  width: 30px;
  height: 30px;
  border-color: #ef4823;
}
.motions .filter-button {
  text-transform: uppercase;
  margin: 6px 6px;
  width: 20%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
}
/*******************************************/

.motions.item {
  margin-bottom: 2%; /* (100-32*3)/2 */
}

/***********************card style*******************************/
.motions {
  direction: rtl;
  color: #1f1e1e;
}

.motions .containerr {
  padding: 1em 0;
  float: left;
  width: 50%;
}
/* mobile */
@media screen and (max-width: 640px) {
  .motions .containerr {
    display: block;
    width: 100%;
  }
  .motions .filter-button {
    text-transform: uppercase;
    margin: 6px 6px;
    width: 172.43px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
  }
  .motions .motions_ifram {
    border-bottom-left-radius: 30px;
    width: 100%;
  }
  .motions .motions_ifram iframe {
    width: 100%;
    height: 250px;
  }
}
/* ipad */
@media screen and (min-width: 768px) {
  .motions .containerr {
    width: 48.33333%;
  }
  .motions .filter-button {
    width: 33%;
  }
  .motions .motions_ifram {
    /* height: 150px; */
    width: 100%;
    /* border-bottom-left-radius: 30px; */
    object-fit: cover;
  }
  .motions .motions_ifram iframe {
    width: 100%;
    height: 150px;
  }
}

/* Large devices (laptops/desktops) */
@media screen and (min-width: 920px) {
  .motions .containerr {
    width: 20%;
  }
  .motions .filter-button {
    width: 15%;
  }
  .motions .motions_ifram {
    height: 220px;
    width: 100%;
    /* border-bottom-right-radius: 30px; */
  }
  .motions .motions_ifram iframe {
    max-width: 100%;
  }
}
@media only screen and (min-width: 1024px) {
  .motions .containerr {
    width: 33.33333%;
  }
  .motions .motions_ifram {
    height: 190px;
    width: 100%;
    background-color: #222222;
  }
  .motions .motions_ifram iframe {
    max-width: 100%;
    height: 190px;
    border-radius: 15px;
  }
}
</style>
