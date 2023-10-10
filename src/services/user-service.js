
import { myaxios } from "../services/helper"

// Sign up Api
export async function signUp(user) {
    const result = await myaxios.post("/post", user).then((response) => response.data)
    return result;
}

//  Login Api 
// export async function loginUser(logindata) {
//     const result = myaxios.post("/post", logindata).then((response) => response.data)
//     return result;
// }

//  Api related to Tasks
export async function addTask(taskdata) {
    const result = await myaxios.post("/task", taskdata).then((response) => response.data)
    return result;
}

export async function Showtask(id) {
    const result = await myaxios.get(`/task/${id}`).then((response) => response.data)
    return result;
}
export async function Deletetask(id) {
    const result = await myaxios.delete(`/task/${id}`).then((response) => response.data)
    return result;
}

// Something went wrong here

/* export async function UpdateTask(id) { const result = await myaxios.put(`/task/${id}`).then((response) => response.data)eturn result;}*/


