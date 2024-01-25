import axios, { AxiosResponse } from 'axios';
import { 
  PostModel, 
  PostDetailsModel,
  UserModel,
} from 'models/models';

const instance = axios.create({
  baseURL: '/api', 
});

export const fetchAllPosts = async (): Promise<PostModel[]> => {
  const response: AxiosResponse<PostModel[]> = await instance.get('/');
  return response.data;
}

export const fetchPostByID = async (post_id: number): Promise<PostDetailsModel> => {
  const response: AxiosResponse<PostDetailsModel> = await instance.get(`/p/${post_id}`);
  return response.data;
}

export const submitLoginRequest = async (username: string, password_hash: string): Promise<UserModel> => {
  const response: AxiosResponse<{ token: string }> = await instance.post('/u/login', {
    username,
    password_hash,
  });
  return {
    token: response.data.token,
    username,
  };
}
