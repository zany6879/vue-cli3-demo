// 字符串截取小数点后N位
let SubString = (value, num) => {
  if (!value || value === 0) {
    return 0
  } else {
    let s = value + ''
    if (s.indexOf('.') !== -1) {
      return s.substring(0, s.indexOf('.') + num)
    } else {
      return s
    }
  }
}
// 时分秒
let hms = value => {
  var date = new Date(value) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var h = date.getHours()
  h = h < 10 ? '0' + h : h
  var m = date.getMinutes()
  m = m < 10 ? '0' + m : m
  var s = date.getSeconds()
  s = s < 10 ? '0' + s : s
  return h + ':' + m + ':' + s
}
// 年月日时分秒
let yndhms = value => {
  var date = new Date(value) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = date.getDate()
  D = D < 10 ? '0' + D : D
  var h = date.getHours()
  h = h < 10 ? '0' + h : h
  var m = date.getMinutes()
  m = m < 10 ? '0' + m : m
  var s = date.getSeconds()
  s = s < 10 ? '0' + s : s
  return Y + M + D + h + ':' + m + ':' + s
}
// 手机号加密
let encryptionphone = value => {
  return value.substr(0, 3) + '****' + value.substr(-4)
}
// 邮箱加密
let encryptionmail = value => {
  return value.substr(0, 3) + '****' + value.substr(-9)
}
export default {
  SubString, hms, yndhms, encryptionphone, encryptionmail
}
