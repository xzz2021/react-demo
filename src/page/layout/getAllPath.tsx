

interface menuType {
    path?: string;
    [propsname: string]: any
    children?: menuType[]
}
const  getAllPath: (arr: menuType[]) => string[] = (menuArr: menuType[]) => {
    let pathArr:string[] = []
    menuArr.forEach(item => {
        item.path && pathArr.push(item.path)
        let childArr: menuType[] = item.children || []
        if(childArr.length > 0) {
            let childPathArr: string[] = getAllPath(childArr)
            pathArr = pathArr.concat(childPathArr) 
        } 
    })
    return pathArr
  }

  export { getAllPath } 