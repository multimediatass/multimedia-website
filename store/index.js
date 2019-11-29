import Vuex from 'vuex'
import axios from 'axios'

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
      url: {
        bash: 'http://localhost:3000',
        signin: '/api/signin',
        signout: '/api/logout'
      }
    },
    mutations: {
      
    }
  })
}

export default createStore