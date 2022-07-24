import '../cssPages/AcercaDe.css';
import Imagen1 from "../Img/components/Slider/Imagen5.jpeg";
import {Slider, MySliderStyle, TextSlider} from '../components/Slider';
import React from "react";
import { motion } from 'framer-motion';
import '../cssPages/Inicio.css';
const AcercaDe = () => {
    return (
        <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x:window.innerWidth, transition:{duration: 0.1}}}
        >
        <h1 className='AcercaDePage'>Acerca de nosotros</h1>
        {/*Mi slider */}

        <Slider>
            <MySliderStyle>
                <img className="img" srcSet={Imagen1} alt={"imagen2"}/>
                    <TextSlider><h1>Proveemos ayuda con nuestros equipos especializados</h1></TextSlider>
            </MySliderStyle>
            <MySliderStyle>
                <img className="img" srcSet={Imagen1} alt={"imagen2"}/>
                    <TextSlider><h1>Proveemos ayuda con nuestros equipos especializados</h1></TextSlider>
            </MySliderStyle>
        </Slider>

        {/*Mi slider */}
        <h1>Somos una compañía peruana especializada en alquiler, comercialización y conservación de equipos de elevación, acceso vertical y transporte. Nuestro portafolio de productos está compuesto por el más avanzado equipo de grúas torre, elevadores mixtos, grúas telescópicas, tractocamiones, camiones de brazo articulado, góndolas para mantenimiento y trabajos en fachadas BMUs y mucho más, siguenos en nuestras redes sociales</h1>
        </motion.div>
    );
};
export default AcercaDe