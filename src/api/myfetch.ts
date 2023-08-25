

    //对Fetch的封装：让其支持params/请求主体的格式化/请求地址的公共前缀 

import qs from "qs";


interface Initalconfig{
    body: null | undefined | Object;
    [propName: string]: any;

}

let baseURL: string = 'http://localhost:3000/'


 let inital: Initalconfig = {
    method: 'POST',  // 如果config不传method默认为POST
    params: null,
    body: null,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    // headers: { 'Content-Type': 'application/json;charset=utf-8'}, //Content-Type 客户端告诉服务器实际发送的数据类型
	// credentials: 'include', // include, *same-origin, omit
	// cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    // redirect: 'follow',
    // mode: "no-cors",
    // responseType: 'JSON',
    // referrerPolicy: 'no-referrer-when-downgrade' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}

//配置认证的标准token
let token = localStorage.getItem('authToken');
if (token) inital.headers = Object.assign(inital.headers, {'Authorization': "bearer " + token})

// 判断 是否是对象
const isPlainObject = function isPlainObject(obj:any) {
    let proto, Ctor;
    if (!obj || typeof obj !== "object") return false;
    proto = Object.getPrototypeOf(obj);
    if (!proto) return true;
    Ctor = proto.hasOwnProperty('constructor') && proto.constructor;
    return typeof Ctor === "function" && Ctor === Object;//构造函数是Object
    };


    // 先对body数据进行处理

// -----------------------------发送数据请求-------------------------------
const xzzfetch = (url: string, config: { [propName: string]: any}) => {
    return  new Promise((resolve, reject) => {


let {
    method,
    params,
    body,
    headers,
    responseType,
} = Object.assign({}, inital, config);//合并config



// 处理请求主体的数据格式{根据headers中的Content-Type处理成为指定的格式}
if (body != null) {
    if (isPlainObject(body)) {
        //  fetch   POST要求
        const  contentType = headers['Content-Type']
        //  普通表单数据  需要qs序列化
        if (contentType.includes('urlencoded')) body = qs.stringify(body);
        //  json数据   需要stringify格式化
        if (contentType.includes('json')) body = JSON.stringify(body);
    }
}


// 处理URL{格式校验 & 公共前缀 & 拼接params中的信息到URL的末尾}
if (typeof url !== "string") throw new TypeError( ` ${url} is not an string! ` )
if (!/^http(s?):\/\//i.test(url)) url = baseURL + url //判断是不是以http或者https开头,如果不是,就用baseurl拼起来

// 不转换param 数据===========
// if (params != null) {
//     if (isPlainObject(params)) {
//         params = qs.stringify(params)
//     }
//     url +=  `${url.includes('?')?'&':'?'}${params}` ;//拼接
// }





// 基于fetch请求数据
method = method.toUpperCase();
responseType &&  (responseType = responseType.toUpperCase())

config = {
    method,
    body,
    headers,
    responseType,
}
//-----------------------配置代理url-------------------manifest.json的match配置对应的接口域名,则不需要代理服务器-----
//  let url2 = `http://xzz2022.top:666/${url}`
 fetch(url, config).then((response) => {
    // console.log('response: ', response);
    let { status, statusText, ok } = response;

    if (ok) {
        let result;
        switch (responseType) {
            case 'TEXT':
                result = response.text();
                break;
            case 'JSON':
                result = response.json();
                break;
            case 'BLOB':
                result = response.blob();
                break;
            default: 
                result = response.json(); //当未配置responseType时,,默认为后端返回的是json数据
            break;
        }
        return result;
    }
    return response.json()
    // else{
    //     return response.body
    //     // return `ERROR CODE 异常, ${status},-----异常原因:${statusText}`
    // }
}).then(res => {
        resolve(res)

}).catch((reason) => {
    if(reason.includes('Failed to fetch')){
        reject('网络接口请求异常: 接口不存在或者未开启')
    }
    reject("网络接口请求异常-------具体原因是:"+ reason)

})
    })}

export default xzzfetch