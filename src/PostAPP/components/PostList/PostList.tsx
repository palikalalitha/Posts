import React from 'react'
import { PostListContainer } from './styledComponents'

import { PostModel } from '../../stores/models/PostModel'
import { observer } from 'mobx-react'

interface PostListProps {
  postList: Array<PostModel>
  postTitle: string
  postsCount: string
}
@observer
class PostList extends React.Component<PostListProps> {
  render() {
    const { postList, postTitle, postsCount } = this.props
    return (
      <PostListContainer>
        <h1>{postTitle}</h1>
        <h2>
          {postsCount}:{postList.length}
        </h2>
        {postList.map(eachPost => {
          return <h1>{eachPost.title}</h1>
        })}
      </PostListContainer>
    )
  }
}
export { PostList }
