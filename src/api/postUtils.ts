import { compareTimeStrings } from "./dateUtils";
import { PostModel } from 'models/models';

export type SortTypes = 'time' | 'likes';
export const sortMethods: { [type in SortTypes]: (a: PostModel, b: PostModel) => number } = {
  time: (a: PostModel, b: PostModel): number => compareTimeStrings(a.creation_time, b.creation_time),
  likes: (a: PostModel, b: PostModel): number => b.like_count - a.like_count,
};