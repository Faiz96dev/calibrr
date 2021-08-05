<template>
  <div v-if="filteredImagesArray" class="image-container">
    <image-item @openImage="((url)=>openImage(url))" v-for="image in filteredImagesArray" :image-data="image"
                :key="image.id"/>
  </div>
</template>

<script>
import ImageItem from "@/components/ImageItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'ImageContainer',
  components: {ImageItem},
  props: {
    msg: String
  },
  mounted() {
    this.fetchImages()
  },
  methods: {
    ...mapActions("images", ["fetchImages"]),

    openImage(url) {
      window.open(url, '_blank');
    }
  },
  computed: {
    ...mapGetters('images', ['getImages']),
    filteredImagesArray() {
      return this.getImages
    }
  }
}
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
