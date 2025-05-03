// export const API_URL = 'http://localhost:3000';
// https://ethan-market-server.fly.dev
export const API_URL = import.meta.env.PROD
  ? 'https://ethan-market-server.fly.dev'
  : 'http://localhost:3000';
