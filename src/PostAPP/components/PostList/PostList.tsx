
import React from "react"
import { PostListContainer } from "./styledComponents"

import { PostModel } from "../../stores/models/PostModel"
import { observer } from "mobx-react"

interface PostListProps {
    postList: Array<PostModel>
}
@observer
class PostList extends React.Component<PostListProps> {
    render() {
        const { postList } = this.props
        return (
            <PostListContainer>
                {postList.map(eachPost => {
                    return <h1>{eachPost.title}</h1>
                })}
            </PostListContainer>
        )
    }
}
export { PostList } 