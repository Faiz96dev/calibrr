<template>
  <div @mouseover="showInfo = true" @mouseleave="showInfo = false" @click="openImage()" class="image-content-wrapper">
    <img class="image" :src="imageData.webformatURL"/>
    <transition name="fade">
      <div v-if="showInfo" class="image-info-container">
        <div class="social-container">
          <p>Likes: {{ imageData.likes }}</p>
          <p>Comments: {{ imageData.comments }}</p>
        </div>
        <div class="tags-container">
          <div v-for="tag in tags" :key="tag" class="tag"><p>{{ tag }}</p></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'imageItem',
  data() {
    return {
      showInfo: false
    }
  },
  props: {
    imageData: {
      type: Object,
    }
  },
  methods: {
    showImageInfo() {
      this.showInfo = true
    },
    openImage() {
      this.$emit("openImage", this.imageData.pageURL);
    }
  },
  computed: {
    tags() {
      return this.imageData.tags.split(',')
    }
  }
}
</script>

<style scoped>
.tags-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.tag {
  background-color: grey;
  padding: 5px;
  color: whitesmoke;
  margin: 3px;

  border-radius: 10px;
}

.tag p {
  font-size: 13px;
}

.image {
  border-radius: 10px;
  height: 280px;
  width: 280px
}

.image-content-wrapper {
  cursor: pointer;
  margin: 20px;
  padding: 10px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.image-info-container {
  position: absolute;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8169642857142857) 0%, rgba(101, 99, 99, 0.7805497198879552) 41%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 280px;
  width: 280px;
  border-radius: 10px;
  align-items: center;
}

p {
  color: whitesmoke;
  font-size: 15px;
  font-weight: bold;
  font-family: "Avenir Next", fantasy;
}

.social-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 80%
}
</style>
