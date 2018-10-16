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
    createAd ({commit}, payload) {
      payload.id = '458'

      commit('createAd', payload)
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
