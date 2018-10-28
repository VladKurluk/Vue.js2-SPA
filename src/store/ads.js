import * as firebase from 'firebase'

class Ad {
  constructor (title, description, /* ownerId, */ imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    // this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: [
      {title: 'FirstAd', description: 'Descr', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', id: '123'},
      {title: 'SecondAd', description: 'Descr2', promo: true, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: '1234'}
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      // payload.id = '458'
      commit('clearError')
      commit('setLoading', true)

      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          // getters.user.id,
          payload.imageSrc,
          payload.promo
        )

        const ad = await firebase.database().ref('ads').push(newAd)
        console.log(getters.user.id)
        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }

      // commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
