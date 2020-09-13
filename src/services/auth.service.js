import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

// 認証サービス
class AuthService {

  // POST {ユーザー名、パスワード}＆JWTローカルストレージに保存
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  // JWTローカルストレージから削除
  logout() {
    localStorage.removeItem("user");
  }

  // POST {ユーザー名、メール、パスワード}
  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();