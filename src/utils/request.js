import axios from 'axios'

// 创建axios实例
const instance = axios.create({
  baseURL: '', // 接口地址
  method: 'GET',
  timeout: 20000, // 请求超时时间
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8'
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

const request = options => {
  return instance.request(options).then(res => {
    return res
  }).catch(reason => {
    throw new Error(reason)
  })
}

export default request
