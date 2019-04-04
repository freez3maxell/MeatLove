import Home from './views/Home.vue'
import About from './views/About.vue'
import History from './views/History.vue'
import Cuts from './views/Cuts.vue'
import Breeds from './views/Breeds.vue'

export const routes = [
    { 
        path: '',
        component: Home,
    },
    { 
        path: '/about',
        component: About,
    },
    { 
        path: '/history',
        component: History,
    },
    { 
        path: '/cuts',
        component: Cuts,
    },
    
    { 
        path: '/breeds',
        component: Breeds,
    },
    {
        path: '*',
        redirect: "/"
    },
];