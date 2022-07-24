import React, {useRef, useEffect} from "react";
import '../cssComponents/Slider.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({children}) => { 
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);
    const Siguiente = () =>{
            //Se comprueba que el slideshow contenga elementos
        if(slideshow.current.children.length > 0){
            //Obtenemos el primer valor del slideshow
            const primerElemento = slideshow.current.children[0];
            //Esta es la transicion a la que se accede en el elemento slideshow
            slideshow.current.style.transition = `500ms ease-out all`;
            const tamañoSlide= slideshow.current.children[0].offsetWidth;
            //mover el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            const transicion =()=> {
                //Reinciamos la posicion deL Slideshow.
             slideshow.current.style.transition = 'none';
            slideshow.current.style.transform =  `translateX(0)`;
            
            //Tomamos el primer elemento y lo mandamos al final
            slideshow.current.appendChild(primerElemento);
            slideshow.current.removeEventListener('transitionend', transicion)
            }
            //EventListener para cuando termina la transicion.
            slideshow.current.addEventListener('transitionend', transicion);
        }
    }
    const Anterior = ()=>{
        if(slideshow.current.children.length>0){
            //obtener el ultimo elemento de slideshow
            const index =slideshow.current.children.length - 1;
            const UltimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(UltimoElemento, slideshow.current.firstChild);
            slideshow.current.style.transition="none";
            const tamañoSlide= slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform=`translateX(-${tamañoSlide}px)`;

            setTimeout(()=>{
                slideshow.current.style.transition = '500ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);

        }
    }
    useEffect(()=>{
        intervaloSlideshow.current = setInterval(()=>{
            Siguiente(intervaloSlideshow);
        }, 5000);
        //eliminar intervalos
        slideshow.current.addEventListener("mouseenter", ()=>{
            clearInterval(intervaloSlideshow.current);
        })
        slideshow.current.addEventListener("mouseleave", ()=>{
            intervaloSlideshow.current = setInterval(()=>{
                Siguiente()
            }, 5000);
        })
    },[]);
   
    try {
       return (
        <SliderStyle>
            <ContenedorSliderStyle ref={slideshow}>
                {children}                
            </ContenedorSliderStyle>
            <div> 
                <FontAwesomeIcon onClick={Anterior} className='button_left' icon={faArrowLeft}/>
                <FontAwesomeIcon onClick={Siguiente} className='button_right' icon={faArrowRight}/>
            </div>
        </SliderStyle>
    ); 
    } catch (error) {
        console.log(error)
    }
    
};
const SliderStyle = styled.div`
position: relative;
width: 100%;
border-radius: 10px;
margin-top: 6px;
margin-bottom: 20px;
overflow: hidden;

`;
const ContenedorSliderStyle = styled.div`
display: flex;
flex-wrap: nowrap;
height: 640px;
border-radius: 10px;
`;
const MySliderStyle = styled.div`
min-width: 100%;
z-index: 10;
overflow: hidden;
`;
const TextSlider =styled.div`
position: absolute;
width:100%;
color: black;
top:85%;
padding: 10px;
text-align:center;
background: linear-gradient(to bottom right, rgba(255, 255, 0, 0.616), rgba(255, 0, 0, 0.616));
box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
border-radius: 10px;
z-index:20;
`;
export {Slider, MySliderStyle, TextSlider }


