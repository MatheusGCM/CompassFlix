export interface RequestTokenResponse {
  success: boolean;
  expires_at: Date;
  request_token: string;
}

export interface SessionIdResponse {
  success: boolean;
  session_id: string;
}
