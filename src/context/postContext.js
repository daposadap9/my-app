import { useState, createContext, useContext, useEffect } from "react"
import { createPostRequests, deletePostsRequests, getPostsRequest, getPostsRequests, updatePostsRequests } from "../api/posts"
const postContext = createContext()

export const usePosts = () =>{
   const context = useContext(postContext)
   return context
}
export const PostContainer = ({children})=>{
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        const response = await getPostsRequests()
        setPosts(response.data)
    }

    const createPosts = async (post)=>{
        const response = await createPostRequests(post)
        setPosts([...posts, response.data])
    }
    const deletePosts = async id =>{
      const res = await deletePostsRequests(id)
      if(res.status === 204){
        setPosts(posts.filter(post => post._id !== id))
      }
    }
    const getPost = async (id) => {
        const res = await getPostsRequest(id)
        return res.data
    }
    const updatePost = async (id, post) =>{
       const res = await updatePostsRequests(id, post)
       setPosts(posts.map(post => post === id ? res.data : post)) 
    }
    useEffect(()=>{
        getPosts()
    },)
    return <postContext.Provider value={{
        posts,
        getPosts,
        createPosts,
        deletePosts,
        getPost,
        updatePost,
    }}>
        {children}
    </postContext.Provider>
}