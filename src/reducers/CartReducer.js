const addToCart = (state, item) => {
    const newItem = {...item,quantity:1}
    localStorage.setItem('cartList',JSON.stringify([...state.cartList, newItem]))
    return { ...state, cartList: [...state.cartList, newItem] };
};

const removeFromCart = (state, itemId) => {
    const newCartList = state.cartList.filter(item => item.id !== itemId);
    localStorage.setItem('cartList',JSON.stringify(newCartList))
    return { ...state, cartList: newCartList }
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return addToCart(state, action.item);
        case 'REMOVE_ITEM':
            return removeFromCart(state, action.itemId);
        default:
            return state;
    }
};