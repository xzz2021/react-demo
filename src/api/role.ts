


import xzzfetch from "./myfetch";

export const addrole = async (role: {}) => {
    let res = await xzzfetch('roles/create', {body: role})
    return res
}

export const getrole = async () => {
    let res = await xzzfetch('roles/getall', {method: 'get'})
    return res
}