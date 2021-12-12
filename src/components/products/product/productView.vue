<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="9" cols="9" xs="12">
        <v-btn @click="back()">Back</v-btn>
      </v-col>
      <v-col lg="1" xs="2" cols="3">
        <cart-button></cart-button>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xs="12" lg="4">
        <v-carousel height="auto" v-model="position">
          <v-carousel-item v-for="image in productImages" :key="image">
            <v-img :src="image"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col xs="12" lg="6">
        <v-card class="ml-2" max-height="400">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-card-title>{{ selectedProduct.name }}</v-card-title>
          <v-card-text class="card-description">
            <v-row align="center" class="mx-0">
              <v-rating
                :value="selectedProduct.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">
                {{
                  selectedProduct.rating +
                  '(' +
                  selectedProduct.totalReviews +
                  ')'
                }}
              </div>
            </v-row>
            <div class="mt-4">
              {{ selectedProduct.description }}
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="pb-0 card-price">
            <h2>
              £{{
                discountPrice(selectedProduct.price, selectedProduct.discount)
              }}
            </h2>
            <div class="card-price">
              <p class="ml-2" style="color: red">
                SAVE {{ selectedProduct.discount }}%
              </p>
              <h3 class="ml-2 fullprice">£ {{ selectedProduct.price }}</h3>
            </div>
          </v-card-text>
          <v-card-actions class="card-actions">
            <v-btn
              color="deep-purple lighten-2"
              @click="addToCart(selectedProduct)"
              text
            >
              Add To Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script src="./productView.js"></script>

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
