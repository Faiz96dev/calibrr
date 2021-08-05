<template>
  <div class="main-container" id="app">
    <filter-panel/>
    <image-container/>
  </div>
</template>

<script>
import ImageContainer from "@/components/ImageContainer";
import FilterPanel from "@/components/FilterPanel";

export default {
  name: 'App',
  components: {
    FilterPanel,
    ImageContainer,
  }
}
</script>
<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;

}

body {
  margin: 0;
  padding: 0;
  background-color: #e3e3e3;
}

p {
  margin-bottom: 0;
  margin-top: 0;
}
</style>


