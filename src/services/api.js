import axios from "axios";

const Api = axios.create({
  baseURL: "https://yts.mx/api/v2",
});

export default Api;
