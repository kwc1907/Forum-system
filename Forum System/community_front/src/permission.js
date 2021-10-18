import router from './router'
import store from './store'
import getPageTitle from '@/utils/get-page-title'

import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'
import {getToken} from "@/utils/auth"; 

NProgress.configure({showSpinner: false}) 

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    document.title = getPageTitle(to.meta.title)
    const hasToken = getToken();
    if (hasToken) {
        if (to.path === '/login') {
            next({path: '/'})
            NProgress.done()
        }
        else{
            await store.dispatch('user/getInfo')
            next()
        }
    } else if (!to.meta.requireAuth)
    {
        next()
    }
    else {
        next('/login')
    }
})

router.afterEach(() => {
    NProgress.done()
})
