<template>
  <MotionCom />
</template>
<script>
import MotionCom from "@/components/ourworks/MotionCom.vue";
export default {
  name: "O_MotionpostView",
  components: { MotionCom },
  data() {
    return {
      motion: [],
    };
  },
};
</script>

<style>
.motionfooter {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
