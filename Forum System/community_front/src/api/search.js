import request from '@/utils/request'


export function searchByKeyword(query) {
  return request({
    url: `/search`,
    method: 'get',
    params: {
      keyword: query.keyword,
      pageNum: query.pageNum,
      pageSize: query.pageSize
    }
  })
}
