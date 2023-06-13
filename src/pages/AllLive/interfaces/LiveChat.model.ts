class LivechatModel {
  "comment_id": number;
  "live_episode_id": number;
  "live_program_id": number;
  "comment_status": string;
  "comment_role": "MEMBER" | "ADMIN";
  "content": string;
  "user_info"?: UserInfo | null;
  "create_at": string;

  __typename?: string;
}

class UserInfo {
  user_id?: string;
  user_name?: string;

  __typename?: string;
}

export { LivechatModel, UserInfo };
