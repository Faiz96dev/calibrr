<template>
  <div class="main-container" id="app">

    <router-view/>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

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


