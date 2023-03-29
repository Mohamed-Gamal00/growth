<template>
  <div
    class="container-fluid mt-5"
    style="background-color: #1f1e1e; direction: rtl"
  >
    <div class="row d-flex justify-content-center">
      <div class="col-md-9">
        <div class="row">
          <footer>
            <!-- Footer Start -->
            <div class="text-light" style="margin-top: 6rem">
              <div class="container py-5">
                <div class="row g-5">
                  <!--Growth-->
                  <div class="col-md-6 col-lg-3 text-center">
                    <span class="">
                      <img
                        src="@/assets/new_img/white.png"
                        style="position: relative; bottom: 30px"
                        width="100"
                        alt="img"
                      />
                    </span>
                    <p>
                      مؤسسة نمو التقنية رائدين في مجال التقنيات الحديثة والتسويق
                      الإلكتروني لتقديم المزيد من فرص زيادة الأرباح في ظل التطور
                      التكنولوجي نقدم دعم الأنشطة التجارية المتنوعة
                    </p>
                    <div class="d-flex justify-content-center pt-2">
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="facebook"
                        href="https://www.facebook.com/SIGMA.BSolutions?mibextid=LQQJ4d"
                        ><FontAwesome :icon="['fab', 'facebook']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="Twitter"
                        href="https://twitter.com/sigma_bsolution?s=21&t=40ETF1X4eEMpXw52d1mfaw"
                        ><FontAwesome :icon="['fab', 'twitter']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="instagram"
                        href="https://instagram.com/sigma.bsolutions?igshid=Zjc2ZTc4Nzk="
                        ><FontAwesome :icon="['fab', 'instagram']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="linkedin"
                        href="https://www.linkedin.com/company/sigma-business/"
                        ><FontAwesome :icon="['fab', 'linkedin']"
                      /></a>
                    </div>
                  </div>
                  <!-- الشركة -->
                  <div class="col-md-6 col-lg-3">
                    <h5 class="text-white text-center mb-4">الشركة</h5>
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
                  </div>
                  <!-- العمل -->
                  <div class="col-md-6 col-lg-3">
                    <h5 class="text-white text-center mb-4">العمل</h5>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                    >
                      تصميم تطبيقات الهاتف
                    </router-link>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                      >تصميم مواقع</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                      >تسويق الكتروني</router-link
                    >

                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                      >موشن جرافيك</router-link
                    >
                  </div>
                  <!-- المزيد -->
                  <div class="col-md-6 text-center col-lg-3">
                    <h5 class="text-white text-center mb-4">المزيد</h5>
                    <p>سياسة الخصوصية</p>
                    <p>الشروط والاحكام</p>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'about' }"
                    >
                      تواصل معنا
                    </router-link>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'about' }"
                    >
                      من نحن
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-12 text-center mb-3 mb-md-0">
                    All Right Reserved.

                    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                    Designed By &copy;
                    <a
                      class="border-bottom text-decoration-none"
                      style="color: #ef4823 !important"
                      >GROWTH</a
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
export default {
  name: "FooterCom",
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
