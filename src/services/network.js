import Axios from "axios";

const http = Axios.create({baseURL: "https://jsonplaceholder.typicode.com"});

export function get(url, params) {
    return http.get(url, {
      params
    })
    .then(res => res.data)
    .catch(reason => {
      console.error(reason.message);
    });
}

export function post(url, body) {
    return http.post(url, body)
    .then(res => res.data)
    .catch(reason => {
        console.error(reason.message);
    });
}