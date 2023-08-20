
import xzzfetch from "./myfetch";

export const xzzlogin = async (account: any) => {
    let res = await xzzfetch('auth/login', {body: account})
    return res
}


export const xzzRegister = async (account: any) => {
    let res = await xzzfetch('auth/register', {body: account})
    return res
}