<template>
  <NavBarCom />
  <div v-if="loading">
    <div>
      <PageLoader />
    </div>
  </div>
  <div class="about" style="direction: rtl">
    <!-- من نحن -->
    <div class="container font_p">
      <div class="row d-flex justify-content-center">
        <!-- text -->
        <div class="col-md-10 pt-lg-5">
          <h1
            class="text-lg-center mt-lg-5 text-end backgroundcenter background fw-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            data-aos-once="false"
          >
            <strong>من نحن</strong>
          </h1>
          <div style="width: 100%">
            <p
              class="fw-bold text-center"
              style="font-weight: 400 !important"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-once="false"
            >
              مؤسسة نمو التقنية شركة تأسست عام 2022 م، شركة مصرية تقدم خدمات
              التصميم الإلكتروني ومختلف أنواع الحلول الرقمية والتسويق
              الإلكتروني. فريق عمل متكامل لديه خبرة أكثر من 10 سنوات في تقديم كل
              الحلول التقنية والتسويق الرقمي بأفضل الأسعار. + قدمنا الكثير من
              الخدمات التقنية لعدد هائل من العملاء والمؤسسات والهيئات الحكومية
              والخاصة والمراكز، بالاعتماد على أحدث الأساليب التقنية، ونطمح لأن
              نكون الأفضل في تصميم المواقع وإنشاء المتاجر الإلكترونية والتطبيقات
              والتسويق الإلكتروني.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- text and image -->
    <div
      class="container-fluid lh-lg pt-5 pb-5 mt-5"
      style="background-color: #f8faff"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-md-9">
          <div
            class="row mb-2 align-items-center d-flex justify-content-lg-between"
          >
            <div class="col-lg-6 font_p align-middle text-lg-end">
              <h1
                class="background"
                style="font-weight: 900 !important"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
                data-aos-once="false"
              >
                <strong>رؤيتنا</strong>
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="600"
                data-aos-delay="100"
                data-aos-once="false"
              >
                تنطلق من الإيمان بأن نمو عملائنا هو الإنعكاس المباشر لجودة
                أدائنا بالواقع، حيث نعتمد على تقدم عملائنا كمقياس أساسي لنجاحنا.
                ونحرص على ضرورة تقديم المشورة الأساسية للمساعدة في نمو العملاء؛
                لأننا نهتم بتمهيد الطرق لتحقيق أهداف العملاء واحتياجاتهم أكثر من
                الاهتمام بالمنافسة فقط. فإيمانًا منا بأن عملاءنا شركاء النجاح،
                فنحن نستحوذ على اهتماماتهم أكثر من مجرد خدمة موجهة فقط نحو تحقيق
                النتائج، بل نهتم بتقديم النصائح الدائمة للمساعدة في الإرتقاء
                بالأنشطة التجارية والخدمية المختلفة.
              </p>
            </div>
            <div class="col-lg-4 text-center text-lg-start">
              <img
                class="img-fluid"
                src="@/assets/new_img/webp/vision.webp"
                alt="img"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="600"
                data-aos-delay="100"
                data-aos-once="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- sliderCom من نحن -->
    <!-- text -->
    <div class="container-fluid mt-5">
      <!-- text -->
      <!-- <div class="row d-flex justify-content-center" style="direction: rtl">
        <div class="col-md-9">
          <h1
            class="text-end background fw-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            data-aos-once="false"
          >
            <strong>فريق االعمل</strong>
          </h1>
          <p
            class="font_p mb-0"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-once="false"
          >
            فريق عمل أُختير خصيصًا لتحقيق أهداف عملائنا الكرام، لجمع المعلومات
            منهم والعمل على تطويرها. يتمتع بالذكاء، جدير بالثقة، دائم النشاط
            والحيوية في العمل ومحب دائم للعطاء. يتميز بالتفكير المبدع والشغف
            بالعمل والإيجابية والنزاهة والشفافية والتطوير الدائم. محترفين وخبراء
            في تقديم كافة الخدمات التقنية والتسويق الإلكتروني
          </p>
        </div>
      </div> -->
    </div>
    <!-- sliderCom-->
    <SliderCom />

    <!-- counter -->
    <div
      class="container-fluid mt-5 text-center"
      style="background-color: #f8faff"
    >
      <div class="row d-flex justify-content-center p-5">
        <div class="col-md-10 col-lg-10">
          <div class="row">
            <div class="col-md-3">
              <!-- <span class="counter">{{ counters.customers }}</span> -->
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
              <p class="fs-6 fw-bold">
                <strong>عملاء</strong>
              </p>
            </div>
            <div class="col-md-3">
              <!-- <span class="counter">{{ counters.employees }}</span> -->
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
              <p class="fs-6 fw-bold">
                <strong>موظفين</strong>
              </p>
            </div>
            <div class="col-md-3">
              <!-- <span class="counter">{{ counters.views }}</span> -->
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
              <p class="fs-6 fw-bold">
                <strong>مشاهدات</strong>
              </p>
            </div>
            <div class="col-md-3">
              <!-- <span class="counter">{{ counters.projects }}</span> -->
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
              <p class="fs-6 fw-bold">
                <strong>مشاريع</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- partener الشركاء -->
    <div class="container-fluid mt-5">
      <!-- text -->
      <div class="row d-flex justify-content-center" style="direction: rtl">
        <div class="col-md-9">
          <h1
            class="text-end background fw-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            data-aos-once="false"
          >
            <strong>شركاؤنا</strong>
          </h1>
          <p
            class="font_p mb-0"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-once="false"
          >
            حققنا الكثير من الإنجازات مع شركاء النجاح من عملائنا، ونفخر دائمًا
            بكل ما نقدمه، انضم إلينا الآن.
          </p>
        </div>
      </div>
    </div>
    <PrtnersCom />
  </div>
  <!-- تواصل معنا -->
  <div class="container-fluid mt-5 font_p" style="background-color: #f8faff">
    <!-- text -->
    <div class="row d-flex justify-content-center" style="direction: rtl">
      <div class="col-md-10 col-lg-9">
        <h1
          class="text-end background fw-bold"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          data-aos-once="false"
        >
          <strong>تواصل معنا</strong>
        </h1>
        <p class="fw-bold">
          نسعد بتواصلكم معنا دائمًا، ونحرص على تقديم إجابات سريعة لكل
          الاستفسارات والتساؤلات الهامة.
        </p>
      </div>
    </div>
    <!-- تواصل معنا -->
    <div class="row d-flex justify-content-center">
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
                                      style="color: #000000"
                                      class="form-label"
                                      for="form3Example1c"
                                      >الاسم</label
                                    >
                                    <input
                                      type="text"
                                      id="form3Example1c"
                                      class="form-control borderstyle border-top-0 border-start-0 border-end-0"
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
                                      style="color: #000000"
                                      class="form-label"
                                      for="form3Example3c"
                                      >رقم الهاتف</label
                                    >
                                    <input
                                      type="number"
                                      id="form3Example3c"
                                      class="form-control borderstyle border-top-0 border-start-0 border-end-0"
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
                                <label
                                  class="form-label"
                                  for="form3Example4c"
                                  style="color: #000000"
                                  >البريد الالكتروني</label
                                >
                                <input
                                  type="email"
                                  id="form3Example4c"
                                  class="form-control borderstyle border-top-0 border-start-0 border-end-0"
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
                                <label
                                  class="form-label"
                                  for="form4Example1c"
                                  style="color: #000000"
                                  >الموضوع</label
                                >
                                <input
                                  type="text"
                                  id="form4Example1c"
                                  class="form-control borderstyle border-top-0 border-start-0 border-end-0"
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
                                <label
                                  class="form-label"
                                  for="textAreaExample"
                                  style="color: #000000"
                                  >الرسالة</label
                                >
                                <textarea
                                  class="form-control borderstyle"
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
                                @click="contactus()"
                                style="background-color: #ef4823"
                                type="button"
                                class="btn border-0 btn-primary btn-lg text-end"
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
                            src="@/assets/new_img/webp/contact_us.webp"
                            class="img-fluid"
                            height="400"
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
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import axios from "axios";
import NavBarCom from "@/components/navbar/NavBar.vue";
import SliderCom from "@/components/slider/SliderCom.vue";
import PrtnersCom from "@/components/slider/PartnersCom.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "AboutCom",
  components: {
    PageLoader,
    NavBarCom,
    SliderCom,
    PrtnersCom,
    FooterCom,
    Vue3autocounter,
  },
  data() {
    return {
      loading: false,
      counters: [],
      v$: useValidate(),
      successMessage: "",
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
    let result = await axios
      .get(`https://admin.growth-tech.co/api/info`)
      .catch(() => this.$router.push({ path: "/servererror" }));
    if (result.status == 200) {
      this.counters = result.data.info;
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
            this.errorMessage = "";
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
.about {
  color: #1f1e1e;
}
.about .counter {
  font-size: 60px;
  font-weight: 900;
}
</style>
