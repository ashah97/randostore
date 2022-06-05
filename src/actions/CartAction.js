export const addToCart = (item, dispatch) => {
    dispatch({
        type: 'ADD_TO_CART',
        item: item,
    })
};

export const removeFromCart = (itemId, dispatch) => {
    dispatch({
        type: 'REMOVE_ITEM',
        itemId,
    })
};
