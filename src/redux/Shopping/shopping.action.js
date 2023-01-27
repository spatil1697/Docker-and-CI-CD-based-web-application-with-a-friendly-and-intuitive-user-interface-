import * as actionTypes from './shopping.types'

//Actions for Coffee Products
export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type : actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        }
    }
}


export const adjustQty = (itemID, value) => {
    return {
        type : actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        },
    };
};

export const loadCurrentItem =(item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload:item
}
}


//Actions for Snacks Product
export const addToCartSnacks = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CARTSNACKS,
        payload: {
            id: itemID,
        }
    }
}

export const removeFromCartSnacks = (itemID) => {
    return {
        type : actionTypes.REMOVE_FROM_CARTSNACKS,
        payload: {
            id: itemID,
        }
    }
}


export const adjustQtySnacks = (itemID, value) => {
    return {
        type : actionTypes.ADJUST_QTYSNACKS,
        payload: {
            id: itemID,
            qty: value,
        },
    };
};

export const loadCurrentItemSnacks =(item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEMSNACKS,
        payload:item
}
}
