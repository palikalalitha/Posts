import React from 'react'
import { inject, observer } from 'mobx-react'
import { PostStore } from '../../stores/PostStore'
import { PostPage } from '../../components/PostPage'
import { PostList } from '../../components/PostList/PostList'
import { withTranslation, WithTranslation } from 'react-i18next'
import i18n from '../../../i18n'

interface PostRouteProps extends WithTranslation {}
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
  changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }
  renderSuccessUI = observer(() => {
    const { t } = this.props
    const { postList } = this.getPostStore()
    return (
      <>
        <PostList
          postList={postList}
          postTitle={t('posts:postTitle')}
          postsCount={t('posts:totalPosts', { count: postList.length })}
        />
      </>
    )
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
export default withTranslation('translation', { withRef: true })(PostRoute)
