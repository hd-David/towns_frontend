
import { createRouter, createWebHistory } from "vue-router"
import CreateTown from './components/CreateTown.vue'
import SearchTown from './components/SearchTown.vue'
import deleteTown from './components/deleteTown.vue'
import UpdateTown from './components/UpdateTown.vue'
const routes = [
    {
        path : '/',
        name : CreateTown,
        component : CreateTown

    },
    {
        
        path : '/components/SearchTown',
        name : SearchTown,
        component : SearchTown

    },
    {
        path : '/components/UpdateTown.vue',
        name: UpdateTown,
        component : UpdateTown
    },
    {
        
        path : '/components/deleteTown.vue',
        name: deleteTown,
        component : deleteTown
    }

]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL), routes
})

export default router