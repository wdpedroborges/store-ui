export const increaseAmountInCart = (productId: any) => ({
    type: 'INCREASE_AMOUNT_IN_CART',
    payload: productId
})

export const decreaseAmountInCart = (productId: any) => ({
    type: 'DECREASE_AMOUNT_IN_CART',
    payload: productId
})

export const deleteFromCart = (productId: any) => ({
    type: 'DELETE_FROM_CART',
    payload: productId
})