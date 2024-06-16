import axios from "axios";
const URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

// const config = {
//   headers: {
//     // Authorization: "Bearer " + JSON.parse(localStorage.getItem("user"))?.access,
//   },
// };


// ----------------------OFFERS----------------------------
// GET
export const productsGetAPI = async () => API.get(`/products`);

