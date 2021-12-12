<template>
  <v-container>
    <v-row>
      <v-col class="pb-0">
        <v-btn icon to="/"><v-icon>mdi-arrow-left</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12">
        <v-card class="mt-2 mb-6" v-for="item in cartItems" :key="item.id">
          <v-row class="mb-2">
            <v-col class="pr-0" cols="7">
              <h4 class="ml-2">
                {{ item.name }}
              </h4>
            </v-col>
            <v-col class="pl-0 pr-0" cols="3">
              <h4>£{{ item.price }}</h4>
            </v-col>
            <v-col cols="1">
              <v-btn @click="removeFromCart(item)" color="red" small icon
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-footer color="white" class="pa-0">
      <div class="card-price">
        <h4 v-if="discountTotal !== 0" class="discountPrice">
          Total: £{{ discountTotal.toFixed(2) }}
        </h4>
        <h4 :class="discountTotal !== 0 ? 'ml-3 fullprice' : 'ml-3'">
          £{{ cartTotal }}
        </h4>
        <v-btn class="ml-2" color="primary" @click="clearCart()"
          >Checkout</v-btn
        >
      </div>
    </v-footer>
  </v-container>
</template>

<script src="./cart.js"></script>

<style scoped>
.fullprice {
  text-decoration: line-through;
}
.card-price {
  display: flex;
}
.discountPrice {
  color: red;
}
.card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
