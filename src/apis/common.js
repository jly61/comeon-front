import request from '@/utils/request'

export function apiTest () {
  return request({
    url: '/api/phpinfo'
  })
}

export function apiGetPV () {
  return request({
    url: '/api/page/visits'
  })
}
