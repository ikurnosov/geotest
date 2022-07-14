export const state = () => ({
    geo: {
        country: 'BY'
    }
});

export const actions = {
  setGeo({ commit, state }, geo) {
    if (geo) {
      commit('SET_GEO', geo);
    }
  }
};

export const mutations = {
  SET_GEO(state, geo) {
    state.geo = geo;
  }
};

export const getters = {
    geo: (state) => state?.geo
};
