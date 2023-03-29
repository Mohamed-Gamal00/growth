<template>
  <NavBarCom />
  <div v-if="loading">
    <div>
      <PageLoader />
    </div>
  </div>
  <div class="ourwork mt-5 pb-5">
    <!-- text and image -->
    <div
      class="container mb-5 pb-5"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="800"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="row mb-2 pb-5 pt-5 align-items-center">
            <!-- text -->
            <div class="col-lg-6 fw-bold text-lg-end">
              <h1
                class="mb-4 fw-bold font_h1"
                style="font-weight: 900 !important"
              >
                {{ app.title }}
              </h1>
              <p class="pb-3">
                {{ app.body }}
              </p>
              <div class="text-center">
                <div class="container">
                  <center>
                    <!-- Google Play button -->
                    <a
                      v-if="app.ref1"
                      :href="app.ref1"
                      class="market-btn google-btn"
                      role="button"
                    >
                      <span class="market-button-subtitle">GET it on</span>
                      <span class="market-button-title">Google Play</span>
                    </a>
                    <!-- App Store button -->
                    <a
                      v-if="app.ref2"
                      :href="app.ref2"
                      class="market-btn apple-btn"
                      role="button"
                      style="width: 160.72px"
                    >
                      <span class="market-button-subtitle"
                        >Avalible on the</span
                      >
                      <span class="market-button-title">App Store</span>
                    </a>
                    <!-- visit our site -->
                    <a
                      v-if="app.ref3"
                      :href="app.ref3"
                      class="market-btn site-btn"
                      role="button"
                      style="width: 160.72px"
                    >
                      <span class="market-button-subtitle">Avalible</span>
                      <span class="market-button-title">visit site</span>
                    </a>
                  </center>
                </div>
              </div>
            </div>
            <!-- image -->
            <div
              class="col-lg-6 mt-3 mt-sm-3 text-center text-lg-start"
              style="height: 300px"
            >
              <img
                class="img-fluid shadow rounded-3"
                style="width: 100%; height: 300px"
                :src="app.image"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- text  -->
    <div class="container mb-5 pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <h1
            class="text-center fw-bold"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <strong> ويُستخدم في صناعات المطابع ودور النشر </strong>
          </h1>
          <p class="fw-bold">
            هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم
            في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص
            الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة
          </p>
        </div>
      </div>
    </div>
    <!-- ourwork -->
    <div class="container mb-5 pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="row justify-content-between p-2">
            <div
              class="col-md-6 col-lg-4 text-center d-flex justify-content-center"
              v-for="(work, i) in ourworks"
              :key="i"
              data-aos="zoom-in"
              :data-aos-delay="100 + i * 500"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <div
                class="card border-0 mt-3 cardshadow"
                style="width: 22rem; height: 25rem; overflow: hidden"
              >
                <div class="text-center" width="100" height="100">
                  <img :src="work.image" alt="img" width="150" height="150" />
                </div>
                <div class="card-body fw-bold">
                  <h5 class="card-title mb-4 fw-bold">{{ work.title }}</h5>
                  <p class="card-text">
                    {{ work.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- text ما فائدته  -->
    <div class="container mb-5 pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <h1
                class="text-center fw-bold"
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
                data-aos-once="false"
              >
                <strong> ما فائدته </strong>
              </h1>
            </div>
          </div>
          <p class="fw-bold text-center">
            هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم
            في صناعات المطابع ودور النشر
          </p>
        </div>
      </div>
    </div>
    <!-- ما فائدته -->
    <div class="container mb-5 pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="row mb-2 pb-5 pt-5 align-items-center">
            <div
              class="col-lg-6 mt-3 text-center text-lg-start"
              style="height: 300px"
            >
              <img
                class="img-fluid rounded-3"
                style="width: 100%; height: 300px"
                :src="app.b_image"
                alt="img"
              />
            </div>
            <div class="col-lg-6 fw-bold text-lg-end">
              <h1
                class="mb-4 fw-bold font_h1"
                style="font-weight: 900 !important"
              >
                {{ app.b_head }}
              </h1>
              <div class="pb-3" v-html="app.b_body"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- text  -->
    <div class="container mb-5 pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <h1 class="text-center fw-bold">
                <strong>
                  باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا تينية
                </strong>
              </h1>
            </div>
          </div>
          <p class="fw-bold text-center">
            هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
            تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
            النص.
          </p>
        </div>
      </div>
    </div>
    <!-- counter -->
    <div class="container mb-5 pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <section class="">
            <div class="container">
              <div class="row">
                <!-- counter صفحة مكتملة -->
                <div
                  class="col-md-3 col-sm-6 bottom-margin text-center counter-section"
                >
                  <div class="text-center pic" width="100" height="100">
                    <img
                      src="@/assets/complete.gif"
                      width="100"
                      height="100"
                      class="rounded-circle"
                      alt="img"
                    />
                  </div>
                  <span id="anim-number-pizza" class="counter-number"></span>
                  <span class="timer counter alt-font appear">{{
                    app.pages
                  }}</span>
                  <p class="counter-title">صفحة مكتملة</p>
                </div>
                <!-- counter عدد التحميلات-->
                <div
                  class="col-md-3 col-sm-6 bottom-margin text-center counter-section"
                >
                  <div class="text-center pic" width="100" height="100">
                    <img
                      src="@/assets/loading.gif"
                      width="100"
                      height="100"
                      class="rounded-circle"
                      alt="img"
                    />
                  </div>
                  <span id="anim-number-pizza" class="counter-number"></span>
                  <span class="timer counter alt-font appear">{{
                    app.downlaods
                  }}</span>
                  <p class="counter-title">عدد التحميلات</p>
                </div>
                <!-- counter عميل راض-->
                <div
                  class="col-md-3 col-sm-6 bottom-margin text-center counter-section"
                >
                  <div class="text-center pic" width="100" height="100">
                    <img
                      src="@/assets/customers.gif"
                      width="100"
                      height="100"
                      class="rounded-circle"
                      alt="img"
                    />
                  </div>
                  <span id="anim-number-pizza" class="counter-number"></span>
                  <span class="timer counter alt-font appear">{{
                    app.customers
                  }}</span>
                  <p class="counter-title">عميل راض</p>
                </div>
                <!-- counter بلد متاحة-->
                <div
                  class="col-md-3 col-sm-6 bottom-margin text-center counter-section"
                >
                  <div class="text-center pic" width="100" height="100">
                    <img
                      src="@/assets/counteries.gif"
                      width="100"
                      height="100"
                      class="rounded-circle"
                      alt="img"
                    />
                  </div>
                  <span id="anim-number-pizza" class="counter-number"></span>
                  <span class="timer counter alt-font appear">{{
                    app.country
                  }}</span>
                  <p class="counter-title">بلد متاحة</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <CommentCom />
  </div>
  <FooterCom />
</template>
<script>
import PageLoader from "@/components/pageloader/PageLoder.vue";
import axios from "axios";
import NavBarCom from "@/components/navbar/NavBar.vue";
import CommentCom from "@/components/comments/CommentCom.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "OurworksCom",
  components: {
    NavBarCom,
    CommentCom,
    PageLoader,
    FooterCom,
  },
  data() {
    return {
      loading: false,
      ourworks: [
        {
          id: 1,
          image: require("../assets/user-interface.png"),
          title: "تصميم تطبيق مميز",
          content: "ويُستخدم في صناعات المطابع ودور النشر. كان لوريم ",
        },
        {
          id: 2,
          image: require("../assets/monitor.png"),
          title: "لوحة تحكم",
          content: "ويُستخدم في صناعات المطابع ودور النشر. كان لوريم ",
        },
        {
          id: 3,
          image: require("../assets/development.png"),
          title: "ما اصله",
          content: "ويُستخدم في صناعات المطابع ودور النشر. كان لوريم ",
        },
      ],
      app: [],
      id: this.$route.params.id,
    };
  },
  async mounted() {
    this.loading = true;
    let result = await axios.get(
      `https://admin.growth-tech.co/api/app/${this.id}`
    );
    if (result.status == 200) {
      this.app = result.data.app;
    }
    this.loading = false;
  },
};
</script>

<style>
.ourwork {
  direction: rtl;
  color: #1f1e1e;
}
.market-btn {
  display: inline-block;
  padding: 0.3125rem 0.875rem;
  padding-left: 2.8125rem;
  -webkit-transition: border-color 0.25s ease-in-out,
    background-color 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  border: 1px solid #e7e7e7;
  background-position: center left 0.75rem;
  background-color: #fff;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  text-decoration: none;
  margin: 2px 2px;
  transition: all 0.5s ease-in-out;
  border-radius: 8px;
}
.market-btn:hover {
  background-color: #ef4823;
  text-decoration: none;
}
.market-btn .market-button-title {
  display: block;
  color: #222;
  font-size: 1.125rem;
}
.market-btn:hover .market-button-title {
  color: rgb(255, 255, 255);
}
.market-btn .market-button-subtitle {
  display: block;
  margin-bottom: -0.25rem;
  color: #888;
  font-size: 0.75rem;
}
.market-btn:hover .market-button-subtitle {
  color: rgb(255, 255, 255);
}
.apple-btn {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiMyZTJlMmUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}
.google-btn {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}
.site-btn {
  background-image: url(@/assets/icons/global.png);
}
.cardshadow {
  box-shadow: 0 0.5rem 1rem rgba(105, 104, 104, 0.15) !important;
  transition: all 0.5s ease-in-out;
}
.counter-section span.counter {
  font-size: 40px;
  color: #000;
  line-height: 60px;
  display: block;
  font-family: "Oswald", sans-serif;
  letter-spacing: 2px;
}
.counter-title {
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
}
.counter-icon {
  top: 25px;
  position: relative;
}
.counter-style2 .counter-title {
  letter-spacing: 0.55px;
  float: left;
}
.counter-style2 span.counter {
  letter-spacing: 0.55px;
  float: left;
  margin-right: 10px;
}
.counter-style2 i {
  float: right;
  line-height: 26px;
  margin: 0 10px 0 0;
}
.counter-subheadline span {
  float: right;
}

.medium-icon {
  font-size: 40px !important;
  margin-bottom: 15px !important;
}
</style>
