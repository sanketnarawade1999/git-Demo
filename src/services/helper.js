import axios from "axios";

export const BASE_URL = 'http://localhost:5000'

export const myaxios = axios.create({
    baseURL: BASE_URL
})






// https://jsonplaceholder.typicode.com
// axios.post(
//     "",
//     {
//       name: data.name,
//       email: data.email,
//       password: data.password,
//       header
//     }
//   )