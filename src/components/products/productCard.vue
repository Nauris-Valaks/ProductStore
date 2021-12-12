<template>
  <v-card class="ml-2" height="500" max-height="500" :loading="loading">
    <v-img height="250" contain :src="product.defaultImage"></v-img>
    <v-card-title class="pt-0 pr-0">{{ product.name }}</v-card-title>
    <v-card-text class="card-description">
      <v-row align="center" class="mx-0">
        <v-rating
          :value="product.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ms-4">
          {{ product.rating + '(' + product.totalReviews + ')' }}
        </div>
      </v-row>
      <div class="mt-4">
        {{ product.description }}
      </div>
    </v-card-text>
    <v-divider class="mt-2"></v-divider>
    <v-card-text>
      <div class="card-price">
        <h3>£{{ discountPrice(product.price, product.discount) }}</h3>
        <p class="ml-2" style="color: red">SAVE {{ product.discount }}%</p>
        <h3 class="ml-2 fullprice">£ {{ product.price }}</h3>
      </div>
    </v-card-text>
    <v-card-actions class="card-actions">
      <v-btn color="deep-purple lighten-2" text @click="selectProduct(product)">
        View
      </v-btn>
      <v-btn color="deep-purple lighten-2" text @click="addToCart(product)">
        Add To Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script src="./productCard.js"></script>

<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}
.card-description {
  height: 130px;
}
.fullprice {
  text-decoration: line-through;
}
.card-price {
  display: flex;
}
.discountPrice {
  color: red;
}
</style>
