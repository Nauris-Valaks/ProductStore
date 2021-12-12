export default {
  data() {
    return {
      loading: false,
      productImages: ['']
    }
  },
  props: ['productDialog', 'product'],
  methods: {
    addImageField() {
      this.productImages.push('')
    },

    removeImageField(index) {
      this.productImages.splice(index, 1)
    },
    attempSave: function () {
      if (this.product.id != undefined) {
        this.update()
      } else {
        this.create()
      }
    },
    create() {
      this.product.images = this.productImages
      this.product.rating = 0
      this.product.totalReviews = 0
      let data = this.product
      let scope = this
      scope.loading = true
      this.$store.dispatch('products/createProduct', data)
        .then(function () {
          scope.$snotify.success('Product created successfully.', {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true
          })
          scope.loading = false
          scope.$emit('productAction')
        })
        .catch(function (res) {
          scope.loading = false
          scope.$snotify.error(res, {
            timeout: 3000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          })
        })
    },
    update() {
      this.product.images = this.productImages
      let data = this.product
      let scope = this
      scope.loading = true
      this.$store.dispatch('products/updateProduct', data)
        .then(function () {
          scope.$snotify.success('Product updated successfully.', {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true
          })
          scope.loading = false
          scope.$emit('productAction')
        })
        .catch(function (res) {
          scope.loading = false
          scope.$snotify.error(res, {
            timeout: 3000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          })
        })
    },
  },
  watch: {
    product() {
      if (this.product.id != undefined) {
        this.productImages = this.product.images
      }
    }
  }
}