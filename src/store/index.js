import Vuex from 'vuex';
import Vue from 'vue';
import tree from '@/modules/tree.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tree
  }
});