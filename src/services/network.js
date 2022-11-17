// import {axios} from 'axios';

const api = axios.create({
  baseURL: "http://localhost3000/api/v1"
});
// const http = Axios.create({baseURL: "https://localhost:3000/api/v1"});

 async function get(url, params) {
    try {
    const res = await api.get(url, {
      params
    });
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

 async function post(url, body) {
    try {
    const res = await api.post(url, body);
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

 async function patch(url, body) {
  try {
    const res = await api.patch(url, body);
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}