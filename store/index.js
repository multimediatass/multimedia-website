export const state = () => ({
  titlePage: '',
  headerInfo: {
    title: null,
    subtitle: null,
    fullHeight: null,
  },
  loading: null,
  routeMeta: {
      index: {
          title: "Multimedia",
          subtitle: "Laboratory FIT Tel-U",
          fullHeight: false
      },
      peminjaman: {
          title: 'Peminjaman Barang',
          subtitle: 'Multimedia Research Laboratory FIT',
          fullHeight: false
      },
      profil: {
          title: 'Profil',
          subtitle: 'Multimedia Research Laboratory FIT',
          fullHeight: false
      },
      produk: {
          title: 'Produk',
          subtitle: 'Multimedia Research Laboratory FIT',
          fullHeight: false
      },
      aktivitas: {
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
    bash: 'http://localhost:3000',
    signin: '/api/signin',
    signout: '/api/logout',
    peminjaman: '/api/peminjaman'
  },
  historyPeminjaman: []
})

export const getters = {
  historyPeminjaman: state => {
    let getHistory = localStorage.getItem('historyPeminjaman')
    return JSON.parse(getHistory)
  },
}

export const mutations = {
  changeTitlePage(state, newTitle) {
    state.titlePage = newTitle
  },
  changeHeaderInfo(state, newInfo) {
    state.headerInfo = newInfo
  },
  setLoading(state, newState) {
    state.loading = newState
  },
  setHistoryPeminjaman(state, newState) {
    state.historyPeminjaman = newState
  }
}

export const actions = {
  setInfoPage({commit, state}, newState) {
    commit('changeTitlePage', newState.titleInfo)
    commit('changeHeaderInfo', newState.headerInfo)
  },
  setLoading({commit, state}, newState) {
    if (state.loading == true) {
      setTimeout(() => {
        commit('setLoading', newState)
      }, 500);
    }else {
      commit('setLoading', newState)
    }
  },
  setHistoryPeminjaman({commit, state}, newState) {
    let getHistory = localStorage.getItem('historyPeminjaman')
    let arr = []
    if (newState == null) {
      localStorage.removeItem('historyPeminjaman')
      commit('setHistoryPeminjaman', [])
    }else {
      if (Array.isArray(JSON.parse(getHistory))) {
        arr = JSON.parse(getHistory)
      }
      arr.push(newState)
      commit('setHistoryPeminjaman', arr)
      localStorage.setItem('historyPeminjaman', JSON.stringify(arr));
    }
  }
}
