<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'
=======
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import CreateTown from './components/CreateTown';
import SearchTown from "./components/SearchTown";
import UpdateTown from "./components/UpdateTown";
import DeleteTown from "./components/DeleteTown"
import NavBar from "./components/NavBar"
>>>>>>> 483cc2d8226427f28af4ccd3580198f01470270d

import App from './App.vue';

const routes = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes: [
    { path : '/create', component: CreateTown },
    { path : '/search', component: SearchTown },
    { path : '/update', component: UpdateTown },
    { path : '/delete', component: DeleteTown }
    ]
});


const app = createApp(App)
// global use of NavBar
app.component("NavBar", NavBar)
app.use(routes)
app.mount('#app')
