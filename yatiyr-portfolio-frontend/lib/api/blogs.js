import axios from "axios";
import BaseApi from "lib/api/BaseApi";

class BlogApi extends BaseApi {
    constructor(accessToken) {
        super(accessToken, '/blogs');
    }

    getHighlighted() {
        return axios.get(`${this.apiUrl}/highlighted`);
    }

    getByType(type) {
        return axios.get(`${this.apiUrl}/t/${type}`);
    }
    
};

export default BlogApi;