import auth0 from "utils/auth0";
import BlogApi from "lib/api/blogs";

export default async function getUserBlogs(req, res) {
    try {
        const { accessToken } = await auth0.getSession(req);
        const json = await new BlogApi(accessToken).getByUser();
        return res.json(json.data);
    } catch(error) {
        return res.status(error.status || 422).json(error.response.data);
    }
}