import '../cssPages/Portafolio.css' 
import React, {useEffect, useState } from "react";
import MyLoader from '../components/MyLoader';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEdit, faEye, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {usePosts}  from '../context/postContext';
import {VscEmptyWindow}from 'react-icons/vsc'
import '../cssComponents/GridImages.css'
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Portafolio = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1000);
    },[])
    const {posts} = usePosts()
    const {deletePosts} = usePosts()
    const navigate = useNavigate()
    if(posts.length ===0)return(
        <div>
            <div className='flex flex-col justify-center items-center'>
            <VscEmptyWindow className='w-48 h-48 text-white'/>
            <h1>No hay publicaciones</h1>   
            </div>
            <div>
                <Outlet/>
                <br></br>
            <NavLink to='PostForm'><FontAwesomeIcon className='nav-main__ul_icon' activeClass icon={faEdit} />¿Desea crear una nueva?</NavLink>
            </div>
        </div>
        
            
            
    )
    const handleDelete = (id) =>{
        toast((t)=> (
            <div>
                <p>Esta Seguro 🤔?, la operacion no podrá ser revertida</p>
                <div>
                    <button className='bg-rose-500 hover:bg-rose-600 px-3 py-2 text-white rounded-sm mx-2 border-none cursor-pointer' onClick={()=>{
                       deletePosts(id);
                       toast.dismiss(t.id);
                    }}>Confirmar</button>
                    <button className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2 border-none cursor-pointer' onClick={()=> toast.dismiss(t.id)}>Cancelar</button>
                </div>
            </div>
        ),{
            style:{
              background: "#cbd5e1"  
            }
        })
    }
    const loader =()=>{
        return(
            <MyLoader/>  
        )
        }
    if (loading) {
        return(
            loader()
            )  
        }
    else{
    return (
        <motion.div
    
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x:window.innerWidth, transition:{duration: 0.1}}}
        >
            <Outlet/>
            {/*consumo de datos de api */}
            <div className='createPost'>
            <NavLink to='PostForm'><FontAwesomeIcon className='nav-main__ul_icon' activeClass icon={faEdit} />crear nuevo post </NavLink>
            <h1 className='Title-h1'>Nuestro catalogo de maquinas</h1>
            <h1>tenemos disponibles {posts.length} maquinas</h1>
            <div className='griddd'>
            {posts.map(post =>(
            <div key={post.id}>
            <div onClick={()=> navigate(`posts/${post._id}`)} className='productContainer'>
                <div className='boxProducts'>
                    <div className="imageProduct">
                        <div className='iconsProducts'>
                            <a href="/src/pages/inicio.js"><FontAwesomeIcon className='ul__icon' icon={faCartShopping} /></a>
                            <a href="/src/pages/inicio.js"><FontAwesomeIcon className='ul__icon' icon={faShare} /></a>
                            <a href="/src/pages/inicio.js"><FontAwesomeIcon className='ul__icon' icon={faEye} /></a>
                        </div>
                        <a href="/src/pages/inicio.js">
                            {/* <img className='Imagenes-Productos' loading="lazy" srcSet={Imagen1} alt='ImagenProducto1'/> */}
                            {post.image && <img className='Imagenes-Productos' src={post.image.url}/>}
                        </a>
                    </div>
                    <div className="contentProducts">
                        <h3>{post.title}</h3>
                        <div className='stars'>
                        <FontAwesomeIcon className='ul__icon__gridImages' icon={faStar} />
                            <FontAwesomeIcon className='ul__icon__gridImages' icon={faStar} />
                            <FontAwesomeIcon className='ul__icon__gridImages' icon={faStar} />
                            <FontAwesomeIcon className='ul__icon__gridImages' icon={faStar} />
                            <FontAwesomeIcon className='ul__icon__gridImages' icon={faStar} />
                        </div>
                        <div className='priceProduct'>{post.description}</div>
                        <div>
                        </div>
                        
                    </div>
                </div>
                </div>
                <Boton
                onClick={()=>handleDelete(post._id)}
                >Eliminar
                </Boton>
                </div>
            ))}
            </div>
            </div>
            {/*plantilla */}                 
        {/*consumo de datos de api */}
        </motion.div>
    );
    }
};
const Boton = styled.button`
position: relative;
cursor: pointer;
display: inline-block;
border: 0;
background: #F62431;
font-weight: bold;
padding: 15px 25px;
background: #2;
color: #ffffff;
font-size: 15px;
border: 1px solid #fff;
margin: 10px 0;
border-radius: 10px;
transition: 50ms;

:hover{
    opacity:0.8;
    background:#A6191F;
}
.padding{
    padding: 20px;
}
`;
export default Portafolio