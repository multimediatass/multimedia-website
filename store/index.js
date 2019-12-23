import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      routeMeta: {
          index: {
              title: "Multimedia",
              subtitle: "Laboratory FIT Tel-U",
              fullHeight: true
          },
          peminjaman: {
              title: 'Peminjaman Barang',
              subtitle: 'Multimedia Research Laboratory FIT',
              fullHeight: false
          },
          about: {
              title: 'Profil',
              subtitle: 'Multimedia Research Laboratory FIT',
              fullHeight: false
          },
          product: {  
              title: 'Produk',
              subtitle: 'Multimedia Research Laboratory FIT',
              fullHeight: false
          },
          activity: {
              title: 'Aktivitas',
              subtitle: 'Multimedia Research Laboratory FIT',
              fullHeight: false
          },
          login: {
              title: '...',
              subtitle: 'Multimedia Research Laboratory FIT',
              fullHeight: false
          },
          admin: {
            title: 'Admin Panel',
            subtitle: 'Multimedia Research Laboratory FIT',
            fullHeight: false
        }
      },
      url: {
        bash: 'http:localhost:3000',
        signin: '/api/signin',
        signout: '/api/logout',
        peminjaman: '/api/peminjaman'
      }
    },
    mutations: {
      
    }
  })
}

export default createStore