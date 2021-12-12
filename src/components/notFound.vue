<template>
  <v-container>
      <v-row row wrap >
        <v-col
          cols="12"
          text-center
          class="pt-6 pa-2"
        >
          <h3 class="display-3">404</h3>
          <div class="title mb-3">Page Not Found.</div>
          <span class="subheading"> Sorry for any inconvenience. </span>

          <v-divider class="my-3"></v-divider>

          <v-btn
            class="mx-0"
            color="primary"
            large
            center
            @click="$router.go(-1)"
          >
            Go Back
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>
