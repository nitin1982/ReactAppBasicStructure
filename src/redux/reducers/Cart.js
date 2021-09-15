import { LOAD_CART, ADD_TO_CART } from '../actionCreators/CartActionCreator';

const Cart = (state = [], action) => {
    const { type, payload } = action;
    switch(type)
    {
        case ADD_TO_CART:
            return [...state, payload];
        case LOAD_CART:
            return state;
        default:
            return state;

    }

}

export default Cart;