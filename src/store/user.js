import firebase from "firebase";

export default {
  state: {
    user:{
      isAuthentificated: false,
      uid: null,
    },
  },
  mutations: {
    SET_USER(state, payload){
      state.user.isAuthentificated = !0
      state.user.uid = payload
    },
    UNSET_USER(state,){
      state.user.isAuthentificated = !1
      state.user.uid = null
    }
  },
  actions: {
    STATE_CHANGED({commit},payload){
      if (payload) {
        commit('SET_USER', payload.id)
      }else{
        commit('UNSET_USER',)
      }
    },
    SIGNUP({commit},payload){
      commit('SET_PROCESSING', !0)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)

        .then(()=>commit('SET_PROCESSING', !1))

        .catch(function (error) {
          commit('SET_ERROR', error.message)
          commit('SET_PROCESSING', !1)
        });

    },
    SIGNIN({commit},payload){
      commit('SET_PROCESSING', !0)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)

        .then(function (user) {
          commit('SET_USER', user.uid)
          commit('SET_PROCESSING', !1)
        })

        .catch(function (error) {
          commit('SET_ERROR', error.message)
          commit('SET_PROCESSING', !1)
        });
    },
    SIGNOUT(){
      firebase.auth().signOut()
    },
  },
  getters:{
    isUserAuthentificated: (state) => state.user.isAuthentificated
  }
}