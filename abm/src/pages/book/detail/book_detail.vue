<template>
  <div class="counter-warp">
    
  </div>
</template>

<script>
import pageUtil from './utils/pageUtil'

export default {
  computed: {
    count () {
      return 1
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  },
  created () {
    let bookId = pageUtil.getCurrentPagequeryBykey('id')
    this.$fly.request({
      method:"het", //post/get 请求方式
      url:"abm/v1/getBookDetail",
      body:{
        id: bookId
      }
    }).then(res =>{
      console.log(res)
    })
  }
}
</script>