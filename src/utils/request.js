import axios from 'axios'
const request = axios.create({
    baseURL:'http://localhost:8081',
    timeout:10000
})

// request.interceptors.request.use(config=>{
//     // config.headers['Content-TYpe']='appliation/json;charset=utf-8'
//     return config;
// },error=>{
//     console.error('request error:' + error);
//     return Promise.reject(error)
// });

// request.interceptors.response.use(
//     response=>{
//     let res = Response.data;
//     if( typeof res ==='string'){
//         res = res?JSON.parse(res):res
//     }
//     return res;
// },error=>{
//     console.error('request error:' + error);
//     return Promise.reject(error)
// })

export default request