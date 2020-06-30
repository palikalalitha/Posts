import React from 'react'
import { inject, observer } from 'mobx-react'
import { PostStore } from '../../stores/PostStore'
import { PostPage } from '../../components/PostPage'
import { PostList } from '../../components/PostList/PostList'

interface PostRouteProps {}
interface InjectedProps extends PostRouteProps {
  postStore: PostStore
}
@inject('postStore')
@observer
class PostRoute extends React.Component<PostRouteProps> {
  componentDidMount() {
    this.doNetworkCalls()
  }
  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getPostStore = () => {
    return this.getInjectedProps().postStore
  }
  doNetworkCalls = () => {
    this.getPostStore().getPostList()
  }
  renderSuccessUI = observer(() => {
    const { postList } = this.getPostStore()
    return <PostList postList={postList} />
  })
  render() {
    const { getPostListAPIStatus, getPostListAPIError } = this.getPostStore()
    return (
      <PostPage
        apiStatus={getPostListAPIStatus}
        apiError={getPostListAPIError}
        retryCall={this.doNetworkCalls}
        renderSuccessUI={this.renderSuccessUI}
      />
    )
  }
}
export { PostRoute }
