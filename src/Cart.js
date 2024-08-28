import React, {useState} from 'react';
let cart = new Map() //key: catalog item id, val: quantity

const UpdateCart = (id, increment) => {  // increment can be +1 or -1
    if (cart.has(id)) {
        var quantity = cart[id]
        cart.set(id, quantity + increment)

        if (cart[id] == 0) { // remove id from cart if quantity = 0
            cart.delete(cart[id])
        }
    } else {
        cart.set(id, 1)
    }
    // return cart[id]
}

const GetQuantity = (id) => {
    console.log(id, cart[id])
    if (cart.has(id)) {
       
        return String(cart[id])
    }
    return "0"
}

export default {UpdateCart, GetQuantity};