export default () => ({
  port: Number(process.env.PORT) || 3000,
  mongodb: {
    uri: process.env.MONGODB_URL,
  },
  weatherApi: {
    apikey: process.env.WEATHER_APIKEY,
    host: process.env.WEATHER_API_HOST,
  }
});
  