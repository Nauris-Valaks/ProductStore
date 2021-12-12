import productCard from './productCard.vue'
import cartButton from '../cart/cartButton.vue'
export default {
    name: "products",
    components: { productCard, cartButton },
    data() {
        return {
            search: '',
            loading: false
        }
    },

    computed: {
        productList() {
            const products = this.$store.getters['products/getProducts']
            if (products.data != undefined) {
                this.loading = false
            }
            return products.data
        }
    },
    methods: {
        discountPrice(price, discount) {
            let moneySaved = (discount / 100) * price
            let discountPrice = price - moneySaved
            return discountPrice.toFixed(2)
        }
    },

    created() {
        this.loading = true
        this.$store.dispatch('products/getProducts')
    }
}