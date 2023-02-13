export default (varName: string) => import.meta.env[`VITE_APP_${varName}`];
