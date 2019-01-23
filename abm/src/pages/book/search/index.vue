<template>
  <div class="book-search-warp">
    <p class="search-warp">
      <label class="label-book-name">书籍名称:</label><input class="input-book-name" v-model="bookName"/>
      <mp-button @click="searchBook()" type="default" size="large" btnClass="mb15">查找</mp-button>
    </p>
    <div class="book-list hide">
      <table>
        <thead>
          <tr>
            <th>
              <label>书籍名称</label>
            </th>
            <th>
              <label>书籍简介</label>
            </th>
            <th>
              <label>书籍出版社</label>
            </th>
            <th>
              <label>书籍状态</label>
            </th>
            <th>
              <label>书籍所属人</label>
            </th>
            <th>
              <label>操作</label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in bookList" v-bind:key="book.id">
            <th>
              <label>{{book.name}}</label>
            </th>
            <th>
              <label>{{book.description}}</label>
            </th>
            <th>
              <label>{{book.press}}</label>
            </th>
            <th>
              <label>{{book.status}}</label>
            </th>
            <th>
              <label>{{book.owner}}</label>
            </th>
            <th>
              <mp-button @click="bookDetail(book.id)" type="default" size="large" btnClass="mb15">查看详情</mp-button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import mpButton from 'mpvue-weui/src/button'

export default {
  components: {
    mpButton
  },
  data () {
    return {
      bookName: '',
      bookList: [],
      pagesize: 10,
      pageIndex: 1,
      bookTotal: ''
    }
  },
  methods: {
    bookDetail (id) {
      const url = '../detail/main?id=' + id
      wx.navigateTo({ url })
    },
    searchBook () {
      let that = this
      that.$fly.request({
        method:"get", 
        url:"abm/v1/searchBook",
        body:{
          name: that.bookName,
          pagesize: that.pagesize,
          pageIndex: 1
        }
      }).then(res =>{
        that.bookList = res.data
      })
    },
    searchBookMore () {
      let maxPage = Math.floor(this.bookTotal / this.pagesize)
      let that = this
      if (maxPage > this.pageIndex) {
        that.$fly.request({
          method:"get", 
          url:"abm/v1/searchBook",
          body:{
            name: that.bookName,
            pagesize: that.pagesize,
            pageIndex: that.pageIndex + 1
          }
        }).then(res =>{
          let data = res.data
          that.bookList.push(data)
        })
      } else {
        console.log('没有更多了')
      }
    }
  },
  // 上拉加载
  onReachBottom: function () {
    this.searchBookMore()
  },
}
</script>

<style lang="scss" scoped>
  .book-search-warp{
    .search-warp {
      display: block;
    }
    .hide {
      display: none;
    }
  }
</style>
