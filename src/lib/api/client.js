import axios from 'axios';

const client = axios.create();

/*
    글로벌 설정 예시:
    // API 주소를 다른 곳으로 사용함
    client.defaults.baseURL = 'http://http://3.36.106.50:8001/'
    //헤더 설정
    //인터셉터 설정
*/
//API 주소 다른 곳으로 사용
client.defaults.baseURL = 'http://3.36.106.50:8001/';
//헤더 설정
// client.defaults.headers.common['Authorization'] = '';
//인터셉터 설정
axios.interceptors.response.use(
  (response) => {
    //요청 성공 시 특정 작업 수행
    return response;
  },
  (error) => {
    //요청 실패 시 특정 작업 수행
    return Promise.reject(error);
  },
);

export default client;
