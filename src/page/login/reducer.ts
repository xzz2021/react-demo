
const initalState = {
    isLoginPage: true,
    isLogin: false,
}

export const loginReducer =  (state: any = initalState, action: any ) => {
    switch(action.type){
        case 'changePage':  {
            let newState = {isLoginPage: !state.isLoginPage}
            return newState
        };
        case 'changeLoginStatus':  {
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