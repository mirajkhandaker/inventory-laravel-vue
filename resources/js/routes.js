import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgetPassword from "./components/auth/ForgetPassword";
import Home from "./components/Home";
import Logout from "./components/auth/Logout";

import AllEmployee from "./components/employee/Index";
import CreateEmployee from "./components/employee/Create";
import EditEmployee from "./components/employee/Edit";

import AllSupplier from "./components/supplier/Index";
import CreateSupplier from "./components/supplier/Create";
import EditSupplier from "./components/supplier/Edit";

import AllCategory from "./components/category/Index";
import CreateCategory from "./components/category/Create";
import EditCategory from "./components/category/Edit";

export const routes = [
    {path: '/', name: "Login",component:Login},
    {path: '/register', name: "Register",component:Register},
    {path: '/forget-password', name: "FA-Password",component:ForgetPassword},
    {path: '/logout', name: "Logout",component:Logout},
    {path: '/home', name: "Home",component:Home},
    {path: '/employee', name: "AllEmployee",component:AllEmployee},
    {path: '/employee/create', name: "CreateEmployee",component:CreateEmployee},
    {path: '/employee/edit/:id', name: "EditEmployee",component:EditEmployee},

//    Supplier
    {path: '/supplier', name: "AllSupplier",component:AllSupplier},
    {path: '/supplier/create', name: "CreateSupplier",component:CreateSupplier},
    {path: '/supplier/edit/:id', name: "EditSupplier",component:EditSupplier},

    //    Category
    {path: '/category', name: "AllCategory",component:AllCategory},
    {path: '/category/create', name: "CreateCategory",component:CreateCategory},
    {path: '/category/edit/:id', name: "EditCategory",component:EditCategory},
]
