import axios from 'axios'
import qs from 'qs'
import { baseUrl, isFrom } from './../apis/api.js'
const baseURL = baseUrl
// 假设 api里定义了一个请求头类型 
const isFrom = isFrom
const headers = isFrom ? {'Content-Type': 'application/x-www-form-urlencoded'} : {'Content-Type': 'application/json', 'Accept': 'application/json'}
// axios实例
const instance = axios.create({
    baseURL,
    headers,
    timeout: 10000,
})
/**
 * get 请求数据进行修改  默认以对象形式传参
 */
function getDataConfig(data = {}) {
  if (typeof data !== 'object') return data
  const arr = []
  for (let key in data) {
      let res = `${key}=${data[key]}`
      arr.push(res)
  }
  const str = arr.join('&')
  return str
}
/**
 * 请求数据拦截
 */
instance.interceptors.request.use( config => {
    if (isForm && config.method === 'post') config.data = qs.stringify(config.data)
    // 此处应该行不通
    // if (config.method === 'get') config.data = getDataConfig(config.data)
    return config
}, error => {
    return Promise.reject(error)
})
/**
 * 响应数据拦截
 */
instance.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
}) 
const fetch = {
  post(url, request, status = '0000') {
      return new Promise((resolve, reject) => {
          instance({
              method: 'post',
              url,
              request,
          }).then( response => {
              const res = response.data
              // 正确
              if (res && response.status === status) {
                  resolve(res)
              }
              //错误
              reject(res)
          }).catch(error => {
              //错误
              reject(error)
          })
      })
  },
  get(url, request, status = '0000') {
      const data = getDataConfig(request)
      return new Promise((resolve, reject) => {
          instance({
              method: 'get',
              url: url + '?' + data     
          }).then(response => {
              const res = response.data
              if (res && response.status === status) {
                  response(res)
              }          
              resject(res)
          }).catch(error => {
              reject(error)
          })
      })
  }
}
export default fetchs