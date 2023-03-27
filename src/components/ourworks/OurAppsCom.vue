<template>
  <NavBarCom />
  <div class="ourworks" style="direction: rtl">
    <!-- اجدد المشاريع -->
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <!-- text -->
        <div class="col-md-10">
          <h1
            class="text-end text-lg-center background backgroundcenter fw-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <strong>اعمالنا</strong>
          </h1>
          <div style="width: 100%">
            <p class="fw-bold lh-lg text-lg-center">
              نساعدك في تحقيق أهدافك والمساهمة في جعل فكرتك حية على أرض الواقع،
              بتقديم خدمات تقنية وتسويقية احترافية
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- categories -->
    <CategoriesCom />
  </div>
  <FooterCom />
</template>
<script>
import NavBarCom from "@/components/navbar/NavBar.vue";
import CategoriesCom from "@/components/ourworks/CategoriesCom.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "OurAppsCom",
  components: { NavBarCom, FooterCom, CategoriesCom },
  data() {
    return {};
  },
};
</script>

<style></style>
