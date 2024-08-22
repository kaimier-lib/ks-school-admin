export function parseJwt(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  }
  
  export function isTokenExpired(token) {
    const decodedToken = parseJwt(token);
    if (!decodedToken || !decodedToken.exp) {
      return true; // 如果解析失败或者没有 exp 字段，认为 token 已过期
    }
  
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime > decodedToken.exp;
  }
  