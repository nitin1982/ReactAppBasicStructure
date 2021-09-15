export const ADD_TO_CART = 'ADD_TO_CART'
export const LOAD_CART = 'LOAD_CART'

export const addToCart = (pet) => (
    {
        type: ADD_TO_CART,
        payload: pet
    }
)

export const LoadCart = () => (
    {
        type: LOAD_CART,        
    }
)