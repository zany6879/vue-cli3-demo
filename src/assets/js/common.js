const util = {}

// 本地或者session存取数据
util.setSession = function (key, obj) {
  window.sessionStorage.setItem(key, JSON.stringify(obj))
}// 设置session
util.getSession = function (key) {
  return JSON.parse(sessionStorage.getItem(key))
}// 获取session
util.removeSession = function (key) {
  window.sessionStorage.removeItem(key)
}// 删除session
util.setLocal = function (key, obj) {
  window.localStorage.setItem(key, JSON.stringify(obj))
}// 设置本地数据
util.getLocal = function (key) {
  return JSON.parse(window.localStorage.getItem(key))
}// 获取本地数据
util.removeLocal = function (key) {
  window.localStorage.removeLocal(key)
}
export default util
