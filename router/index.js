import { createRouter, createWebHistory } from 'vue-router'
import index from '@/components/index.vue'
import home from '@/components/home.vue'
import grade from '@/components/grade.vue'
import report from '@/components/report.vue'
import teacher from '@/components/teacher.vue'
import auto from '@/components/auto/auto.vue'
import step1 from '@/components/auto/step1.vue'
import step2 from '@/components/auto/step2.vue'
import step3 from '@/components/auto/step3.vue'
import step4 from '@/components/auto/step4.vue'
import step5 from '@/components/auto/step5.vue'
import data from '@/components/auto/data.vue'
import error from '@/components/auto/error.vue'
import virtual from '@/components/virtual/virtual.vue'

const routes = [
    {
        path: '/',
        name: 'index', // 登录页面路由名称
        component: index,
        redirect: '/home',
        children: [
            {
                path:'/home',
                name:'home',
                component: home
            },
            {
                path: '/grade',
                name: 'grade',
                component: grade
            },
            {
                path: '/report',
                name: 'report',
                component: report
            },
            {
                path: '/teacher',
                name: 'teacher',
                component: teacher
            },
            {
                path: '/auto',
                name: 'auto',
                component: auto,
                redirect: '/step1',
                children:[
                    {
                        path: '/step1',
                        name: 'step1',
                        component: step1
                    },
                    {
                        path: '/step2',
                        name: 'step2',
                        component: step2
                    },
                    {
                        path: '/step3',
                        name: 'step3',
                        component: step3
                    },
                    {
                        path: '/step4',
                        name: 'step4',
                        component: step4
                    },
                    {
                        path: '/step5',
                        name: 'step5',
                        component: step5
                    },
                    {
                        path: '/step6',
                        name: 'step6',
                        component: data
                    },
                    {
                        path: '/step7',
                        name: 'step7',
                        component: error
                    },
                ]
            },
            {
                path: '/virtual',
                name: 'virtual',
                component: virtual
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
