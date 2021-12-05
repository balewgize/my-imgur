import { createRouter, createWebHistory } from 'vue-router'
import AuthHandler from '../components/AuthHandler'
import ImageList from '../components/ImageList'
import UploadForm from '../components/UploadForm'

const routes = [
  { path: "/", component: ImageList },
  { path: "/upload", component: UploadForm },
  { path: "/oauth2/callback", component: AuthHandler },
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes,
  });

export default router;