import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgetPassword from "./components/auth/ForgetPassword";
import Home from "./components/Home";
import Logout from "./components/auth/Logout";
import AllEmployee from "./components/employee/Index";
import CreateEmployee from "./components/employee/Create";
import EditEmployee from "./components/employee/Edit";

export const routes = [
    {path: '/', name: "Login",component:Login},
    {path: '/register', name: "Register",component:Register},
    {path: '/forget-password', name: "FA-Password",component:ForgetPassword},
    {path: '/logout', name: "Logout",component:Logout},
    {path: '/home', name: "Home",component:Home},
    {path: '/employee', name: "AllEmployee",component:AllEmployee},
    {path: '/employee/create', name: "CreateEmployee",component:CreateEmployee},
    {path: '/employee/edit/:id', name: "EditEmployee",component:EditEmployee},
]
