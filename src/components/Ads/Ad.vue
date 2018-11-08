<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card v-if="!loading">
                    <v-img
                      :src="ad.imageSrc"
                      height='600px'
                    >
                    </v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ ad.description }}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <addEditAdModal :ad='ad'></addEditAdModal>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card v-else class="text-xs-center">
                    <v-progress-circular
                        :width="5"
                        :size="100"
                        color="green"
                        indeterminate
                    ></v-progress-circular>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import EditAdModal from './EditAdModal';

export default {
  props: ['id'],
  components: {
    addEditAdModal: EditAdModal
  },
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

