<template>
  <div
    class="container partners"
    data-aos="zoom-in"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="600"
  >
    <swiper
      :slidesPerView="1"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :spaceBetween="30"
      :slidesPerGroup="1"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
    >
      <swiper-slide v-for="partner in partners" :key="partner">
        <div class="card our-partners" style="width: 18rem; border: none">
          <div class="text-center pic">
            <img
              :src="partner.image"
              width="100"
              height="100"
              class="rounded-circle"
            />
          </div>
          <h3 class="title">{{ partner.name }}</h3>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Autoplay } from "swiper/core";
SwiperCore.use([Autoplay]);

import axios from "axios";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  name: "PrtnersCom",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      partners: [],
    };
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  async mounted() {
    let result = await axios
      .get(`https://backend.sigma-tech.agency/api/partners`)
      .catch(() => this.$router.push({ path: "/servererror" }));
    if (result.status == 200) {
      this.partners = result.data.partners;
    }
  },
};
</script>

<style>
.partners .swiper {
  width: 100%;
  height: 100%;
}

.partners .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  height: 250px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.partners .swiper-slide img {
  object-fit: contain;
}

.partners .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.partners .swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}
.our-partners {
  /* padding: 1.2rem 0.75rem;
    background: #fff;
    border-radius: 1rem;
    text-align: center;
    border: 0.5px solid #60c5a8;
    box-shadow: rgba(0, 0, 0, 0.185) 0px 2px 10px 0px,
      rgba(0, 0, 0, 0.151) 0px 2px 25px 0px; */
}
.our-partners .pic {
  display: inline-block;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
}
.our-partners .pic img {
  object-fit: contain;
}
.our-partners .title {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  color: #008ab8;
  margin: 0 0 7px 0;
}
</style>
