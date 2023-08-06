/* eslint-disable unicorn/filename-case */
// ########################################
export interface PostDTO {
  id: number;
  created_at?: number;
  updated_at?: number;
  title: string;
  body: string;
  publisheds: boolean;
  viewCount: number;
  content: string;
  author: string;
  authorId: string;
}
