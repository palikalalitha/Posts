import { PostStore } from './PostStore'
import { PostAPIService } from '../services/PostService/index.api'

const postStore = new PostStore(new PostAPIService())
const postStores = {
  postStore
}
export { postStores }
