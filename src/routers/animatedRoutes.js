import React from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Error404 from '../pages/404Error';
import AcercaDe from '../pages/AcercaDe';
import Inicio from '../pages/inicio';
import Portafolio from '../pages/Portafolio';
import PostForm from '../pages/PostForm'
//import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {
const location = useLocation();
  return (
  //<AnimatePresence>
      <Routes location={location} key={location.pathname}>
                <Route path="/about" element={<AcercaDe/>}/>
                
                <Route path="/Portafolio/*" element={<Portafolio/>}>
                        <Route path="Postform" element={<PostForm/>}/>
                        <Route path="posts/:id" element={<PostForm/>}/>
                </Route>
                <Route path="/login/" element={<Login/>}/>
                <Route exact path="/" element={<Inicio/>}/>
                <Route path="*" element={<Error404/>}/>
        </Routes>
//</AnimatePresence>
  );
}

export default AnimatedRoutes;