import json from "@/divisions.json"

const state = {
  tree: Array.isArray(json) ? {
    name: "Root",
    count: json.length,
    children: json
  } : json,
  path: [],
  pathIndex: [],
};

const getters = {
  allTree: (state) => {
    return state.tree
  },
  deletePath: (state) => {
    return state.path
  },
  deletePathIndex: (state) => {
    return state.pathIndex
  },
};

const actions = {
  fetchTrees({ commit }, data) {
    commit('setTree', data);
  },
  trackPath({ commit }, data) {
    commit('setPath', data);
  },
  trackPathIndex({ commit }, data) {
    commit('setPathIndex', data);
  },
  newPath({ commit }) {
    commit('clearPath');
  },
}

const mutations = {
    setTree: (state, tree) => (state.tree = tree),
    setPath: (state, path) => (state.path.push(path)),
    setPathIndex: (state, path) => (state.pathIndex.push(path)),
    clearPath: (state) => (state.path = []),
    removeBranch:(state, name) => state.tree = state.tree.filter((tree) => tree.name !== name)
};


export default {
    state,
    getters,
    actions,
    mutations
};