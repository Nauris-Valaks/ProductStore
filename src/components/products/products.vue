<template>
  <v-container>
    <v-row>
      <v-col lg="11" cols="9" xs="10">
        <v-text-field
          solo
          append-icon="mdi-magnify"
          v-model="search"
          label="Search Product"
          clearable
        ></v-text-field>
      </v-col>
      <v-col>
        <cart-button></cart-button>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-iterator
          :items="productList"
          :search="search"
          :loading="loading"
          :items-per-page="8"
          loading-text="Loading Products..."
        >
          <v-row row wrap v-if="!loading" slot-scope="props">
            <v-col
              xs="12"
              lg="3"
              v-for="product in props.items"
              :key="product.id"
            >
              <product-card
                :product="product"
                :loading="loading"
              ></product-card>
            </v-col>
          </v-row>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./products.js"></script>

<style scoped></style>
