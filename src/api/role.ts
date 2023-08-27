


import xzzfetch from "./myfetch";

export const addrole = async (role: {}) => {
    let res = await xzzfetch('roles/create', {body: role})
    return res
}

export const getrole = async () => {
    let res = await xzzfetch('roles/getall', {method: 'get'})
    return res
}


export const deleterole = async (id: any) => {
    let res = await xzzfetch(`roles/${id}`, {method: 'delete'})
    return res
}


export const modifyrole = async (id: any, params: {}) => {
    let res = await xzzfetch(`roles/${id}`, {method: 'patch', params})
    return res
}