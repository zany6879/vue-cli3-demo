import request from './../plugins/axios'
export default {
// 获取币种列表
  getCurrency (hideloading) {
    return new Promise(resolve => {
      request.post('/ubcoin-notice/currencyMsg/getCurrency', {}, {}, hideloading).then(
        res => {
          resolve(res)
        }
      )
    })
  }
}
