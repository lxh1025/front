import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/Login.vue'
import user from '@/view/User.vue'
import placelist from '@/view/PlaceList.vue'
import register from '@/view/Register.vue'
import placerank from '@/view/PlaceRank.vue'
import test from '@/view/test.vue'
Vue.use(Router)

const routes=[
{
    path:'/user',
    component:user,
    children:[
        {
            path:'/user/placelist',
            component:placelist
        },
        {
            path:'/user/placerank',
            component:placerank
        }
    ]
},
{
    path:'/login',
    name:'Login',
    component:login
},
{
    path:'/register',
    name:'Register',
    component:register
},
    {
        path:'/test',
        name:'Test',
        component:test
    }


]

const router = new Router({
    mode:'history',
    routes
})

export default router