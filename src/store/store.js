import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        buttons: [],
        items: [],
    },
    getters: {
        getItems: function (state) {
            return function () {
                return state.items;
            }
        }

    },
    mutations: {
 
        
    }
})

export default store;