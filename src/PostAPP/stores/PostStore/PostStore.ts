import { observable, action } from 'mobx'
import { PostService } from '../../services/PostService'
import { PostModel } from '../models/PostModel'
import { APIStatus, API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class PostStore {
  @observable postList!: Array<PostModel>
  @observable getPostListAPIStatus!: APIStatus
  @observable getPostListAPIError!: Error | null
  postService: PostService
  constructor(postService: PostService) {
    this.postService = postService
    this.init()
  }
  @action.bound
  init() {
    this.postList = []
    this.getPostListAPIStatus = API_INITIAL
    this.getPostListAPIError = null
  }
  @action.bound
  setGetPostListAPIStatus(status) {
    this.getPostListAPIStatus = status
  }
  @action.bound
  setGetPostListAPIError(error) {
    this.getPostListAPIError = error
  }
  @action.bound
  setPostListResponse(response) {
    console.log(response, 'res')
    this.postList = response.map(eachPost => {
      return new PostModel(eachPost)
    })
    console.log('list', this.postList)
  }
  @action.bound
  getPostList() {
    const getPostListPromise = this.postService.getPostsAPI()
    return bindPromiseWithOnSuccess(getPostListPromise)
      .to(this.setGetPostListAPIStatus, this.setPostListResponse)
      .catch(this.setGetPostListAPIError)
  }
}
export { PostStore }
