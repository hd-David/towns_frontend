import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import CreateTown from './components/CreateTown';
import SearchTown from "./components/SearchTown";
import UpdateTown from "./components/UpdateTown";
import DeleteTown from "./components/DeleteTown"

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
app.use(routes)
app.mount('#app')

// createApp(App).mount('#app')
// // test
// App.use(router)