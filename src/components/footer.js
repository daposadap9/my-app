import '../cssComponents/Footer.css';
import React from "react";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faContactCard, faEnvelope, faLocationDot, faPhone, fas} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faFacebookMessenger, faFontAwesome, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
library.add(fas, faFontAwesome);
const Footer = () => {
    return (
    <footer>
        <div className="contenedor-footer">
            <div className="content-foo">
                <h4>Sobre nosotros</h4>
                <p>Somos una compañía peruana especializada en alquiler, comercialización y
                    conservación de equipos de elevación, acceso vertical y transporte. 
                    Nuestro portafolio de productos está compuesto por el más avanzado equipo de grúas torre, 
                    elevadores mixtos, grúas telescópicas, tractocamiones, camiones de brazo articulado, 
                    góndolas para mantenimiento y trabajos en fachadas BMUs y mucho más, siguenos en nuestras
                    redes sociales</p>
                <ul className='list-icon'>
                     {/*La propiedad rel="noopener noreferrer" sirve para proteger a los usuarios de sitios malisiosos*/}
                    <li><a href='https://www.linkedin.com/company/gr%C3%BAas-ememca-per%C3%BA/mycompany/' target="_blank" rel="noreferrer"><FontAwesomeIcon className='ul__icon' icon={faLinkedin} /></a></li>
                    <li><a href='https://facebook.com/gruas.ememca.96' target="_blank" rel="noreferrer"><FontAwesomeIcon className='ul__icon' icon={faFacebook} /></a></li>
                    <li><a href='https://www.instagram.com/ememcasac/' target="_blank" rel="noreferrer"><FontAwesomeIcon className='ul__icon' icon={faInstagram} /></a></li>
                    <li><a href='https://facebook.com' target="_blank" rel="noreferrer"><FontAwesomeIcon className='ul__icon' icon={faFacebookMessenger} /></a></li>
                </ul>
            </div>
            <div className="content-foo2">
                <h4>Explorar</h4>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Acerca de</Link></li>
                    <li><Link to="/portafolio">Portafolio</Link></li>
                    <li><Link to="/">Servicios</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                </ul>
            </div>
            <div className="content-foo3">
                <h4>Contacto</h4>
                <ul>
                <li>
                    <a href='/' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className='ul__icon' icon={faLocationDot} /> 
                        <b className='text'>Antigua Panamericana <br></br>
                        Sur 927, Lurín 15841, Perú<br></br>
                        codigo postal(?)</b>
                    </a>
                </li>
                <li>
                    <a href='/' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className='ul__icon' icon={faPhone} /> 
                        <b className='text'>952153395</b>
                    </a>
                </li>
                <li>
                    <a href='/' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className='ul__icon' icon={faEnvelope} /> 
                        <b className='text'>ememcasac@gmail.com</b>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/diego-alejandro-posada-posada-2aa562129' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className='ul__icon' icon={faContactCard} /> 
                        <b className='text'>contacto con el 
                        <br></br>desarrollador</b>
                    </a>
                </li>
                </ul>
            </div>
        </div>
        <div className="advertenciaFooter">Este sitio funciona mejor con las últimas versiones de
            Microsoft Edge, Google
            Chrome y Firefox.</div>
        <h2 className="titulo-final">&copy; Ememca todos los derechos reservados 2022</h2>
    </footer>
    );
};
export default Footer