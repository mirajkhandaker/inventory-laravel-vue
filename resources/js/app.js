require('./bootstrap');

import Vue from 'vue';
import VueRouter from "vue-router";
import {routes} from "./routes";
import User from "./helpers/User";

window.User = User;

Vue.use(VueRouter);

const router = new VueRouter({
   routes,
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router
});
