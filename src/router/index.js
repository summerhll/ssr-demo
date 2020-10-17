import Vue from  'vue';
import Router from 'vue-router';

// import Index from '@/components/Index'
// import Detail from '@/components/Detail'

const Index = () => import('@/components/Index')
const Detail = () => import('@/components/Detail')

Vue.use(Router);

// 这里为什么不导出一个router实例哪？
// 每次用户请求都需要创建新的router实例
export default function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {path: '/', component: Index},
            {path: '/detail', component: Detail},
        ]
    })
}