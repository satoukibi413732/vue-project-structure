import axios from 'axios';
import { Loading, Notification } from 'element-ui';
import router from '@/router';
import Config from '../../public/config/config';

// 加载全局的loading
let loadingInstance = null;
let baseURL = '';
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  //开发环境
  baseURL = Config.DevBaseUrl;
} else if (process.env.NODE_ENV === 'test') {
  //测试环境
  baseURL = Config.TestBaseUrl;
} else if (process.env.NODE_ENV === 'production') {
  //生产环境
  baseURL = Config.ProductionBaseUrl;
}
const instance = axios.create({
  //创建axios实例，设置请求的默认配置
  // 设置超时时间30s
  timeout: 30000,
  baseURL: baseURL + '/api',
});
// 文档中的统一设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json';

let httpCode = {
  //http状态码信息
  ...Config.httpCode,
};

/** 添加请求拦截器 **/
instance.interceptors.request.use(
  config => {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token') || '';
    loadingInstance = Loading.service({
      // 发起请求时加载全局loading，请求失败或有响应时会关闭
      lock: true,
      text: '努力加载中……',
      background: 'rgba(0, 0, 0, 0.5)',
    });
    // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
    if (config.url.includes('pur/contract/export')) {
      config.headers['responseType'] = 'blob';
    }
    // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
    if (config.url.includes('pur/contract/upload')) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

/** 添加响应拦截器  **/
instance.interceptors.response.use(
  response => {
    loadingInstance.close();
    if (response.data.code === '0') {
      // 响应结果里的status,可改
      return Promise.resolve(response.data);
    } else if (response.data.code === '4333') {
      localStorage.clear();
      router.replace({
        path: `/login`,
      });
    } else {
      Notification({
        message: response.data.message,
        type: 'error',
      });
      return Promise.reject(response.data.message);
    }
  },
  error => {
    loadingInstance.close();
    if (error.response) {
      // 根据请求失败的http状态码去给用户相应的提示
      let tips =
        error.response.status in httpCode
          ? httpCode[error.response.status]
          : error.response.data.message;
      Notification({
        message: tips,
        type: 'error',
      });
      if (error.response.status === 401) {
        // token或者登陆失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
        router.push({
          path: `/login`,
        });
      }
      return Promise.reject(error);
    } else {
      Notification({
        message: '请求超时, 请刷新重试',
        type: 'error',
      });
      return Promise.reject(new Error('请求超时, 请刷新重试'));
    }
  },
);

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config,
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config,
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
