import Contact from '../components/contact'
import Error404Img from '../Img/Pages/404Error/Error404.png'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import '../cssPages/404Error.css'
import {Link} from 'react-router-dom' 
import React from "react";
const Error404 = () => {
    return (
        <div>
           <img className='Error404Img' srcSet={Error404Img} alt='error' data-aos="fade-up"/>
           <Link to="/"><div className='btn'>volver a inicio<AiOutlineArrowLeft/></div></Link>
           <Contact/>
        </div>

    );
};
export default Error404