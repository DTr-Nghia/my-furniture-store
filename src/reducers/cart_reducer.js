import {
    ADD_TO_CART,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    REMOVE_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
} from '../action'

const cart_reducer = (state,action) => {
    switch(action.type) {
        case ADD_TO_CART:{
            const {id,color,amount,product} = action.payload
            const tempItem = state.cart.find((item) => item.id === id + color)
            if(tempItem){
                const tempCart = state.cart.map((cartItem) => {
                    if(cartItem.id === id + color){
                        let tempAmount = cartItem.amount + amount;
                        if(tempAmount > cartItem.max){
                            tempAmount = cartItem.max
                        }
                    return {...cartItem,amount:tempAmount}
                    }
                    else{
                        return cartItem;
                    }
                })
                return {...state,cart:tempCart}
            }else {
                const newItem = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    price:product.price,
                    image: product.images[0].url,
                    max: product.stock,
                }
                return {...state,cart:[...state.cart,newItem]}
            } 
        }
        case REMOVE_ITEM: {
            const tempCart = state.cart.filter((cartItem) => {
                return cartItem.id !== action.payload
            })
            return {...state,cart:tempCart}
        }
        case CLEAR_CART: {
            return {...state,cart:[]}
        }
        case TOGGLE_CART_ITEM_AMOUNT: {
            const {id,value} = action.payload;
            const tempCart = state.cart.map((item) => {
                if(item.id === id) {
                    if(value === 'increase') {
                        let tempAmount = item.amount + 1;
                        if(tempAmount > item.max) {
                            tempAmount = item.max
                        }
                        return {...item, amount: tempAmount}
                    }
                    if(value === 'decrease'){
                        let tempAmount = item.amount - 1;
                        if(tempAmount < 0) {
                            tempAmount = 0
                        }
                        return {...item,amount:tempAmount}
                    }
                }
                return item
            })
            return {...state, cart:tempCart}
        }
        case COUNT_CART_TOTALS: {
            const {total_items,total_amount} = state.cart.reduce((total,item) => {
                const {amount,price} = item
                total.total_items += amount
                total.total_amount += price * amount
                return total
            }, {
                total_items:0,
                total_amount:0
            })
            return {...state, total_amount,total_items}
        }
    default: throw new Error(`No Matching "${action.type}" - action type`)
    }
}
export default cart_reducer