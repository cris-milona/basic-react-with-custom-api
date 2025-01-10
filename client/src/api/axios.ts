import axios from "axios";

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api` || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
