<template>
  <!-- hassan -->
  <NavBarCom />
  <div class="articles">
    <div v-if="loading">
      <div>
        <PageLoader />
      </div>
    </div>
    <!-- اخر الاخبار -->
    <div class="container pt-lg-5">
      <!-- text -->
      <div class="row d-flex justify-content-center">
        <div class="col-md-10" style="position: relative">
          <!-- <h2 class="background">Strikethrough title</h2> -->
          <h1
            class="text-end text-lg-center background backgroundcenter fw-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <strong>المدونة</strong>
          </h1>
          <!-- <p class="fw-bold">
            هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم
            في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص
            الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من
            الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع
            شكلي
          </p> -->
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div
            class="containerr p-lg-3"
            v-for="article in articles"
            :key="article"
          >
            <router-link
              class="text-decoration-none"
              :to="{ name: 'article', params: { id: article.id } }"
            >
              <div
                class="card articles_card"
                style="width: 100%; color: #1f1e1e"
              >
                <div class="text-center img_card">
                  <img :src="article.image" alt="img" />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold">
                    <strong>{{ article.title }}</strong>
                  </h5>
                  <p class="card-text fw-bold">{{ article.date }}</p>
                  <!-- <router-link to="article/{{ article.id }}">المزيد</router-link> -->
                  <router-link
                    :to="{ name: 'article', params: { id: article.id } }"
                    >عرض المزيد</router-link
                  >
                  <!-- <a href="#" class="btn btn-link fw-bold m-0 p-0">عرض المزيد</a> -->
                </div>
              </div>
            </router-link>
          </div>
          <br />
        </div>
      </div>
      <!-- pagination -->
      <div class="container mt-5">
        <div class="row mt-3 d-flex justify-content-center">
          <div class="col-md-10 d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination p-0">
                <li
                  class="page-item"
                  v-for="link in pagination.links"
                  :key="link"
                  v-bind:class="[
                    { disabled: !link.url },
                    { active: link.active },
                  ]"
                >
                  <span
                    class="page-link"
                    v-html="link.label"
                    @click="fetcharticles(link.url)"
                  ></span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- تثبيت الفوتر لتحت -->
  <div style="position: relative; bottom: -55px; right: 0; left: 0">
    <FooterCom />
  </div>
</template>
<script>
import PageLoader from "@/components/pageloader/PageLoder.vue";

import axios from "axios";
import NavBarCom from "@/components/navbar/NavBar.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "ArticlesCom",
  components: {
    PageLoader,
    NavBarCom,
    FooterCom,
  },
  data() {
    return {
      loading: false,

      // اخر الاخبار
      articles: [],
      pagination: {},
    };
  },
  async mounted() {
    this.fetcharticles();
  },
  methods: {
    async fetcharticles(page_url) {
      page_url = page_url || `https://admin.growth-tech.co/api/articles`;
      this.loading = true;
      let result = await axios
        .get(page_url)
        .catch(() => this.$router.push({ path: "/servererror" }));
      if (result.status == 200) {
        this.articles = result.data.data;
        this.makePagination(result.data.meta);
      }
      this.loading = false;
    },

    async makePagination(meta) {
      let pagination = {
        links: meta.links,
      };
      this.pagination = pagination;
    },
  },
};
</script>
<style scoped>
.articles {
  direction: rtl;
  color: #1f1e1e;
}
.articles .articles_card {
  border: 0px;
  transition: all 0.3s ease-in-out;
  transform: scale(0.98);
}
.articles .articles_card:hover {
  border: 0px;
  box-shadow: 0 3px 6px rgba(0, 138, 184, 0.342),
    0 3px 6px rgba(0, 138, 184, 0.301);
  transform: scale(1);
}
.articles .containerr {
  padding: 1em 0;
  float: right;
  padding: 2px;
  margin-top: 5px;
}
/* mobile */
@media screen and (max-width: 640px) {
  .articles .containerr {
    width: 100%;
  }
  .articles .articles_card {
    width: 100%;
    object-fit: cover;
  }
  .articles .articles_card img {
    width: 100%;
    height: 180px;
  }
}
/* ipad */
@media screen and (min-width: 768px) {
  .articles .containerr {
    width: 48.33333%;
  }
  .articles .articles_card img {
    width: 100%;
    height: 150px;
  }
}
@media only screen and (min-width: 1024px) {
  .articles .containerr {
    width: 33.33333%;
    height: 410px;
  }
  .articles .articles_card .img_card {
    height: 250px;
  }
  .articles .articles_card img {
    max-width: 100%;
    height: 250px;
    padding: 2px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}
</style>
