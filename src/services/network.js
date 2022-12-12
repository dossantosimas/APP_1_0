// import Axios from "axios";

export const http = axios.create({baseURL: "http://localhost:3000/api/v1"});

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

export function patch(url, params, body) {
  return http.patch(url,{params}, body)
  .then(res => res.data)
  .catch(reason => {
      console.error(reason.message);
  });
}