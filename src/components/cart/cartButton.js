export default {
  name: 'CartButton',
  data() {
    return {
      cartList: [],
      cartHeaders: [
        {
          text: 'Quantity',
          align: 'center',
          sortable: false,
          value: 'quantity'
        },
        {
          text: 'Name',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Price',
          align: 'left',
          sortable: false,
          value: 'price',
        },
        {
          value: 'actions',
          align: 'left',
          sortable: false
        }
      ],
      discountTotal: 0
    }

  },
  computed: {
    cartItems() {
      const cartItems = this.$store.getters['cart/getCart']
      if (cartItems.data != undefined) {
        this.cartList = cartItems.data
        return cartItems.data.products.length
      }
    },
    cartTotal() {
      let scope = this
      let total = 0
      this.discountTotal = 0
      const cartItems = this.$store.getters['cart/getCart']
      if (cartItems.data != undefined) {
        cartItems.data.products.forEach(item => {
          total += (item.price * item.quantity)
          let moneySaved = (item.discount / 100) * item.price
          let discountPrice = item.price - moneySaved
          scope.discountTotal += (discountPrice * item.quantity)
        })
      }
      return total
    }

  },
  methods: {
    async clearCart() {
      this.cartList.products = []
      this.discountTotal = 0
      await this.$store.dispatch('cart/updateCart', this.cartList)
    },
    removeFromCart(item) {
      let cartItems = this.$store.getters['cart/getCart']
      let cartIndex = cartItems.data.products.findIndex(ci => ci.id === item.id)
      cartItems.data.products.splice(cartIndex, 1)
      this.$store.dispatch('cart/updateCart', cartItems.data)
    }
  },

  async mounted() {
    await this.$store.dispatch('cart/getCart')
    await this.$store.dispatch('products/getProducts')
  }
}