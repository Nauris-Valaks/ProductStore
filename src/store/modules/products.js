import axios from "axios"
const namespaced = true

const state = {
    products: [],
    product: null
}

const getters = {
    getProducts: (state) => {
        return state.products
    },
    getSelectedProduct: (state) => {
        return state.product
    },
}

const actions = {
    getProducts(context) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/products').then(function (data) {
                context.commit('setProducts', data)
                resolve(data)
            }).catch(function (err) {
                reject(err)
            })
        })
    },
    getProductById(context, id) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/products/' + id).then(function (data) {
                context.commit('setSelectedProduct', data)
                resolve(data)
            }).catch(function (err) {
                reject(err)
            })
        })
    },
    createProduct(context, product) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/products', product).then(function (data) {
                resolve(data)
            }).catch(function (err) {
                reject(err)
            })
        })
    },
    updateProduct(context, product) {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:8080/products/' + product.id, product).then(function (data) {
                resolve(data)
            }).catch(function (err) {
                reject(err)
            })
        })
    },
    deleteProduct(context, id) {
        return new Promise((resolve, reject) => {
            axios.delete('http://localhost:8080/products/' + id).then(function (data) {
                resolve(data)
            }).catch(function (err) {
                reject(err)
            })
        })
    }
}

const mutations = {
    setProducts(state, products) {
        state.products = products
    },
    setSelectedProduct(state, product) {
        state.product = product
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced
}
