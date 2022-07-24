import {Router} from 'express'
import {deletePosts, getPosts, getPost, createPosts, updatePosts} from '../controller/posts.controllers'
const router = Router()
//ruta principal
router.get('/posts', getPosts)
//ruta principal
router.post('/posts', createPosts)
router.put('/posts/:id', updatePosts)
router.delete('/posts/:id', deletePosts)
router.get('/posts/:id', getPost)
export default router