



const initalState = {
    age: 18
}

interface actionType {
    type: string;
    value?: any;
}

export default (state: any = initalState, action: actionType ) => {
    switch(action.type){
        case 'addnum':  {
            let newState = {...state, age: state.age + 1}
            return newState
        }
        default : return initalState;
    }
    throw new Error('action type 不存在')
}

