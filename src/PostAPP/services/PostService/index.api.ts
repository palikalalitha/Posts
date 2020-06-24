import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"

import { apiMethods } from "../../../constants/APIConstants"
import { POST_BASE_URL } from "../../constants/EnvirnomentConstants"

import endpoints from "../endpoints"
import { PostService } from "."

class PostAPIService implements PostService {
    api: Record<string, any>
    constructor() {
        this.api = create({
            baseURL: POST_BASE_URL
        })
    }

    async getPostsAPI() {
        return networkCallWithApisauce(
            this.api,
            endpoints.posts.postList,
            {},
            apiMethods.get
        )
    }
}
export { PostAPIService }
