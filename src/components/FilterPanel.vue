<template>
  <div class="filter-wrapper">
    <order-panel/>
    <SearchBar/>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import OrderPanel from "@/components/OrderPanel";

export default {
  name: 'FilterPanel',
  components: {
    OrderPanel,
    SearchBar
  },
  methods: {}
}
</script>

<style scoped>
.filter-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 80%;
}
</style>
