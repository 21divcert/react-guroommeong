import axios from 'axios';

const baseURL = 'http://10.95.34.200/api';

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json; charset=utf-8',
  },
});

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  async response => {
    console.log(`Response from ${response.config.baseURL}${response.config.url}`);
    return response;
  },
  error => {
    console.log(error);
    if (error.response) {
      return Promise.reject(new Error(`서버로부터 응답을 받지 못했습니다.`));
    } else if (error.request) {
      return Promise.reject(new Error('서버로부터 응답을 받지 못했습니다.'));
    } else {
      return Promise.reject(new Error('요청을 설정하는 도중 문제가 발생했습니다.'));
    }
  },
);

// @ts-ignore
export default axiosInstance;
