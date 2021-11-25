import { InjectionKey } from 'vue'
import { createStore, Store, useStore as useBaseStore } from 'vuex'
import { LoginUserInfo } from './types'
import createPersistedState from 'vuex-persistedstate'

export interface State {
  user: LoginUserInfo | null
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol('state')

const persitPlugs = createPersistedState({
  paths: ['user']
})

export const store = createStore<State>({
  state () {
    return {
      user: null
    }
  },
  plugins: [persitPlugs],
  mutations: {
    setUser (state, payload: LoginUserInfo | null) {
      state.user = payload
    }
  }
})

export function useStore () {
  return useBaseStore(key)
}
