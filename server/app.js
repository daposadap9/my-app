import fileUpload from "express-fileupload"
import express  from "express";
import postRoutes from './routes/posts.routes'

const app = express()
//middlewares
app.use(express.json())
//middlewares
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploadImages'
}))
//routes
app.use(postRoutes)
//routes


export default app