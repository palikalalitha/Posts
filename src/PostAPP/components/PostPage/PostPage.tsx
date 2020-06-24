import React from "react"
import { PostContainer } from "./StyledComponents"
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure"
import { APIStatus } from "@ib/api-constants"
import { observer } from "mobx-react"

interface PostPageProps {
    apiStatus: APIStatus
    apiError: Error | null
    retryCall: () => void
    renderSuccessUI: any
}
@observer
class PostPage extends React.Component<PostPageProps> {
    render() {
        const { apiStatus, apiError, retryCall, renderSuccessUI } = this.props
        return (

            <LoadingWrapperWithFailure
                apiStatus={apiStatus}
                apiError={apiError}
                onRetry={retryCall}
                renderSuccessUI={renderSuccessUI}
            />

        )
    }
}
export { PostPage }