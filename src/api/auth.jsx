import xzzfetch from "./myfetch";


//  携带tokne向服务器验证登录是否有效
export const xzzGetinfo = async () => {
    let res = await xzzfetch('userinfo/getinfo', {method: 'get'})
    return  res?.data?.username ? true : false

}