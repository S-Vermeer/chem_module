import Vue from 'vue';
import Router from 'vue-router';

//IMPORT COMPONENTS
import PeriodicSystem from './components/PeriodicSystem.vue';
// import Molecules from './components/Molecules.vue';
// import GameLevel from './components/GameLevel.vue';
// import Elements from './components/Elements.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: PeriodicSystem,
        },
    //     {
    //         path: '/login',
    //         name: 'Login',
    //         component: LoginForm,
    //     },
    //     {
    //         path: '/game/:formula',
    //         name: 'Game',
    //         component: GameLevel,
    //     },
    //     {
    //         path: '/elements',
    //         name: 'Elements',
    //         component: Elements,
    //     },
    ],
});