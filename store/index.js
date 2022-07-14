export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const {
      'x-vercel-ip-country': country,
      'x-vercel-ip-country-region': region,
      'x-vercel-ip-city': city
    } = req.headers;

    await dispatch('geo/setGeo', { country, region, city });
  }
};
