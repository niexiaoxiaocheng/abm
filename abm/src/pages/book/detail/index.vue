<template>
  <div class="detail-warp">
    <div class="detail-content">
      <div class="detail-row">
        <label class="detail-name">书籍名称:</label><label class="detail-value" v-text="bookName"></label>
      </div>
      <div class="detail-row">
        <label class="detail-name">书籍所属人:</label><label class="detail-value" v-text="owner"></label>
      </div>
      <div class="detail-row">
        <label class="detail-name">书籍图片:</label>
        <div class="book-image">
          <img v-for="(index, image) in images" v-bind:key="index" :src="image.src" class="image-content"/>
        </div>
        <label class="detail-value" v-text="images"></label>
      </div>
      <div class="detail-row">
        <label class="detail-name">书籍介绍:</label><label class="detail-value" v-text="description"></label>
      </div>
      <div class="detail-row">
        <label class="detail-name">书籍出版社:</label><label class="detail-value" v-text="Press"></label>
      </div>
      <div class="detail-row">
        <label class="detail-name">书籍状态:</label><label class="detail-value" v-text="status"></label>
      </div>
    </div>
    <div class="book-operate">
      <mp-button type="default" size="large" btnClass="mb15">借书</mp-button>
      <mp-button type="default" size="large" btnClass="mb15">还书</mp-button>
    </div>
  </div>
</template>

<script>
import pageUtil from '../../../utils/pageUtil'
import mpButton from 'mpvue-weui/src/button'

export default {
  computed: {
    count () {
      return {
        bookName: '',
        owner: '',
        images: '',
        description: '',
        Press: '',
        status: ''
      }
    }
  },
  components: {
    mpButton
  },
  methods: {
  },
  created () {
    let bookId = pageUtil.getCurrentPagequeryBykey('id')
    console.info(bookId)
    // this.$fly.request({
    //   method:"het", //post/get 请求方式
    //   url:"abm/v1/getBookDetail",
    //   body:{
    //     id: bookId
    //   }
    // }).then(res =>{
    //   console.log(res)
    // })
  }
}
</script>