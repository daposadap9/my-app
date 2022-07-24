import './index.css'
import AppRouter from "./routers/AppRouter";
import {Toaster} from 'react-hot-toast';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    Aos.init({duration:500});
      },[])
  return (
    <div>
      <AppRouter/>
      <Toaster/>
    </div>
  );
}
export default App;
