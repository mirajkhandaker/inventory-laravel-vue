require('./bootstrap');

import Vue from 'vue';
import VueRouter from "vue-router";
import {routes} from "./routes";

// import User class
import User from "./helpers/User";
window.User = User;

// import Notification class
import Notification from "./helpers/Notification";
window.Notification = Notification;

// Use sweet alert globally
import Swal from "sweetalert2";
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

window.Toast = Toast;

Vue.use(VueRouter);

const router = new VueRouter({
   routes,
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router
});
