import xzzfetch from "./myfetch";


//  携带tokne向服务器验证登录是否有效
export const xzzGetinfo = async () => {
    let res = await xzzfetch('userinfo/getinfo', {method: 'get'})
    if(res?.data?.username){
        // let role = res.data.role
        // role = role.map((item2) => item2.name)
        // console.log("🚀 ~ file: auth.jsx:11 ~ xzzGetinfo ~ role:", role)
        // localStorage.setItem('curRole', role.toString())
        return true
    }
    return false
}