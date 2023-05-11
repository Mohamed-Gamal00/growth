<template>
  <NavBarCom />
  <div v-if="loading">
    <div>
      <PageLoader />
    </div>
  </div>
  <div class="home mt-4" style="direction: rtl" id="home">
    <!-- text and image -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="row align-items-center justify-content-between mb-2">
            <div class="col-lg-5 fw-bold align-middle text-center text-lg-end">
              <h1
                class="mb-4 font_h1 fw-bold"
                style="font-weight: 900 !important"
              >
                جروث تك رائدين في تصميم المواقع والتسويق الالكتروني
              </h1>
              <p class="pb-3" style="color: #1f1e1e">
                هل تريد أن تنجح في عالم الأعمال الرقمي؟ تبحث عن زيادة في
                المبيعات؟ ترغب في الوصول لمزيد من العملاء؟ نحن شركة نمو التقنية
                نقدم لك كل ما تحتاجه لتحقق أهدافك.<strong>
                  تصميم المواقع، انشاء تطبيقات الجوال، انشاء متاجر
                  الكترونية</strong
                >
                بتجربة مستخدم احترافية، مع تهيئة لتحسين الظهور في محركات البحث.
                نقدم خدمات التسويق الالكتروني المتكاملة فريقنا المحترف والمتخصص
                يعمل بجد لتحويل أفكارك إلى حقيقة ويضمن لك الوصول لجمهورك
                المستهدف بطرق فعالة ومبتكرة. اتصل بنا الآن واحصل على الخدمات
                التقنية والبرمجية والتسويقية التي تحتاجها لتحقيق نجاحك على
                الإنترنت والوصول لأهدافك العملية.
              </p>
              <a
                href="#contact_us"
                aria-label="contact"
                style="background-color: #ef4823"
                class="btn fw-bold mb-4 text-light rounded-pill border-2 py-3 px-5"
                >تواصل معنا</a
              >
            </div>
            <div class="col-lg-6 text-center mt-sm-4 text-lg-start">
              <img
                class="img-fluid"
                v-lazy="Gback"
                height="516"
                width="451"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- text & image خطة عملنا -->
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      class="container-fluid mt-lg-5 pt-lg-4"
      style="background-color: #f8faff"
    >
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <span class="ms-3"
              ><img v-lazy="arrow" width="60" height="60" alt="img" />
            </span>
            <span class="fs-4 fw-bold" style="font-weight: 900 !important">
              خطة عملنا
            </span>
            <div class="mt-lg-4 our_plane">
              <div class="box" v-for="plan in plans" :key="plan.id">
                <img
                  :src="plan.image"
                  alt="service"
                  width="100"
                  height="100"
                  class="service-img rounded-circle"
                />
                <h6 class="mt-lg-3 fw-bold">{{ plan.name }}</h6>
              </div>
            </div>
          </div>
        </div>
        <!-- text image -->
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div
              class="row d-flex justify-content-around align-items-center g-0 position-relative"
            >
              <div class="col-md-5 align-content-center mb-md-">
                <div class="text-center">
                  <img
                    class="img-fluid rounded-2"
                    v-lazy="plan"
                    height="327"
                    width="327"
                    alt="img"
                  />
                </div>
              </div>
              <div class="col-md-5 ps-md-0" style="box-sizing: content-box">
                <p class="fs-4 fw-bold">مؤسسة نمو التقنية</p>
                <ul class="p-0">
                  <li class="mt-3">فريق محترف ومتميز</li>
                  <li class="mt-3">
                    جودة عالية في تصميم وتطوير الحلول التقنية.
                  </li>
                  <li class="mt-3">أكواد برمجية عالية الجودة</li>
                  <li class="mt-3">
                    حماية متكاملة للمواقع والمتاجر والتطبيقات
                  </li>
                  <li class="mt-3">أسعار تنافسية</li>
                  <li class="mt-3">الالتزام بمواعيد تسليم المشاريع والخدمات</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- بارعين في اتقديم تلك الخدمات -->
    <div class="container-fluid mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
      <div class="container">
        <!-- text -->
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <h3
              class="text-end fw-bold background"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <strong>بارعين في تقديم تلك الخدمات</strong>
            </h3>
            <p
              class="fw-bold lh-lg"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-once="false"
            >
              نساعدك في تحقيق أهدافك والمساهمة في جعل فكرتك حية على أرض الواقع،
              بتقديم خدمات تقنية وتسويقية احترافية.
            </p>
          </div>
        </div>
        <!-- services-->
        <div class="row mt-3 d-flex justify-content-center">
          <div class="col-md-10">
            <div class="containerSer">
              <div v-for="service in services" :key="service.id" class="rowSer">
                <div class="service box">
                  <img
                    :src="service.image"
                    alt="serviceimage"
                    width="100"
                    height="100"
                    class="service-img rounded-circle"
                  />
                  <h2 class="mt-lg-3 fs-4">{{ service.name }}</h2>
                  <p v-snip="3">{{ service.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- اجدد المشاريع -->
    <div
      class="container-fluid mt-lg-5 pt-lg-5"
      style="background-color: #f8faff"
    >
      <div class="container">
        <div class="row d-flex justify-content-center">
          <!-- text -->
          <div class="col-md-10">
            <h3
              class="text-end background fw-bold"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="false"
            >
              <strong>اجدد المشاريع</strong>
            </h3>
            <div style="width: 100%">
              <p
                class="fw-bold lh-lg"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="600"
                data-aos-delay="100"
                data-aos-once="false"
              >
                حققنا الكثير من الإنجازات مع شركاء النجاح من عملائنا، ونفخر
                دائمًا بكل ما نقدمه، انضم إلينا الآن. ( نبذة عن التطبيقات
                وغيرها...........)
              </p>
            </div>
          </div>
        </div>
        <!-- apps -->
        <div class="container-fluid" style="background-color: #f8faff">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div
                class="containerr"
                v-for="(app, i) in apps"
                :key="i"
                data-aos="zoom-in"
                :data-aos-delay="100 + i * 10"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="600"
                data-aos-once="1"
              >
                <div class="content">
                  <a>
                    <router-link
                      class="text-decoration-none fw-bold"
                      :to="{ name: 'app', params: { id: app.id } }"
                    >
                      <div class="content-overlay"></div>
                      <img
                        class="content-image"
                        v-if="app.image"
                        :src="app.image"
                        alt="img"
                      />
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">{{ app.title }}</h3>
                        <p class="content-text">click to show more details</p>
                        <router-link
                          class="text-decoration-none fw-bold"
                          :to="{ name: 'app', params: { id: app.id } }"
                          >عرض المزيد</router-link
                        >
                      </div>
                    </router-link>
                  </a>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <router-link
                class="m-5 p-3 border-0 text-center"
                :to="{ name: 'ourwork' }"
                exact
              >
                <span
                  style="background-color: #ef4823; height: 43px"
                  class="btn border-0 text-center text-light fw-bold rounded-pill py-2 px-4"
                  >المزيد</span
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- اخر الاخبار -->
    <div class="container-fluid mt-lg-5 pt-lg-5 pb-lg-5">
      <!-- text -->
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <h3
              class="text-end fw-bold background"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="false"
            >
              <strong>اخر الاخبار</strong>
            </h3>
            <p
              class="fw-bold lh-lg"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-once="false"
            >
              اطلع على المزيد من تفاصيل الخدمات التي نقدمها لكم. (المقالات)
            </p>
          </div>
        </div>
      </div>
      <!-- articles -->
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="row justify-content-center justify-content-lg-start">
              <div
                class="col-md-6 col-lg-4 p-1"
                v-for="article in articles"
                :key="article.id"
              >
                <router-link
                  :to="{ name: 'article', params: { id: article.id } }"
                >
                  <div class="card border-0" style="width: 100%">
                    <div class="articles_img" style="overflow: hidden">
                      <img
                        :src="article.image"
                        alt="img"
                        height="197"
                        width="300"
                        class="card-img-top rounded"
                      />
                    </div>
                    <div class="card-body">
                      <p class="card-text mb-1">
                        <strong>{{ article.title }}</strong>
                      </p>
                      <router-link
                        :to="{ name: 'article', params: { id: article.id } }"
                        >عرض المزيد</router-link
                      >
                    </div>
                  </div>
                </router-link>
                <!-- <div
                  class="card articles p-lg-3 border-0 rounded-0"
                  style="width: 100%"
                >
                  <div class="articles_img" style="overflow: hidden">
                    <img
                      :src="article.image"
                      alt="img"
                      height="177"
                      width="300"
                      class="rounded"
                    />
                  </div>
                  <div class="card-body">
                    <p class="card-title fw-bold">
                      <strong>{{ article.title }}</strong>
                    </p>
                    <p class="card-text fw-bold">{{ article.date }}</p>
                    <router-link
                      :to="{ name: 'article', params: { id: article.id } }"
                      >عرض المزيد</router-link
                    >
                  </div>
                </div> -->
              </div>
            </div>
            <div class="row justify-content-center">
              <router-link
                class="m-5 p-3 border-0 text-center"
                :to="{ name: 'articles' }"
                exact
              >
                <span
                  style="background-color: #ef4823; height: 43px"
                  class="btn border-0 text-center text-light fw-bold rounded-pill py-2 px-4"
                  >المزيد</span
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- counter -->
    <div
      class="container mt-5 text-center"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-3">
              <Vue3autocounter
                class="counter"
                ref="counter"
                :startAmount="0"
                :endAmount="counters.views"
                :duration="3"
                separator=","
                decimalSeparator="."
                :autoinit="true"
              />
              <!-- <span class="counter">{{ counters.views }}</span> -->
              <p class="fs-6 fw-bold"><strong>مشاهدات</strong></p>
            </div>
            <div class="col-md-3">
              <Vue3autocounter
                class="counter"
                ref="counter"
                :startAmount="0"
                :endAmount="counters.customers"
                :duration="3"
                separator=","
                decimalSeparator="."
                :autoinit="true"
              />
              <!-- <span class="counter">{{ counters.customers }}</span> -->
              <p class="fs-6 fw-bold">عملاء</p>
            </div>
            <div class="col-md-3">
              <Vue3autocounter
                class="counter"
                ref="counter"
                :startAmount="0"
                :endAmount="counters.employees"
                :duration="3"
                separator=","
                decimalSeparator="."
                :autoinit="true"
              />
              <!-- <span class="counter">{{ counters.employees }}</span> -->
              <p class="fs-6 fw-bold">موظفين</p>
            </div>
            <div class="col-md-3">
              <Vue3autocounter
                class="counter"
                ref="counter"
                :startAmount="0"
                :endAmount="counters.projects"
                :duration="3"
                separator=","
                decimalSeparator="."
                :autoinit="true"
              />
              <!-- <span class="counter">{{ counters.projects }}</span> -->
              <p class="fs-6 fw-bold">مشاريع منتهية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- الشركاء -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <PrtnersCom />
        </div>
      </div>
    </div>
  </div>

  <!-- تواصل معنا -->
  <div class="container-fluid mt-5" style="background-color: #f8faff">
    <!-- text -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <h3
            class="text-end fw-bold background"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <strong>تواصل معنا</strong>
          </h3>
          <p
            class="fw-bold lh-lg"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-once="false"
          >
            نسعد بتواصلكم معنا دائمًا، ونحرص على تقديم إجابات سريعة لكل
            الاستفسارات والتساؤلات الهامة.
          </p>
        </div>
      </div>
    </div>
    <!-- تواصل معنا -->
    <div class="row d-flex justify-content-center" id="contact_us">
      <div class="col-md-10">
        <div class="row">
          <section class="mt-5">
            <div class="container h-100">
              <div
                class="row d-flex justify-content-center align-items-center h-50"
              >
                <div class="col-lg-12 col-xl-11">
                  <div class="card text-black border-0">
                    <div
                      class="card-body p-0"
                      style="direction: ltr; background-color: #f8faff"
                    >
                      <div class="row justify-content-center">
                        <div
                          class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1"
                        >
                          <form class="mx-1 mx-md-4" style="direction: rtl">
                            <div class="row">
                              <div class="col-md-6">
                                <!--  الاسم -->
                                <div
                                  class="d-flex flex-row align-items-center mb-4"
                                >
                                  <div class="form-outline flex-fill mb-0">
                                    <label
                                      class="form-label"
                                      for="form3Example1c"
                                      >الاسم</label
                                    >
                                    <input
                                      type="text"
                                      id="form3Example1c"
                                      class="form-control border-top-0 border-start-0 border-end-0"
                                      v-model="contact.name"
                                    />
                                    <span
                                      class="erroe-feedbak"
                                      v-if="v$.contact.name.$error"
                                      >{{
                                        v$.contact.name.$errors[0].$message
                                      }}</span
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <!-- رقم الهاتف -->
                                <div
                                  class="d-flex flex-row align-items-center mb-4"
                                >
                                  <div class="form-outline flex-fill mb-0">
                                    <label
                                      class="form-label"
                                      for="form3Example3c"
                                      >رقم الهاتف</label
                                    >
                                    <input
                                      type="number"
                                      id="form3Example3c"
                                      class="form-control border-top-0 border-start-0 border-end-0"
                                      v-model="contact.number"
                                    />
                                    <span
                                      class="erroe-feedbak"
                                      v-if="v$.contact.number.$error"
                                      >{{
                                        v$.contact.number.$errors[0].$message
                                      }}</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- البريد الالكتروني -->
                            <div
                              class="d-flex flex-row align-items-center mb-4"
                            >
                              <div class="form-outline flex-fill mb-0">
                                <label class="form-label" for="form3Example4c"
                                  >البريد الالكتروني</label
                                >
                                <input
                                  type="email"
                                  id="form3Example4c"
                                  class="form-control border-top-0 border-start-0 border-end-0"
                                  v-model="contact.email"
                                />
                                <span
                                  class="erroe-feedbak"
                                  v-if="v$.contact.email.$error"
                                  >{{
                                    v$.contact.email.$errors[0].$message
                                  }}</span
                                >
                              </div>
                            </div>
                            <!--  الموضوع -->
                            <div
                              class="d-flex flex-row align-items-center mb-4"
                            >
                              <div class="form-outline flex-fill mb-0">
                                <label class="form-label" for="form4Example1c"
                                  >الموضوع</label
                                >
                                <input
                                  type="text"
                                  id="form4Example1c"
                                  class="form-control border-top-0 border-start-0 border-end-0"
                                  v-model="contact.subject"
                                />
                                <span
                                  class="erroe-feedbak"
                                  v-if="v$.contact.subject.$error"
                                  >{{
                                    v$.contact.subject.$errors[0].$message
                                  }}</span
                                >
                              </div>
                            </div>
                            <!-- الرسالة -->
                            <div
                              class="d-flex flex-row align-items-center mb-4"
                            >
                              <div class="form-outline" style="width: 100%">
                                <label class="form-label" for="textAreaExample"
                                  >الرسالة</label
                                >
                                <textarea
                                  class="form-control"
                                  id="textAreaExample"
                                  rows="4"
                                  v-model="contact.message"
                                ></textarea>
                                <span
                                  class="erroe-feedbak"
                                  v-if="v$.contact.message.$error"
                                  >{{
                                    v$.contact.message.$errors[0].$message
                                  }}</span
                                >
                              </div>
                            </div>
                            <!-- ارسال -->
                            <div class="text-start mb-3 mt-4 mb-lg-4">
                              <button
                                style="background-color: #ef4823; border: none"
                                @click="contactus()"
                                type="button"
                                class="btn btn-primary btn-lg text-end"
                              >
                                ارسال
                              </button>
                            </div>
                          </form>
                        </div>
                        <div
                          class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2"
                        >
                          <img
                            v-lazy="contac"
                            class="img-fluid"
                            height="400"
                            width="400"
                            alt="Sample"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <FooterCom />
</template>

<script>
import PageLoader from "@/components/pageloader/PageLoder.vue";
import Vue3autocounter from "vue3-autocounter";
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import NavBarCom from "@/components/navbar/NavBar.vue";
import PrtnersCom from "@/components/slider/PartnersCom.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "HomeCom",
  components: {
    NavBarCom,
    FooterCom,
    Vue3autocounter,
    PrtnersCom,
    PageLoader,
  },
  data() {
    return {
      Gback: require("@/assets/new_img/webp/Gback.webp"),
      arabic: require("@/assets/new_img/arabic.png"),
      arrow: require("@/assets/new_img/webp/arrow.webp"),
      plan: require("@/assets/new_img/webp/plan2.webp"),
      contac: require("@/assets/new_img/webp/contact_us.webp"),
      loading: false,
      isOpen: false,
      successMessage: "",
      v$: useValidate(),
      counters: [],
      plans: [],
      services: [],
      apps: [],
      // اخر الاخبار
      articles: [],
      slickOptions: {
        slidesToShow: 1,
        // Any other options that can be got from plugin documentation
      },
      contact: {
        name: "",
        number: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  validations() {
    return {
      contact: {
        name: { required },
        number: { required },
        email: { required, email },
        subject: { required },
        message: { required },
      },
    };
  },
  async mounted() {
    this.loading = true;
    /* counter */
    let result = await axios
      .get(`https://admin.growth-tech.co/api/info`)
      .catch(() => this.$router.push({ path: "/servererror" }));
    if (result.status == 200) {
      this.counters = result.data.info;
    }
    /* servcies */
    let services = await axios.get(`https://admin.growth-tech.co/api/services`);
    // .catch(() => this.$router.push({ name: "servererror" }));
    if (services.status == 200) {
      this.services = services.data.services;
    }
    /* apps */
    let apps = await axios.get(`https://admin.growth-tech.co/api/apps`);
    // .catch(() => this.$router.push({ name: "servererror" }));
    if (result.status == 200) {
      this.apps = apps.data.apps.splice(0, 3);
    }
    /* articles */
    let articles = await axios.get(`https://admin.growth-tech.co/api/articles`);
    // .catch(() => this.$router.push({ name: "servererror" }));
    if (result.status == 200) {
      this.articles = articles.data.data.splice(0, 3);
    }
    this.loading = false;
  },
  methods: {
    async contactus() {
      this.loading = true;
      this.v$.$validate();
      if (!this.v$.$error) {
        let result = await axios.post(
          `https://admin.growth-tech.co/api/contact`,
          this.contact
        );
        if (result.status == 200) {
          this.$swal.fire({
            icon: "success",
            title: "تم...",
            text: "عملية تسجيل ناجحة",
            footer: "<p>تم تسجيل ردك بنجاح</p>",
            timer: 2000,
          });
          setTimeout(() => {
            this.successMessage = "";
            this.contact.name = "";
            this.contact.number = "";
            this.contact.email = "";
            this.contact.subject = "";
            this.contact.message = "";
            (this.v$.contact.name.$errors[0].$message = ""),
              (this.v$.contact.number.$errors[0].$message = ""),
              (this.v$.contact.email.$errors[0].$message = ""),
              (this.v$.contact.subject.$errors[0].$message = ""),
              (this.v$.contact.message.$errors[0].$message = "");
          }, 2000);
        }
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "عملية تسجيل خاطئة",
          footer: "<p>املئ البيانات بطريقة صحيحة</p>",
          timer: 2000,
        });
      }
      this.loading = false;
    },
  },
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
}
.home {
  direction: rtl;
  color: #1f1e1e !important;
}
a {
  color: #212a34 !important;
  font-weight: bold !important;
  text-decoration: none !important;
}
.home .counter {
  font-size: 60px;
  font-weight: 900;
}
.home ul li {
  list-style: none;
}
.home ul li a {
  text-decoration: none;
  color: #1f1e1e;
}
.home ul li::before {
  content: "\2022";
  color: #ef4823;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-right: 0em;
  font-size: 25px;
}
.home .main-title {
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}

.home .containerr {
  padding: 1em 0;
  float: right;
  width: 50%;
}

@media screen and (max-width: 640px) {
  .home .containerr {
    display: block;
    width: 100%;
  }
  .home .buttoncss {
    width: 100%;
    font-size: 15px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0) !important;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .home .containerr {
    width: 33.33333%;
  }
  .home .articles {
    height: 467px;
    width: 388px;
  }
  .home .articles_img {
    height: 225px;
    width: 100%;
  }
  .home .articles_img img {
    height: 225px;
    width: 100%;
  }
}
.containerr .title {
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}

.home .content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.home .content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.home .content:hover .content-overlay {
  opacity: 1;
}

.home .content-image {
  width: 100%;
  height: 180px;
  /* object-fit: scale-down; */
}

.home .content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.home .content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.home .content-details p {
  color: #fff;
  font-size: 0.8em;
}

.home .fadeIn-bottom {
  top: 80%;
}
</style>
