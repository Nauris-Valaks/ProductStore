<template>
  <v-row row justify-center>
    <v-dialog v-model="productDialog" persistent max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">Product</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form>
              <v-row wrap>
                <v-col cols="12">
                  <v-text-field v-model="product.name" label="Product Name">
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="product.description" label="Description">
                  </v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="product.defaultImage"
                    label="Default Image URL"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="product.price" label="Price">
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="product.discount" label="Discount">
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <h2>Images</h2>
                  <div
                    v-for="(textField, i) in productImages"
                    :key="i"
                    class="text-fields-row"
                  >
                    <v-text-field
                      label="Image"
                      v-model="productImages[i]"
                    ></v-text-field>

                    <v-btn
                      :disabled="i === 0"
                      @click="removeImageField(i)"
                      icon
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                  <v-btn icon @click="addImageField()">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click.native="$emit('onCancel')"
            >Close</v-btn
          >
          <v-btn
            color="blue darken-1"
            :loading="loading"
            text
            @click="attempSave()"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script src="./product.js"></script>

<style scoped>
.text-fields-row {
  display: flex;
}
</style>
