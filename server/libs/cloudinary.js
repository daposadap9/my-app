import cloudinary from 'cloudinary'
cloudinary.config({
    cloud_name:"dpzo5tq0p",
    api_key:"339431947684291",
    api_secret:"KBPGOQYm-le0NHliXbYdn6ggQ74"
})
export const uploadImage = async filePath =>{
    return await cloudinary.v2.uploader.upload(filePath,{
        folder:'posts'
    })
}
export const deleteImage = async id=>{
   return await cloudinary.uploader.destroy(id)
}
