
import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
const host = 'https://rmall.ukelink.net'
fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })

  request.headers = {
    'X-Tag': 'flyio',
    'content-type': 'application/json'
  }

  let authParams = {
    'categoryType': 'SaleGoodsType@sim',
    'streamNo': 'wxapp153570682909641893',
    'reqSource': 'MALL_H5',
    'appid': 'string',
    'timestamp': new Date().getTime(),
    'sign': 'string'
  }

  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === '') {
      delete request.body[val]
    }
  })
  request.body = {
    ...request.body,
    ...authParams
  }
  return request
})

fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    return response.data
  },
  (err) => {
    console.log(err)
    wx.hideLoading()
    if (err) {
      return '请求失败'
    }
  }
)

fly.config.baseURL = host

export default fly
