import http from './httpService';

const apiEndPoint = '/posts';

export function getPosts() {
    return http.get(apiEndPoint);
};

export function createPost(post) {
    return http.post(apiEndPoint, post);
};
