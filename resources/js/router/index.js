import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

const Home = () => import('../views/Home');
// import PostLayout from "../views/layouts/PostLayout";
const PostLayout = () => import('../views/layouts/PostLayout');
const NotFound = () => import('../views/NotFound');

const AdminTemplate = () => import('../views/templates/AdminTemplate');
const BlogTemplate = () => import('../views/templates/BlogTemplate');
const SinglePost = () => import('../views/SinglePost');

const AdminMain = () => import('../views/admin/MainAdmin');
const AdminShowPosts = () => import("../views/admin/posts/ListPosts");
const AdminCreatePost = () => import('../views/admin/posts/CreatePost');
const AdminShowTags = () => import('../views/admin/tags/ListTags');
const AdminCreateTag = () => import('../views/admin/tags/CreateTag');
const AdminCreateCategory = () => import('../views/admin/categories/CreateCategory');
const AdminShowCategories = () => import('../views/admin/categories/ListCategories');
const AdminSinglePost = () => import('../views/admin/posts/SinglePost');

const HomeLayout = () => import('../views/layouts/HomeLayout');
// const SinglePost = () => import('../views/SinglePost');

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: BlogTemplate,
        // name: 'Home',
        meta: {
            layout: 'home',
            template: 'blog'
        },
        children: [
            {
                path: '',
                // name: 'Home',
                component: HomeLayout,
                children: [
                    {
                        path: '',
                        name: 'Home',
                        component: Home

                    }
                ],

            },
            {
                path: 'post/',
                name: 'Post-layout',
                component: PostLayout,
                meta: {
                    layout: 'post',
                    template: 'blog'
                },
                children: [
                    {
                        path: ':slug',
                        name: 'Show-post',
                        component: SinglePost,
                    }
                ]
            },
        ]
    },
    // {
    //     path: '/post/create',
    //     component: CreatePostComponent,
    //     name: 'createPost',
    //     meta: {
    //         layout: 'post'
    //     }
    // },

    // {
    //     path: '/tag/create',
    //     component: CreateTagComponent,
    //     name: 'createTag',
    //     meta: {
    //         layout: 'post'
    //     }
    // },
    // {
    //     path: '/category/create',
    //     component: CreateCategoryComponent,
    //     name: 'createCategory',
    //     meta: {
    //         layout: 'post'
    //     }
    // },
    {
        path: '/admin',
        component: AdminTemplate,
        name: 'Admin',
        meta: {
            // layout: 'admin',
            template: 'admin'
        },
        children: [
            {
                path: '',
                name: 'AdminMain',
                component: AdminMain

            },
            {
              path: 'posts',
              name: 'listPosts',
              component: AdminShowPosts
            },
            {
              path: 'post/:slug',
              name: 'AdminSinglePost',
              component: AdminSinglePost
            },
            {
                path: 'createPost',
                name: 'createPost',
                component: AdminCreatePost
            },
            {
              path: 'categories',
              name: 'adminShowCategories',
              component: AdminShowCategories
            },
            {
                path: 'createCategory',
                name: 'createCategory',
                component: AdminCreateCategory
            },
            {
              path: 'adminShowTags',
              name: 'adminShowTags',
              component: AdminShowTags
            },
            {
                path: 'createTag',
                name: 'createTag',
                component: AdminCreateTag
            }
        ]
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '*',
        redirect: '/404'
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

router.beforeEach((to, from, next) => {
    // console.log(to)
    // if (to.name === 'Home') {
    //     store.dispatch('getPostsMainPage', {type: 'posts', path: 'posts/getPostsMainPage', page: to.query.page});
    // }
    next();
})

export default router;
