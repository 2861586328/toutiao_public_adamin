/**
 *基于 axios 封装的请求模块
 */
import axios from 'axios'
// 谁要时使用谁就加载

// 创建一个 axios实例子 通过这个实例去发请求
const request = axios.create({
  baseUrl: 'hhtp://ttapi.research.itcast.cn/' // 请求的基础路径
})
// 导出请求方法
export default request

/**
 * 谁要试用谁就调用
 *  import request from 'request.js'
 *  request ({
 *      method: '',
 *      url: '',
 *  })
 */

/**
 * 请求拦截器
 * 响应拦截器
 */
