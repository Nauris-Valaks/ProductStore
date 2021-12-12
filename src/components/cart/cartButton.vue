<template>
  <v-container>
    <v-menu
      max-width="400"
      min-width="400"
      :close-on-content-click="false"
      bottom
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-badge
          :color="cartItems > 0 ? 'red accent-4' : 'white'"
          :content="cartItems"
        >
          <v-btn
            v-if="$vuetify.breakpoint.mdAndUp"
            v-bind="attrs"
            v-on="on"
            icon
          >
            <v-icon large color="black"> mdi-basket-outline </v-icon>
          </v-btn>
          <v-btn v-else to="/cart" icon>
            <v-icon large color="black"> mdi-basket-outline </v-icon>
          </v-btn>
        </v-badge>
      </template>
      <v-card>
        <v-data-table
          hide-default-footer
          :headers="cartHeaders"
          :items="cartList.products"
        >
          <template v-slot:item.actions="{ item }">
            <v-btn color="red" small icon @click="removeFromCart(item)">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <v-col cols="9">
          <v-card-text>
            <div class="card-price">
              <h2 v-if="discountTotal !== 0" class="discountPrice">
                Total: £{{ discountTotal.toFixed(2) }}
              </h2>
              <h3 :class="discountTotal !== 0 ? 'ml-2 fullprice' : 'ml-2'">
                £{{ cartTotal }}
              </h3>
            </div>
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-actions class="card-actions"
            ><v-btn
              color="deep-purple lighten-2 white--text"
              @click="clearCart()"
              >Checkout</v-btn
            ></v-card-actions
          >
        </v-col>
      </v-card>
    </v-menu>
  </v-container>
</template>

<script src="./cartButton.js"></script>

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
