<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create a new ad</h1>
                <v-form ref="form" v-model="valid" validation>
                  <v-text-field  
                    name="title" 
                    label="Ad Title" 
                    type="text"
                    v-model="title"
                    required
                    :rules="[v => !!v || 'Title is required']"
                  ></v-text-field>
                  <v-text-field  
                    name="description" 
                    label="Ad description" 
                    type="text"
                    multi-line
                    v-model="description"
                    :rules="[v => !!v || 'Title is required']"
                  ></v-text-field>
                </v-form>
            </v-flex>
        </v-layout>
        <v-layout row class="mb-3">
            <v-flex xs12 sm6 offset-sm3>
                <v-btn class="warning">
                    Upload image
                    <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <img src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="" height="150px">
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

