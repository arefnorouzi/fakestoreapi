import { defineStore } from 'pinia'

export const useCartStore = defineStore('CartStore', {
    state: () => {
        return {
            cart: []
        }
    },
    actions: {
        addToCart(item) {
            this.cart.push(item)
        },
    },
})