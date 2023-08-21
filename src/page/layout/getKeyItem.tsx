




// 通过antd菜单点击返回的keyPath获得当前item路由的相关信息

function getCurItemArr(menuArr: any[], key: string){


     return menuArr.filter(item => item.key == key);
}


export const  getKeyitem1 = (menuArr: any[], keyArr: []) => {
       let newkeyArr = keyArr.reverse()
        let newItemArr: any[] = []
        keyArr.forEach((item,index)=> {
            if(index == 0){
            newItemArr = getCurItemArr(menuArr, newkeyArr[index])
            }else{
                let tempItemArr = newItemArr[0].children
                if(tempItemArr){
                newItemArr = getCurItemArr(tempItemArr, newkeyArr[index]) 
                }else{
                    newItemArr = []
                }
            }
        })
        return  newItemArr[0] || []
  }

  //  使用递归进行简化

  const  getKeyitem: any = (menuArr: any[], keyPath: any[]) => {
    let lastKey = keyPath.slice(-1)
    let itemArr = menuArr.filter(item => item.key == lastKey) 
    if(keyPath.length == 1) return itemArr[0] || {}
        let childArr = itemArr[0].children
    return childArr ? getKeyitem(childArr, keyPath.slice(0,-1)): {}
  }


  export { getKeyitem } 