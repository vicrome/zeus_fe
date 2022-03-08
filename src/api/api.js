// import router from "@/router";
import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

Api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

Api.interceptors.response.use(
  function (response) {
    console.log("AAA desde el interceptor");
    return response;
  },
  function (error) {
    if (error.response.status) {
      console.log("error en la peticion");
      // localStorage.removeItem("user"); // aqui instanciariamos la store y hariamos el logout desde ahi, el back nos dijo que no tenemos auth
      // router.push("login");
    }
  }
);

export default Api;
