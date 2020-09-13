import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

// データサービス
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  // 承認されたリソースをリクエストするときに、
  // authHeader() 関数の助けを借りてHTTPヘッダーを追加
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();