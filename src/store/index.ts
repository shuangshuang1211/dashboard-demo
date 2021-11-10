import { InjectionKey } from 'vue'
import { createStore, Store, useStore as useBaseStore } from 'vuex'

interface Data {
  name: string;
  age: number;
}
export interface State {
  count: number;
  mes: string;
  objData?: Data;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol('state')

export const store = createStore<State>({
  state () {
    return {
      count: 0,
      mes: 'hello, vuex-ts',
      objData: {
        name: 'myName',
        age: 20
      }
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export function useStore () {
  return useBaseStore(key)
}
