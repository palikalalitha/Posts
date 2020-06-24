import { PostStore } from "./PostStore";
import { PostAPIService } from "../services/PostService/index.api";

const postStore = new PostStore(new PostAPIService())
const stores =
{
    postStore
}
export {
    stores
}