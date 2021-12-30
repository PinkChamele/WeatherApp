export default () => ({
  port: Number(process.env.SERVER_PORT) || 3000,
  host: process.env.SERVER_HOST,
  mongodb: {
    url: process.env.MONGODB_URL,
  },
  weatherApi: {
    apikey: process.env.WEATHER_APIKEY,
    host: process.env.WEATHER_API_HOST,
  }
});
  