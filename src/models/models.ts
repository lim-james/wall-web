export interface UserModel {
  token: string;
  username: string;
}

export interface PostModel {
  post_id: number;
  username: string;
  title: string;
  body: string;
  creation_time: string;
  is_edited: boolean;
  last_edited_time: string;
  like_count: number;
}

export interface PostDetailsModel {
  post_id: number;
  username: string;
  title: string;
  body: string;
  creation_time: string;
  is_edited: boolean;
  last_edited_time: string;
  like_count: number;
  comments: CommentModel[];
}

export interface CommentModel {
  comment_id: number;
  post_id: number;
  username: string;
  text: string;
  creation_time: string;
  is_edited: boolean;
  last_edited_time: string;
  reply_username: string;
  reply_text: string;
}
