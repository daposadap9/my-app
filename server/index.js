import { connectDB } from "./database";
import { PORT } from "./config";
import app from './app'
connectDB()
app.set('port',process.env.PORT || 4000)
app.listen(PORT)
console.log('server on port', PORT)
