import request from '@/utils/request'

export function userRegister(userDTO) {
  return request({
    url: '/ums/user/register',
    method: 'post',
    data: userDTO
  })
}

export function login(data) {
    return request({
      url: '/ums/user/login',
      method: 'post',
      data: data
    })
  }

  // 登录后获取前台用户信息
export function getUserInfo() {
    return request({
      url: '/ums/user/info',
      method: 'get'
    })
  }

  // 前台用户注销
export function logout() {
    return request({
      url: '/ums/user/logout'
    })
}
