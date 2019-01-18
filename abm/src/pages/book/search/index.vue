<template>
  <div class="book-search-warp">
    <p>
      <label class="label-book-name">书籍名称:</label><input class="input-book-name" v-model="bookName"/>
    </p>
    <p>
      <mp-button @click="searchBook()" type="default" size="large" btnClass="mb15">查找</mp-button>
    </p>
    <div class="book-list">
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
              <mp-button @click="searchBook()" type="default" size="large" btnClass="mb15">查看详情</mp-button>
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
      bookList: []
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
