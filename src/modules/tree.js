import json from "@/divisions.json"

const state = {
  tree: Array.isArray(json) ? {
    name: "Root",
    count: json.length,
    children: json
  } : json
};

const getters = {
  allTree: (state) => {
    return state.tree
  }
};

const actions = {
  fetchTrees({ commit }, data) {
    commit('setTree', data);
  }
}

const mutations = {
    setTree: (state, tree) => (state.tree = tree),
    removeBranch:(state, name) => state.tree = state.tree.filter((tree) => tree.name !== name)
};


export default {
    state,
    getters,
    actions,
    mutations
};