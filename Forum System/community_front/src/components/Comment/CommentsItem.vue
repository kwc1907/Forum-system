<template>
  <article class="media">
    <figure class="media-left image is-48x48">
      <img :src="require('@/assets/image/default.jpeg')">
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ comment.username }}</strong>
          <small class="ml-2">{{ comment.createTime | date }}</small>
          <br />
          {{ comment.content }}
          <a v-if="token && user.id ===comment.userId">
            <small @click="handleDelete(comment.id)"><el-row type="flex" justify="end">删除</el-row></small>
          </a>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { deleteComment } from '@/api/comment'
import { mapGetters } from 'vuex'
export default {
  name: 'LvCommentsItem',
  inject: ["reload"],
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'token','user'
    ])
  },
  methods:{
     handleDelete(id){
       deleteComment(id).then(value =>{
         const { message } = value
        alert(message)
        this.reload() })
     }
  }
}
</script>


