import axios from "axios";

export const getPostsRequests = async () => await axios.get('/posts')

export const createPostRequests = async (post) => {
  
  try {
    const form = new FormData()

  for (let key in post){
    form.append(key,post[key])
  }
  return await axios.post('/posts', form,{
    headers : {
      "Content-Type":"multipart/form-data"
    }
  })
  } catch (error) {
    console.log(error)
    
  }
  }

export const deletePostsRequests = async id =>await axios.delete('/posts/' + id)

export const getPostsRequest = async id => await axios.get('/posts/' + id)

export const updatePostsRequests = async (id, newFields) => await axios.put(`/posts/${id}`, newFields)