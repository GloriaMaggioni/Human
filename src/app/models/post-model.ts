import { CommentModel } from "./comment-model";

export interface PostModel {
    id?: string,    //creato dal backend
    name: string,
    data: string,
    description: string,
    comment: CommentModel[]
}
