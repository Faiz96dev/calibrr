<template>
  <div class="main-container">
    <filter-panel/>
    <image-container/>
  </div>

</template>

<script>
import FilterPanel from "@/components/FilterPanel";
import ImageContainer from "@/components/ImageContainer";

export default {
  name: "MainBoard",
  components:{
    FilterPanel,
    ImageContainer
  }
}
</script>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>