<template>
<div>
  <div class="mb-5" >
      <Header></Header>
  </div>
  <div class="container context">
    <router-view v-if="isRouterAlive" :key="$route.fullPath"/>
  </div>
  <div>
      <Footer></Footer>
  </div>
</div>
</template>

<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
export default {
  name: "App",
  provide(){
    return {
      reload: this.reload
    };
  },
  components: { Header, Footer },
  data(){
      return{
        isRouterAlive: true
      };
  },
  methods: {
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  },
}
</script>

<style scoped>
.container {
  min-height: 500px;
}
</style>
