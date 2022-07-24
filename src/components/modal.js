import '../cssComponents/Modal.css';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from "react";
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Modal = ({
    children, 
    estado, 
    cambiarEstado, 
    titulo, 
    mostrarOverlay, 
    posicionOverlay, 
    posicionOverlay2, 
    mostrarHeader,
    bottom,
    padding,
    color,
    colorFont,
    encabezadoBotom,
    encabezadoPaddingBottom,
    tamaño
    }) => {
    const location = useLocation();
    return (
        <div
        >
            {estado && 
            <Overlay mostrarOverlay={mostrarOverlay} posicionOverlay={posicionOverlay} posicionOverlay2={posicionOverlay2} location={location} key={location.pathname}>
                <ContenerdorModal padding={padding} bottom={bottom} color={color} colorFont={colorFont} tamaño={tamaño}>
                    {mostrarHeader &&
                    <EncabezadoModal encabezadoBotom={encabezadoBotom} encabezadoPaddingBottom={encabezadoPaddingBottom} >
                        <h3>{titulo}</h3>
                    </EncabezadoModal>}
                    
                    <BotonCerrar onClick={()=>cambiarEstado(false)}><FontAwesomeIcon className='Modal-icon' activeClass icon={faClose} /></BotonCerrar>
                    {children}
                </ContenerdorModal>
            </Overlay>
            }
        </div>
    );
};
export default Modal
const Overlay = styled.div`
width 100vw;
height 100vh;
position:fixed;
top:0;
left:0;
background: ${props => props.mostrarOverlay ? "rgba(0,0,0,.5)":"rgba(0,0,0,0)"};
padding: 40px;
display: flex;
align-items: ${props => props.posicionOverlay ? props.posicionOverlay : "center"} ;
justify-content: ${props => props.posicionOverlay2 ? props.posicionOverlay2 : "center"};
z-index:60;
`;
const ContenerdorModal = styled.div`
width: ${props => props.tamaño ? props.tamaño : "500px"};
min-height: 100px;
max-height: 550px;
background: #fff;
position: relative;
border-radius: 5px;
box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
background: ${props => props.color ? props.color :"linear-gradient(to bottom right, rgb(0, 0, 61), rgb(97, 91, 91))"};
padding: ${props => props.padding ? props.padding : "20px"};
z-index:100000;
color: ${props => props.colorFont ? props.colorFont :"white"};
overflow: auto;
margin-right: 100px;
margin-bottom: ${props => props.bottom ? props.bottom : "0px"};
`;
const EncabezadoModal = styled.div`
display:flex;
align items:center;
justify-content: space-between;
margin-bottom: ${props => props.encabezadoBotom ? props.encabezadoBotom : "20px"};
padding-bottom: ${props => props.encabezadoPaddingBottom ? props.encabezadoPaddingBottom : "20px"};
border-bottom: 1px solid #E8E8E8;
h3{
    fon-weight:500;
    font-size:20px;
    color: #1766DC;
}
`;
const BotonCerrar = styled.div`
position: absolute;
top: 20px;
right: 20px;
width: 30px;
height: 30px;
border:none;
background: none;
cursor:pointer;
transition .3s ease all;
border-radius: 5px;

color: #1766DC;
text-align:center;
&:hover{
    background: #f2f2f2;
}
.Modal-icon{
    width:100%;
    height:100%;
}
`