import { LOAD_LOGGED_IN_USER_INFO } from '../actionCreators/UserActionCreators';

const User = (state = {}, action) => {
    const {type, payload} = action;
    switch(type){
        case LOAD_LOGGED_IN_USER_INFO:
            return {...state, ...payload};
        default:
            return state;
    }
}

export default User;