

//  使用combine进行reducer合并方案
// export default theDefaultReducer = (state = 0, action) => state
// export const firstNamedReducer = (state = 1, action) => state
// export const secondNamedReducer = (state = 2, action) => state

import { combineReducers } from 'redux'
import { loginReducer } from '../page/login/reducer'
import { rolesReducer } from '../page/roles/reducer'
// import theDefaultReducer, {firstNamedReducer,secondNamedReducer} from './reducers'



const initalState = {
    age: 18
}

interface actionType {
    type: string;
    value?: any;
}




const mainReducer =  (state: any = initalState, action: actionType ) => {
    switch(action.type){
        case 'addnum':  {
            let newState = {...state, age: state.age + 1}
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

const reducersAssign = {
    mainReducer,
    loginReducer,
    rolesReducer,
}

 const rootReducer = combineReducers(reducersAssign)

 export default rootReducer
