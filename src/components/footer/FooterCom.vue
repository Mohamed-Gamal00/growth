<template>
  <div
    class="container-fluid mt-5"
    style="background-color: #1f1e1e; direction: rtl"
  >
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="row">
          <footer>
            <!-- Footer Start -->
            <div class="text-light" style="margin-top: 6rem">
              <div class="container-fluid">
                <div class="row">
                  <!--Growth-->
                  <div class="col-md-6 col-lg-3 text-center">
                    <span class="">
                      <img
                        src="@/assets/new_img/white.png"
                        style="position: relative; bottom: 30px"
                        width="100"
                        height="50"
                        alt="img"
                      />
                    </span>
                    <p>
                      مؤسسة نمو التقنية رائدين في مجال التقنيات الحديثة والتسويق
                      الإلكتروني لتقديم المزيد من فرص زيادة الأرباح في ظل التطور
                      التكنولوجي نقدم دعم الأنشطة التجارية المتنوعة
                    </p>
                  </div>
                  <!-- الشركة -->
                  <div class="col-md-6 col-lg-1">
                    <p class="text-white text-center mb-4">الشركة</p>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'home' }"
                      >الرئيسية</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                      >اعمالنا</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'products' }"
                      >منتجاتنا</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'articles' }"
                      >المدونة</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'about' }"
                    >
                      من نحن
                    </router-link>
                  </div>
                  <!-- العمل -->
                  <div class="col-md-6 col-lg-2">
                    <h5 class="text-white text-center mb-4">خدمتنا</h5>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'apps' }"
                    >
                      التطبيقات والمواقع
                    </router-link>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'graphic' }"
                      >التصميمات</router-link
                    >

                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'motion' }"
                      >موشن جرافيك</router-link
                    >
                  </div>
                  <!-- المزيد -->
                  <div class="col-md-6 text-center col-lg-3">
                    <h5 class="text-white text-center mb-4">اتصل بنا</h5>
                    <p>97144426518.</p>
                    <p>growth@125.com</p>
                    <!-- <p>سياسة الخصوصية</p>
                    <p>الشروط والاحكام</p> -->
                  </div>
                  <!-- تواصل معنا  -->
                  <div class="col-md-6 text-center col-lg-3">
                    <p>احصل علي مزيد من العملاء المحتملين</p>
                    <form class="mx-1 mx-md-12" style="direction: rtl">
                      <div class="row">
                        <div class="col-md-12">
                          <!--  الاسم -->
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                placeholder="الاسم"
                                class="form-control border-top-0 border-start-0 border-end-0"
                                v-model="contact.name"
                              />
                              <span
                                class="erroe-feedbak"
                                v-if="v$.contact.name.$error"
                                >{{ v$.contact.name.$errors[0].$message }}</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <!-- رقم الهاتف -->
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="number"
                                placeholder="رقم الهاتف"
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
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            placeholder="البريد الالكتروني"
                            class="form-control border-top-0 border-start-0 border-end-0"
                            v-model="contact.email"
                          />
                          <span
                            class="erroe-feedbak"
                            v-if="v$.contact.email.$error"
                            >{{ v$.contact.email.$errors[0].$message }}</span
                          >
                        </div>
                      </div>
                      <!-- ارسال -->
                      <div class="text-start mb-3 mt-4 mb-lg-4">
                        <button
                          style="
                            background-color: #ef4823;
                            border: none;
                            width: 100%;
                          "
                          @click="contactus()"
                          type="button"
                          class="btn btn-primary btn-lg text-center"
                        >
                          ارسال
                        </button>
                      </div>
                    </form>
                    <div class="d-flex justify-content-center pt-2">
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="facebook"
                        href="https://www.facebook.com/GrowthTech.co"
                        ><FontAwesome :icon="['fab', 'facebook']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="Twitter"
                        href="https://twitter.com/GrowthTech_co"
                        ><FontAwesome :icon="['fab', 'twitter']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="instagram"
                        href="https://www.instagram.com/growth.tech13"
                        ><FontAwesome :icon="['fab', 'instagram']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="linkedin"
                        href="https://www.linkedin.com/company/growthtech-co"
                        ><FontAwesome :icon="['fab', 'linkedin']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="linkedin"
                        href="https://www.tiktok.com/@growth.tech13"
                        ><FontAwesome :icon="['fab', 'tiktok']"
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-12 text-center mb-3 mb-md-0">
                    All Right Reserved. Designed By &copy;
                    <span
                      class="border-bottom text-decoration-none"
                      style="color: #f29887 !important"
                      >GROWTH</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Footer End -->
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  name: "HomeCom",
  data() {
    return {
      v$: useValidate(),
      contact: {
        name: "",
        number: "",
        email: "",
      },
    };
  },
  validations() {
    return {
      contact: {
        name: { required },
        number: { required },
        email: { required, email },
      },
    };
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

<style scoped>
a {
  color: white !important;
}
:root {
  --primary: #2380be;
  --light: #05121b;
  --dark: #0e2e50;
}
.btnn.btn-social {
  margin-right: 5px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ef4823;
  color: var(--light);
  border: 1px solid rgba(256, 256, 256, 0.1);
  transition: 0.3s;
}

.btnn.btn-social:hover {
  color: var(--primary);
}

.btn_btn_link {
  display: block;
  margin-bottom: 10px;
  padding: 0;
  text-align: center;
  color: var(--light);
  font-weight: normal;
  transition: 0.3s;
  color: white;
}
.btn_btn_link:hover {
  letter-spacing: 0.5px;
  box-shadow: none;
  color: #0099ff;
}

.btn_btn_link::before {
  position: relative;
  content: "";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 10px;
}
</style>
