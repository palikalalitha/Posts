import { observable } from "mobx";
import { PostObject } from "../../types";

class PostModel {
    @observable userid: number
    @observable id: number
    @observable title: string
    @observable body: string
    constructor(postObject: PostObject) {

        this.userid = postObject.userId
        this.id = postObject.id
        this.title = postObject.title
        this.body = postObject.body
    }
}
export { PostModel }