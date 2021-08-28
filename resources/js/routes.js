import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgetPassword from "./components/auth/ForgetPassword";
import Home from "./components/Home";
import Logout from "../../app/Http/Controllers/Auth/Logout";

export const routes = [
    {path: '/', name: "Login",component:Login},
    {path: '/register', name: "Register",component:Register},
    {path: '/forget-password', name: "FA-Password",component:ForgetPassword},
    {path: '/logout', name: "Logout",component:Logout},
    {path: '/home', name: "Home",component:Home},
]
