import request from '@/utils/axios';

export function getImageTypeApi() {
  return request({
    url: 'GetImageType',
  });
}

export function getImageListApi(cid, pageNo = 1, pageSize = 20) {
  return request({
    url: 'GetImage',
    params: {
      cid: cid,
      start: pageNo * pageSize,
      count: pageSize,
    },
  });
}
