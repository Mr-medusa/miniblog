import Vue from 'vue'
import Router from 'vue-router'
import Pads from './views/Pads.vue'
import BlogPreviewList from "./components/blog/preview/BlogPreviewList"
import BlogArticle from "./components/blog/read_edit/BlogArticle"

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/blog' },
        {
            path: '/pads',
            name: 'pads',
            component: Pads
        },
        {
            path: '/blog',
            component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
            children: [
                {
                    path: '',
                    component: BlogPreviewList,
                },
                {
                    path: 'preview_list/:page',
                    component: BlogPreviewList,
                    props: { page:'' }
                },
                {
                    name:'blogArticle',
                    path: 'blog_article/:id/:isReadable',
                    component: BlogArticle,
                    props: {id: '', isReadable: true }
                },
            ]
        }
    ]
})
