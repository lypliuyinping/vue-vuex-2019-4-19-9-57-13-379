import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: [1, 2, 3, 4, 5]
    },
    getters: {
        getCount: function (state) {
            return function (index) {
                return state.count[index - 1];
            }
        }
    },
    mutations: {
        add(state, index) {
            state.count[index - 1] += 1;
            let old = state.count;
            state.count = [];
            for (let i = 0; i < old.length; i++) {
                state.count.push(old[i]);
            }
        },
        reduce(state, index) {

            state.count[index - 1] += 1;
        }
    }
})

export default store;