export default (key: string) => import.meta.env[`VITE_APP_${key}`];
