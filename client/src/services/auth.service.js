//註冊、登入、登出都在這裡
import axios from "axios";
const API_URL = "https://mern-project-a4li.onrender.com";
class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", { email, password });
  }

  logout() {
    localStorage.removeItem("user");
  }
  //axios post會直接return 一個promise
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
const authService = new AuthService();
export default authService;
