import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgetPassword from "./components/auth/ForgetPassword";
import Home from "./components/Home";

export const routes = [
    {path: '/', name: "Login",component:Login},
    {path: '/register', name: "Register",component:Register},
    {path: '/forget-password', name: "FA-Password",component:ForgetPassword},
    {path: '/home', name: "Home",component:Home},
]
