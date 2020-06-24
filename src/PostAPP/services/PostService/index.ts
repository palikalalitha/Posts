import { PostObject } from "../../stores/types";

export interface PostService {
    getPostsAPI: () => Promise<Array<PostObject>>
}
