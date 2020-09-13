// メッセージアクションの設定/クリア

import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

// Redux メッセージアクションクリエーター
// APIからのメッセージ（通知）に関連するアクション
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});