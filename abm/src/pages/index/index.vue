<template>
  <div class="grid-content">
    <mp-grid :gridData="gridData"></mp-grid>
  </div>
</template>

<script>
import mpGrid from 'mpvue-weui/src/grid';

export default {
  data () {
    return {
      gridData: [
        { src: '/static/images/icon_nav_button.png', name: '借书记录', url: '/pages/book/detail/main' },
        { src: '/static/images/icon_nav_cell.png', name: '当前借书', url: '/pages/book/detail/main'  },
        { src: '/static/images/icon_nav_toast.png', name: '搜索书籍', url: '/pages/book/detail/main'  },
        { src: '/static/images/icon_nav_dialog.png', name: '智能推荐', url: '/pages/book/detail/main'  },
        { src: '/static/images/icon_nav_button.png', name: '图书借阅', url: '/pages/book/detail/main'  },
        { src: '/static/images/icon_nav_panel.png', name: '图书捐赠', url: '/pages/book/detail/main'  },
        { src: '/static/images/icon_nav_article.png', name: '新书登记', url: '/pages/book/detail/main'  },
        { src: '/static/images/icon_nav_actionSheet.png', name: '查找图书', url: '/pages/book/detail/main'  },
        { src: '/static/images/icon_nav_icons.png', name: 'Icons', url: '/pages/book/detail/main'  }
      ]
    }
  },

  components: {
    mpGrid
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>

</style>
