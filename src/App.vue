<template>
  <div id="app">
    <v-app>
      <v-main>
        <app-header
          v-if="$route.name === 'home'"
          class="pl-0 pr-0"
        ></app-header>
        <router-view />
      </v-main>
    </v-app>
    <vue-snotify></vue-snotify>
    <confirm-dialog ref="confirmDialog"></confirm-dialog>
  </div>
</template>

<script>
import appHeader from './components/header/header.vue';
export default {
  name: 'App',
  components: { appHeader },

  data: () => ({
    //
  }),
  mounted() {
    this.$root.$confirm = this.$refs.confirmDialog.open;
  },
};
</script>
