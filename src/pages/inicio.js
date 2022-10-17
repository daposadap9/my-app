import '../cssPages/Inicio.css';
import '../cssComponents/floatButton.css'
import '../cssComponents/floatButton2.css'

import {Link} from 'react-router-dom';
import VideoColaborador from '../Img/Pages/inicio/videoColaborador.mp4';
//imagenes tarejetas
import Image1 from '../Img/Pages/inicio/img1.jpeg';
import Image2 from '../Img/Pages/inicio/img2.jpeg';
import Image3 from '../Img/Pages/inicio/img3.jpeg';
import Image4 from '../Img/Pages/inicio/img4.jpeg';
// //imagenes tarjetas
//iamgenes slider
import Imagen1 from "../Img/components/Slider/Imagen1.jpg";
import Imagen2 from "../Img/components/Slider/Imagen2.jpg"; 
import Imagen3 from "../Img/components/Slider/Imagen3.jpeg";
import Imagen4 from "../Img/components/Slider/Imagen4.jpeg"; 
import Imagen5 from "../Img/components/Slider/Imagen5.jpeg";
//iamgenes slider
import React, {useState, useEffect, useRef} from "react";
import {Slider, MySliderStyle, TextSlider} from '../components/Slider';
import Contact from '../components/contact';
import VideoPlayer from 'react-video-js-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Modal from '../components/modal';
import { motion } from 'framer-motion';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'lottie-web';
import CardsHover from '../components/cardsHover';
const Inicio = () => {

    /*Estados*/
    const [estadoModal1, cambiarEstadoModal1] = useState(false)
    const [estadoModal2, cambiarEstadoModal2] = useState(false)
    const [estadoModal3, cambiarEstadoModal3] = useState(false)
    /*Estados*/

    /*creacion de parallax*/
    const [offsetY, setOffsetY] = useState(0)
    useEffect(()=>{
        const handleScroll = ()=> setOffsetY(window.pageYOffset);
        return () => window.removeEventListener("scroll",handleScroll);
    },[])

    const container = useRef(null)
    useEffect(()=>{
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../Img/components/GridImages/construccion.json')
        })
    })

    /*creacion de parallax*/
    /*Variable Conmutada React*/
    const date = new Date(Date.now());
    let hour = date.getHours();
    const getSaludo =()=>{
            if(hour<12){
                return ("¡Buenos dias! ¡Bienvenido a nuestra pagina web!")}
              else if(hour<18){
                return ("¡Buenas tardes! ¡Bienvenido a nuestra pagina web!") 

              }else{
                return ("¡Buenas noches!¡Bienvenido a nuestra pagina web!")
              }
              
        }
    const saludo = getSaludo()
    /*Variable Conmutada React*/
    /*messages 

    /*messages 

    /**/
    const video = VideoColaborador
    return (
    
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x:window.innerWidth, transition:{duration: 0.1}}}
    >
        
        <h1 className='centrar'>{saludo}</h1>
        
        {/*Mi slider */}
        <div data-aos="fade-down">
           <Slider>
            <MySliderStyle>
                    <TextSlider data-aos="fade-left"><h1>¡Ofrecemos Equipos de Izaje y Gruas Telescópicas! <Link to="/contact">haz clic aqui</Link></h1></TextSlider>
                    <img className="img" src={Imagen1} alt={"imagen1"}/>
            </MySliderStyle>
            <MySliderStyle>
            <TextSlider data-aos="fade-left"><h1>¡Quieres conocer nuestras gruas telescópicas! <Link to="/contact">haz clic aqui</Link></h1></TextSlider>
                    <img className="img" src={Imagen2} alt={"imagen2"}/>
            </MySliderStyle> 
            <MySliderStyle>
                    <img className="img" src={Imagen3} alt={"imagen3"}/>
            </MySliderStyle> 
            <MySliderStyle>
                    <img className="img" src={Imagen4} alt={"imagen4"}/>
            </MySliderStyle> 
            <MySliderStyle>
                    <img className="img" src={Imagen5} alt={"imagen5"}/>
             </MySliderStyle> 
        </Slider> 
        </div>
        {/*Mi slider */}
        {/*Vista de tarjetas*/}
        <div class="news-cards" data-aos="fade-down">
            <div>
                <div class="container2NewsCards"><img class="imagen" srcSet={Image1} alt=""/></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                    accusantium nihil magni laborum perspiciatis ab architecto vero consectetur ut quia.</p>
                    <Boton className='btn-shine' onClick={() => cambiarEstadoModal1 (!estadoModal1)}>Leer mas</Boton>
            </div>
            <div>
                <div class="container2NewsCards"><img class="imagen" srcSet={Image2} alt=""/></div>
                <h3>¿Que es una grua telescopica?</h3>
                <p>La característica principal de estas grúas es que son móviles, 
                debido a que se encuentran situadas encima de camiones. De esta forma 
                pueden desplazarse a los lugares donde sean...</p>
                    <Boton className='btn-shine' onClick={() => cambiarEstadoModal2 (!estadoModal2)}>Leer mas</Boton>
            </div>
            <div>
                <div class="container2NewsCards"><img class="imagen" srcSet={Image3} alt=""/></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                    accusantium nihil magni laborum perspiciatis ab architecto vero consectetur ut quia.</p>
                    <Boton className='btn-shine' onClick={() => cambiarEstadoModal1 (!estadoModal1)}>Leer mas</Boton>
            </div>
            <div>
                <div class="container2NewsCards"><img class="imagen" srcSet={Image4} alt=""/></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                    accusantium nihil magni laborum perspiciatis ab architecto vero consectetur ut quia.</p>
                    <Boton className='btn-shine' onClick={() => cambiarEstadoModal1 (!estadoModal1)}>Leer mas</Boton>
            </div>
        </div>
        {/*Vista de tarjetas*/}
        <CardsHover></CardsHover>
        

        {/*Vista de banner*/}
        <section class="cards-banner-one">
            <div style={{transform: `translateY(${offsetY * 0.3}px)`}} class="content">
                <h2>Trabaja con nosotros</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore modi nostrum ipsum, dolor illo quasi
                    quam porro ex omnis ullam!</p>
                    <label className='btn'>¡Haz clic aqui!<FontAwesomeIcon className='margin-right' icon={faArrowCircleRight}/></label>
            </div>
        </section>
        {/*Vista de banner*/}

        {/*Vista de tarjetas*/}
        <div className='divAnimation'>
            <div className="containerAnimation" ref={container}></div>
            <p className='textAnimation'>La característica principal de estas grúas es que son móviles, 
                debido a que se encuentran situadas encima de camiones. De esta forma 
                pueden desplazarse a los lugares donde sean necesarias, con facilidad mientras 
                el camión pueda acceder.
                <br/>
                Su mecanismo para izar cargas funciona con una pluma hueca (hueca que contiene varios tubos) 
                que posee diversos tubos, uno dentro del otro y un sistema hidráulico que permite la extensión 
                de los mismos. Alcanzando así las alturas necesarias con el alargamiento del perfil sin 
                inconvenientes.
                <br/>
                Estas grúas poseen una pluma telescópica y es usual que esta sea rectangular, aunque en la 
                actualidad vemos una tendencia a nuevas grúas con forma ovalada debido a que ofrece un poco 
                más de resistencia.
                <br/>
                Los materiales de fabricación son aceros de alta resistencia, ya que las grúas telescópicas son 
                sometidas a grandes cargas (mercancías y cargas) de trabajo y fuerzas de flexión. Otro aspecto 
                característico es que las grúas telescópicas están instaladas en bases giratorias, llamadas 
                tornamesas, permitiendo operar en un amplio rango de radio del camión.</p>        
        </div>
        {/*Vista de tarjetas*/}
        {/*Modales Modificables */}
        <Modal
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo={"Nuestros colaboradores"}
        mostrarOverlay={true}
        mostrarHeader={true}
        >
            <p>Aqui tenemos un video de uno de nuestros colaboradores</p>
            <div><VideoPlayer className="videoColaborador" src={video} width="500" height="400" data-aos="fade-up-left"/></div>      
        </Modal>
        <Modal
        estado={estadoModal2}
        cambiarEstado={cambiarEstadoModal2}
        titulo={"¿Qué es grúa telescópica? 🤔"}
        mostrarOverlay={true}
        mostrarHeader={true}
        >
            <p>La característica principal de estas grúas es que son móviles, 
                debido a que se encuentran situadas encima de camiones. De esta forma 
                pueden desplazarse a los lugares donde sean necesarias, con facilidad mientras 
                el camión pueda acceder.
                <br/>
                Su mecanismo para izar cargas funciona con una pluma hueca (hueca que contiene varios tubos) 
                que posee diversos tubos, uno dentro del otro y un sistema hidráulico que permite la extensión 
                de los mismos. Alcanzando así las alturas necesarias con el alargamiento del perfil sin 
                inconvenientes.
                <br/>
                Estas grúas poseen una pluma telescópica y es usual que esta sea rectangular, aunque en la 
                actualidad vemos una tendencia a nuevas grúas con forma ovalada debido a que ofrece un poco 
                más de resistencia.
                <br/>
                Los materiales de fabricación son aceros de alta resistencia, ya que las grúas telescópicas son 
                sometidas a grandes cargas (mercancías y cargas) de trabajo y fuerzas de flexión. Otro aspecto 
                característico es que las grúas telescópicas están instaladas en bases giratorias, llamadas 
                tornamesas, permitiendo operar en un amplio rango de radio del camión.</p>     
        </Modal>
        <Modal
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
        titulo={"Servicio al cliente"}
        posicionOverlay={"end"}
        posicionOverlay2={"right"}
        mostrarHeader={true}
        padding={"10px"}
        bottom={"130px"}
        color={"white"}
        colorFont={"black"}
        encabezadoBotom={"0px"}
        encabezadoPaddingBottom={"0px"}
        tamaño={"440px"}
        >
            <FontAwesomeIcon className="iconPersonFloat" icon={faUser}></FontAwesomeIcon><b><p className='text-inline'>Hola 🙋‍♀️, en que podemos ayudarte?</p></b>
            <br/>
            <input type="text" placeholder='enviar mensaje...' className='input-float'/><button className="send-float"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button> 
        </Modal>
        <button className='float' onClick={() => cambiarEstadoModal3 (!estadoModal3)}><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></button>
        {/*Modales Modificables */}
        <Contact id="/contact"/>
        </motion.div>
    );
};
const Boton = styled.button`
padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: white;
 z-index: 1;
 background: #002642;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 border: 1px solid white;
 box-sizing: border-box;
 overflow: hidden;
::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #abc4ff;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    transition: all 250ms
}
:hover{
    color: #3D3B8E;
    cursor:pointer;
    border:none;
}
:hover::before{
    width: 100%; 
}

`;
export default Inicio
