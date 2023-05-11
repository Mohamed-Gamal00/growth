<template>
  <div class="home">
    <SecretImage />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
// import HomeCom from "@/components/home/HomeCom.vue";
const SecretImage = defineAsyncComponent({
  loader: () => import("@/components/home/HomeCom.vue"),
});
export default {
  name: "HomeView",
  components: {
    // HomeCom,
    SecretImage,
  },
};
</script>
