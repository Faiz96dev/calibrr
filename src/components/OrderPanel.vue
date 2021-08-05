<template>
  <div class="sort-wrapper">
    <select class="custom-selector" @change="changeOrder" v-model="ordering">
      <option disabled value="">Select ordering</option>
      <option value="RESET">Reset</option>
      <option :value="order.value" v-for="order in orderTypes" :key="order.id">{{ order.title }}</option>
    </select>
  </div>
</template>

<script>

import {orderTypes} from "@/helpers/filterHelper";
import {mapMutations} from "vuex";

export default {
  name: 'OrderPanel',
  data() {
    return {
      orderTypes,
      ordering: ''
    }
  },
  components: {},
  methods: {
    ...mapMutations('images', ['SET_ORDER_VAL']),
    changeOrder() {
      this.SET_ORDER_VAL(this.ordering)
      if (this.ordering === 'RESET') this.ordering = ''
    }
  },

}
</script>

<style scoped>
.custom-selector {
  width: 250px;
  border-radius: 10px;
  outline: none;
  padding: 10px;
}
</style>
