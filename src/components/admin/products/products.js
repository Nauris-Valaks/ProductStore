import confirm from '../../confirm/confirm.vue'
import productDialog from './product.vue'
export default {
    name: "products",
    components: { confirm: confirm, productDialog },
    data() {
        return {
            productDialog: false,
            productHeaders: [
                {
                    text: 'Name',
                    align: 'center',
                    sortable: true,
                    value: 'name'
                },
                {
                    text: 'Image',
                    align: 'left',
                    value: 'defaultImage'
                },
                {
                    text: 'Price',
                    align: 'left',
                    sortable: true,
                    value: 'price',
                },
                {
                    text: 'Discount',
                    align: 'left',
                    sortable: true,
                    value: 'discount',
                },
                {
                    value: 'actions',
                    align: 'left',
                    sortable: false
                }
            ],
            selectedProduct: {},
            search: ''
        }
    },

    computed: {
        productList() {
            const products = this.$store.getters['products/getProducts']
            return products.data
        }
    },
    methods: {
        productAction() {
            this.$store.dispatch('products/getProducts')
            this.productDialog = false
        },
        createProduct() {
            this.selectedProduct = {}
            this.productDialog = true
        },
        editProduct(product) {
            this.productDialog = true
            this.selectedProduct = product
        },
        deleteProduct(product) {
            let scope = this
            this.$refs.confirm.open('Delete Product', 'Are you sure?', { color: 'red', confirm: 'Yes' })
                .then((confirm) => {
                    if (confirm) {
                        scope.$store.dispatch('products/deleteProduct', product.id)
                            .then(() => {
                                scope.$store.dispatch('products/getProducts')
                                scope.$snotify.success('Product Deleted')
                            })
                            .catch((error) => {
                                scope.$snotify.error(error.message)
                            })
                    }
                })
        }
    },

    created() {
        this.$store.dispatch('products/getProducts')
    }
}