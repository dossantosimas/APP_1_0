import { get } from './network.js';

export function getNews() {
    return get("/news");
}

export function getNewsById(id) {
    return get(`/news/${id}`)
}
