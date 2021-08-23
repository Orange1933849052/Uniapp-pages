import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function createStore () {
  return new Vuex.Store({
    state: {
      loadNum: 0, // 要请求的画布组伯数量
    },
    mutations: {
      loadNumAdd (state) {
        state.loadNum ++;
		console.log(state.loadNum,'+')
      },
	  loadNumReduce (state) {
	    state.loadNum --;
		console.log(state.loadNum,'-')
	  }
    }
  });
}

const store = createStore();
export default store;