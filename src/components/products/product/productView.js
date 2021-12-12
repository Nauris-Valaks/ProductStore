import productCard from '../productCard.vue'
import cartButton from '../../cart/cartButton.vue'
export default {
  name: 'Product',
  components: { productCard, cartButton },
  data() {
    return {
      product: {},
      position: 0,
    }
  },
  computed: {
    selectedProduct() {
      const product = this.$store.getters['products/getSelectedProduct']
      if (product != null) {
        return product.data
      }
    },
    productImages() {
      let images = []
      if (this.selectedProduct != null) {
        images = this.selectedProduct.images
        images.push(this.selectedProduct.defaultImage)
        return images
      }
    }
  },
  methods: {
    discountPrice(price, discount) {
      let moneySaved = (discount / 100) * price
      let discountPrice = price - moneySaved
      return discountPrice.toFixed(2)
    },
    back() {
      this.$router.push('/')
    },
    addToCart(product) {
      let cart = this.$store.getters['cart/getCart']
      // Finds if product already 
      let productToAdd = { id: null, quantity: null, price: null, discount: null, name: null }
      if (cart.data.products.length > 0) {
        let inCartIndex = cart.data.products.findIndex(c => c.id === product.id)
        if (inCartIndex === -1) {
          productToAdd = { id: product.id, quantity: 1, price: product.price, discount: product.discount, name: product.name }
          cart.data.products.push(productToAdd)
        } else {
          cart.data.products[inCartIndex].quantity += 1
        }
      } else {
        productToAdd = { id: product.id, quantity: 1, price: product.price, discount: product.discount, name: product.name }
        cart.data.products.push(productToAdd)
      }
      this.$store.dispatch('cart/updateCart', cart.data)
    }
  },
  created() {
    this.$store.dispatch('products/getProductById', this.$route.params.id)
  }
}