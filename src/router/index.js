import Vue from  'vue';
import Router from 'vue-router';


const Index = () => import('@/components/Index')
const Detail = () => import('@/components/Detail')
const Item = () => import('@/components/Item')

Vue.use(Router);

// 这里为什么不导出一个router实例哪？
// 每次用户请求都需要创建新的router实例
export default function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {path: '/', component: Index},
            {path: '/detail', component: Detail},
            {path: '/item', component: Item},
        ]
    })
}