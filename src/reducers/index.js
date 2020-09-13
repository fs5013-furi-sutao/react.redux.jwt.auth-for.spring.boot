import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

// レデューサーを組み合わせる
// Reduxアプリケーションには1つのストアしかない
// auth と message でデータ処理ロジックを分割
export default combineReducers({
  auth,
  message,
});