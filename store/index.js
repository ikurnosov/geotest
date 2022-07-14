export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const geo = req.geo;
    await dispatch('geo/setGeo', geo);
  }
};
