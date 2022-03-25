import request from '@/utils/axios';

export function getImageTypeApi() {
  return request({
    url: 'GetImageType',
  });
}
