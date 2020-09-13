// 保護されたリソースにアクセスする場合、
// HTTPリクエストにはAuthorizationヘッダーが必要

// ヘルパー関数
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }