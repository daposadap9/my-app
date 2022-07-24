import Post  from "../models/Post";
import { uploadImage, deleteImage } from "../libs/cloudinary";
import fs from 'fs-extra'
export const getPosts = async(req,res)=> {

    try {
        const posts = await Post.find()
        res.send(posts) 
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
    
} 
export const createPosts = async(req,res)=> {
    try {
        const {title, description} = req.body
        let image; 
        if (req.files?.image){
           const resultado = await uploadImage(req.files.image.tempFilePath)
           await fs.remove(req.files.image.tempFilePath)
           image={
               url:resultado.secure_url,
               public_id:resultado.public_id
           }
           
        }
        const nuevoPost = new Post({title, description, image})
        console.log(nuevoPost)
        await nuevoPost.save()
        return res.json(nuevoPost)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
   
}
export const updatePosts = async(req,res)=> {
    try {
        const actualizarPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
        console.log(actualizarPost)
        return res.json(actualizarPost)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
    
    
}
export const deletePosts = async(req,res)=> {
    try {
        const eliminarPost = await Post.findByIdAndDelete(req.params.id)
        if (!eliminarPost)   return res.sendStatus(404)  
            
           if (eliminarPost.image.public_id) {
              await deleteImage(eliminarPost.image.public_id)
           }
           return res.sendStatus(204)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
   
}
export const getPost = async(req,res)=> {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) return res.sendStatus(404)
        return res.json(post)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
    
}