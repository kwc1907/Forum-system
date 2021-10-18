<template>
  <div>
    <div class="box">  <strong>🔔公告栏</strong>
      <div v-for="(item, index) in billboard" :key="index" class="block">
      {{ parseInt(index) + 1 }}  {{ item.content }} 
      <small><el-row type="flex" justify="end">{{ item.createTime | date }}</el-row></small>
      <hr/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <TopicList></TopicList>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
    
  </div>
</template>

<script>
import { getBillboard } from "@/api/billboard";
import CardBar from "@/views/card/CardBar"
import TopicList from "@/views/post/Index"

export default {
  name: "Home",
  components:{CardBar,TopicList},
  data() {
    return {
      billboard:[]
    };
  },
  created() {
    this.fetchBillboard();
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then(response => {
        const { data } = response
        this.billboard = data
      });
  }},
};
</script>
<style>
.ms{
  text-align: right;
}
</style>
