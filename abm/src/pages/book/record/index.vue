<template>
  <div class="book-record-warp">
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
            <label>时间</label>
          </th>
          <th>
            <label>操作</label>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in recordList" v-bind:key="record">
          <td>
            <label>{{record.name}}</label>
          </td>
          <td>
            <label>{{record.description}}</label>
          </td>
          <td>
            <label>{{record.press}}</label>
          </td>
          <td>
            <label>{{record.status}}</label>
          </td>
          <td>
            <label>{{record.owner}}</label>
          </td>
          <td>
            <label>{{record.date}}</label>
          </td>
          <td>
            <label>{{record.operate}}</label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recordList: []
    }
  }
}
</script>

<style>

</style>
