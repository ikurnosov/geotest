export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const geo = req.geo;
    console.log(req.geo);
    console.log(req.headers);
    await dispatch('geo/setGeo', req);
  }
};
