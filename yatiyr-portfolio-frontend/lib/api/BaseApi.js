import axios from 'axios';

class BaseApi {

    constructor(accessToken, subPath) {
        this.config = {};

        if(accessToken) {
            this.config.header = {
                authorization: `Bearer ${accessToken}`
            }
        }

        this.apiUrl = process.env.PORTFOLIO_API_URL + subPath;
    }

    getAll() {
        return axios.get(this.apiUrl);
    }

    getById(id) {
        return axios.get(`${this.apiUrl}/${id}`);
    }

    getBySlug(slug) {
        return axios.get(`${this.apiUrl}/s/${slug}`);
    }

};

export default BaseApi;