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
                <v-btn 
                  class="warning"
                  @click="triggerUpload"
                >
                    Upload image
                    <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
                <input 
                  ref="fileInput" 
                  type="file" 
                  style="display: none;" 
                  accept='image/*'
                  @change='onFileChange'
                />
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <img 
                  v-if="imageSrc"
                  :src="imageSrc" 
                  alt="" 
                  height="150px" 
                />
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-switch
                  label="Add to promo?"
                  v-model="promo"
                ></v-switch>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-spacer></v-spacer>
                <v-btn 
                  :loading="loading" 
                  :disabled="!valid || !image || loading" 
                  class="success" 
                  @click="createAd"
                >
                  Create Ad
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          ownerId: this.ownerId,
          promo: this.promo,
          image: this.image
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>

