const routes = [
    {
        path: '/',
        redirect: '/index',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/index',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import('../pages/index')
    },
    {
        path: '/aboutUs',
        name: 'aboutUs',
        meta: {
            title: '关于我们'
        },
        component: () => import('../pages/aboutUs/aboutUs')
    },
    {
        path: '/security/check/:param',
        name: 'security',
        meta: {
            title: '藥品信息'
        },
        component: () => import('../pages/drugInformation')
    },
]
export default routes