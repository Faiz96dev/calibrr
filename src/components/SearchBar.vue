<template>
  <div class="search-bar">
    <input class="search-input" @input="debounceInput" v-model="search" placeholder="Start type to sort by tags...">
  </div>
</template>

<script>
import _ from 'lodash'
import {mapMutations} from "vuex";

export default {
  data() {
    return {
      search: '',
    }
  },
  name: 'SearchBar',
  props: {},
  methods: {
    ...mapMutations('images', ['SET_FILTER_VAL']),
    debounceInput: _.debounce(function () {
      this.SET_FILTER_VAL(this.search)
    }, 300)
  }
}
</script>

<style scoped>

.search-input {
  width: 250px;
  border-radius: 10px;
  border: 1px solid grey;
  outline: none;
  padding: 10px;
}
</style>
