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

export function apiGetConfig () {
  return request({
    url: '/api/auth/entry'
  })
}

export function apiAuth (data) {
  return request({
    url: '/api/oauth/authorize',
    params: data,
    headers: {
      accept: '*/*'
    }
  })
}
