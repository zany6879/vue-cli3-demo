'use strict'

import Vue from 'vue'
import axios from 'axios'
import router from './../router'
import store from './../store'
import qs from 'qs'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.baseURL || process.env.VUE_APP_apiUrl || '',
  timeout: 60 * 1000 // Timeout
  // withCredentials: true // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (!config.hideloading) {
      alert('loading')
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    alert('clear-loading')
    if (response.status === 200) {
      return response
    }
  },
  function (error) {
    // Do something with response error
    switch (error.response.status) {
      case 400:
        alert('错误请求')
        break
      case 401:
        store.commit({
          type: 'getisLogin',
          status: false
        })
        window.sessionStorage.clear()
        router.push({
          path: '/Login'
        })
        alert('授权过期，请重新登录')
        break
      case 403:
        alert('拒绝访问')
        break
      case 404:
        alert('请求错误，未找到该资源')
        break
      case 405:
        alert('请求方法未允许')
        break
      case 408:
        alert('请求超时')
        break
      case 500:
        alert('服务器端出错')
        break
      case 501:
        alert('网络未实现')
        break
      case 502:
        alert('网络错误')
        break
      case 503:
        alert('服务不可用')
        break
      case 504:
        alert('网络超时')
        break
      case 505:
        alert('http版本不支持该请求')
        break
      default:
        alert(error.message)
        break
    }
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      // get请求
      get (url, params = {}, hideloading) {
        return new Promise((resolve, reject) => {
          _axios({
            method: 'get', // 请求类型，默认是get
            url: url,
            params: params,
            hideloading: hideloading
          })
            .then(response => {
              // 把请求到的数据发到引用请求的地方
              resolve(response.data)
            })
            .catch(error => {
              // 返回异常
              reject(error)
            })
        })
      },
      // 获取arraybuffer(get请求)
      getArraybuffer (url, params = {}, data, hideloading) {
        return new Promise((resolve, reject) => {
          _axios({
            method: 'get', // 请求类型，默认是get
            url: url,
            responseType: 'arraybuffer',
            params: params,
            data: qs.stringify(data),
            hideloading: hideloading
          })
            .then(response => {
              // 把请求到的数据发到引用请求的地方
              resolve(response.data)
            })
            .catch(error => {
              // 返回异常
              reject(error)
            })
        })
      },
      // post请求
      post (url, data = {}, params, hideloading) {
        return new Promise((resolve, reject) => {
          _axios({
            method: 'post', // 请求类型，默认是get
            url: url,
            data: qs.stringify(data),
            params: params,
            hideloading: hideloading
          })
            .then(response => {
              // 把请求到的数据发到引用请求的地方
              resolve(response.data)
            })
            .catch(error => {
              // 返回异常
              reject(error)
            })
        })
      }
    },
    $axios: {
      // get请求
      get (url, params = {}, hideloading) {
        return new Promise((resolve, reject) => {
          _axios({
            method: 'get', // 请求类型，默认是get
            url: url,
            params: params,
            hideloading: hideloading
          })
            .then(response => {
              // 把请求到的数据发到引用请求的地方
              resolve(response.data)
            })
            .catch(error => {
              // 返回异常
              reject(error)
            })
        })
      },
      // 获取arraybuffer(get请求)
      getArraybuffer (url, params = {}, data, hideloading) {
        return new Promise((resolve, reject) => {
          _axios({
            method: 'get', // 请求类型，默认是get
            url: url,
            responseType: 'arraybuffer',
            params: params,
            data: qs.stringify(data),
            hideloading: hideloading
          })
            .then(response => {
              // 把请求到的数据发到引用请求的地方
              resolve(response.data)
            })
            .catch(error => {
              // 返回异常
              reject(error)
            })
        })
      },
      // post请求
      post (url, data = {}, params, hideloading) {
        return new Promise((resolve, reject) => {
          _axios({
            method: 'post', // 请求类型，默认是get
            url: url,
            data: qs.stringify(data),
            params: params,
            hideloading: hideloading
          })
            .then(response => {
              // 把请求到的数据发到引用请求的地方
              resolve(response.data)
            })
            .catch(error => {
              // 返回异常
              reject(error)
            })
        })
      }
    }
  })
}

Vue.use(Plugin)

export default {
  // get请求
  get (url, params = {}, hideloading) {
    return new Promise((resolve, reject) => {
      _axios({
        method: 'get', // 请求类型，默认是get
        url: url,
        params: params,
        hideloading: hideloading
      })
        .then(response => {
          // 把请求到的数据发到引用请求的地方
          resolve(response.data)
        })
        .catch(error => {
          // 返回异常
          reject(error)
        })
    })
  },
  // 获取arraybuffer(get请求)
  getArraybuffer (url, params = {}, data, hideloading) {
    return new Promise((resolve, reject) => {
      _axios({
        method: 'get', // 请求类型，默认是get
        url: url,
        responseType: 'arraybuffer',
        params: params,
        data: qs.stringify(data),
        hideloading: hideloading
      })
        .then(response => {
          // 把请求到的数据发到引用请求的地方
          resolve(response.data)
        })
        .catch(error => {
          // 返回异常
          reject(error)
        })
    })
  },
  // post请求
  post (url, data = {}, params, hideloading) {
    return new Promise((resolve, reject) => {
      _axios({
        method: 'post', // 请求类型，默认是get
        url: url,
        data: qs.stringify(data),
        params: params,
        hideloading: hideloading
      })
        .then(response => {
          // 把请求到的数据发到引用请求的地方
          resolve(response.data)
        })
        .catch(error => {
          // 返回异常
          reject(error)
        })
    })
  }

}
