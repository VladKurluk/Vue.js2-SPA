<template>
  <v-app>
    <v-navigation-drawer 
      app 
      temporary
      v-model="drawer"
    >
      <v-list>
          <v-list-tile
            v-for="link of links"
            :key="link.title"
            :to="link.url"
          >
            <v-list-tile-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
          <v-list-tile v-if="isUserLoggedIn" @click="onLogout">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
        <v-toolbar-side-icon 
          class="hidden-md-and-up" 
          @click="drawer = !drawer"
        ></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to='/' tag="span" class='pointer'>Ad application</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn 
              flat
              v-for="link of links"
              :key="link.title"
              :to="link.url"
            >
                <v-icon left>{{link.icon}}</v-icon>
               {{link.title}}
            </v-btn>
            <v-btn v-if="isUserLoggedIn" @click="onLogout" flat>
              <v-icon left>exit_to_app</v-icon>
              Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="10000"
        color="error"
        @input="closeError"
        :value="true"
      >
      {{ error }}
        <v-btn
          color="dark"
          flat
          @click.native="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
          {title: 'New ad', icon: 'note_add', url: '/new'},
          {title: 'My ads', icon: 'list', url: '/list'}
        ]
      }
      return [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
    color: #fff;
  }
</style>

