
const initial_state={
    currentUser:null
}


 const authReducer=(state=initial_state,action)=>{

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                currentUser:action.user
            }
    
        default:
            return state;
    }
}

export default  authReducer;