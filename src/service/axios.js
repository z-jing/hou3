/**
 * 对Axios二次封装
 */
import axios from 'axios';
import {Message}from 'iview';

// 全局的默认配置
axios.defaults.timeout = 20000;
axios.defaults.baseURL = '';
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}

let cancel, promiseArr = {};
const CancelToken = axios.CancelToken;

/**
 * @description 请求拦截，这里处理了重复请求和超时
 */
axios.interceptors.request.use(config => {
    if(promiseArr[config.url]){
        promiseArr[config.url] = cancel
    }else{
        promiseArr[config.url] = cancel
    }
    return config;
}, err => {
    Message.error('连接超时');
    return Promise.reject(err);
});

/**
 * @description 拦截响应，处理错误消息提示
 */
axios.interceptors.response.use(response => {
    return response;
}, err => {
    console.warn('拦截到异常')
    console.error(err)

    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                Message.error('错误请求');
                break;
            case 403:
                Message.error('拒绝访问');
                break;
            case 404:
                Message.error('请求错误,未找到该资源');
                break;
            case 500:
                Message.error('服务器端出错');
                break;
            case 504:
                Message.error('网络超时');
                break;
            default:
                Message.error(`连接错误${error.response.status}`);
        }
    } else {
        Message.error('连接到服务器失败');
    }
    return Promise.reject(err);
});

export default {

    /**
     * get 请求
     */
    get(url, param){
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
                cancelToken: new CancelToken( c => { cancel = c })
            }).then( res => {
                resolve(res);
            })
        });
    },

    /**
     * post 请求
     * @param {*} url
     * @param {*} param
     */
    post(url, param){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: param,
                cancelToken: new CancelToken( c => { cancel = c })
            }).then(res => {
                resolve(res);
            })
        })
    },
}
