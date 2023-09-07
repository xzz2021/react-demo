


import xzzfetch from "./myfetch";

export const adduser = async (user: {}) => {
    let res = await xzzfetch('users/create', {body: user})
    return res
}

export const getuser = async () => {
    let res = await xzzfetch('users/getall', {method: 'get'})
    return res
}


export const deleteuser = async (username: string) => {
    let res = await xzzfetch(`users/delete`, {method: 'delete',body:{username}})
    return res
}


export const modifyuser = async (id: any, params: {}) => {
    let res = await xzzfetch(`users/${id}`, {method: 'patch', params})
    return res
}