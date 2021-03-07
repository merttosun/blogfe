/* eslint-disable import/prefer-default-export */
import axios from "axios";

export const getPostsSummaries = (params: { page: string; limit: string }) => {
    return axios.get(`http://localhost:5000/posts/getPostsSummaries?limit=30&page=1`);
};

export const getPostDetail = (postId: string) => {
    return axios.get(`http://localhost:5000/posts/getPostDetail?postId=${postId}`);
};
