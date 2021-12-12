<template>
  <v-container>
    <v-row justify="end">
      <v-col class="mr-4" cols="3">
        <v-btn @click="createProduct()">Add Product</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-text-field
          solo
          append-icon="mdi-magnify"
          v-model="search"
          label="Search Product"
          clearable
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-data-table
          :search="search"
          :items="productList"
          :headers="productHeaders"
        >
          <template v-slot:item.defaultImage="{ item }">
            <v-img
              max-width="100"
              height="50"
              contain
              :src="item.defaultImage"
            ></v-img>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn color="green" small icon @click="editProduct(item)">
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
            <v-btn color="red" small icon @click="deleteProduct(item)">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <product-dialog
      :productDialog="productDialog"
      :product="selectedProduct"
      @productAction="productAction()"
      @onCancel="productDialog = false"
    >
      ></product-dialog
    >
    <confirm ref="confirm"></confirm>
  </v-container>
</template>

<script src="./products.js"></script>
