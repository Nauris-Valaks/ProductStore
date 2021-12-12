import axios from "axios"
const namespaced = true
const state = {
    cart: []
}

const getters = {
    getCart: (state) => {
        return state.cart
    },
}

// Get cart for first user
const actions = {
    getCart(context) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/carts/' + 1).then(function (data) {
                context.commit('setCart', data)
                resolve(data)
            }).catch(function (err) {
                reject(err)
            })
        })
    },
    updateCart(context, data) {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:8080/carts/' + 1, data).then(function (data) {
                context.commit('setCart', data)
                resolve(data)
            }).catch(function (err) {
                reject(err)
            })
        })
    },
}

const mutations = {
    setCart(state, cart) {
        state.cart = cart
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced
}
