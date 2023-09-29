
const initalState = [{
    rolesData: []
}]

export const rolesReducer =  (state: any, action: any ) => {
    switch(action.type){
        case 'addnum222':  {
            let newState = {...state, isLogin: action.value}
            return newState
        };
        // case 'addnum2':  {
        //     let newState = {...state, age: state.age + 1}
        //     setTimeout(() =>{

        //         return newState
        //     }, 2000)
        // };
        default : return initalState;
    }
    // throw new Error('action type 不存在')
}