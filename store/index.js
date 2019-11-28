import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        routeMeta: {
            index: {
                title: "Multimedia FIT",
                subtitle: "Subtitle",
                fullHeight: true
            },
            peminjaman: {
                title: "Peminjaman",
                subtitle: "Sub",
                fullHeight: false
            }
        },
        counter: 0
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore