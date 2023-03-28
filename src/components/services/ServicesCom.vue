<template>
  <NavBarCom />
  <div class="services mb-5 pb-lg-5">
    <!-- من نحن -->
    <div class="container pt-5">
      <div class="row d-flex justify-content-center">
        <!-- text -->
        <div class="col-md-10">
          <h1 class="text-center fw-bold">
            <strong>بارعين في تقديم تلك الخدمات</strong>
          </h1>
          <div style="width: 100%">
            <p class="fw-bold text-center">
              هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم
              في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار
              للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
              مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة
              دليل أو مرجع شكلي
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- services الخدمات -->
    <div class="container pt-5">
      <div class="row d-flex justify-content-center">
        <!-- services -->
        <div class="col-md-12">
          <div class="row justify-content-center">
            <div
              class="col-md-4 p-2 col-lg-3 mt-2 mt-lg-5 p-0 d-flex justify-content-center"
              v-for="service in services"
              :key="service"
            >
              <div class="card shadow_style" style="width: 18rem">
                <div style="width: 100%; height: 200px">
                  <img
                    src="https://static.wixstatic.com/media/776cac_58ab52a242914447b1b8a608835f0b15~mv2.png/v1/fill/w_560,h_468,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/18783.png"
                    style="height: 100%"
                    class="card-img-top img-fluid"
                    alt="img"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title text-center fw-bold">
                    <strong> تسويق اليكتروني </strong>
                  </h5>
                  <p class="card-text text-center fw-bold">
                    هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل ويُستخدم في
                    صناعات المطابع ودور النشر
                  </p>
                </div>
                <div class="d-flex justify-content-between me-2">
                  <p
                    class="text-start fw-bold"
                    style="position: relative; top: 5px"
                  >
                    يبدا من 1500 جنيه
                  </p>
                  <button class="ordernow" type="submit">اطلب الان</button>
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
import NavBarCom from "@/components/navbar/NavBar.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "ServicesCom",
  components: {
    NavBarCom,
    FooterCom,
  },
  data() {
    return {
      services: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 5 },
        { id: 5 },
        { id: 5 },
      ],
    };
  },
};
</script>
<style></style>
