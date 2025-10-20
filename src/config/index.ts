export const config = {
  apiUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  apiTimeout: 30000,
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  auth: {
    tokenKey: 'auth_token',
    refreshTokenKey: 'refresh_token',
  }
} as const;

export type Config = typeof config;
export default config;