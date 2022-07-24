import React from "react";
import '../cssComponents/Contact.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faLocationDot, faPhone, fas} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faFontAwesome, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
library.add(fas, faFontAwesome);
const Contact = () => {
    return (
        <section id="Contacto" className="sectionContactUs" >
            <div className="container2">
                <div className="contact-form">
                    <h2>Enviar un mensaje</h2>
                    <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" required/>
                            <span>Nombres</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required/>
                            <span>Apellidos</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="email" required/>
                            <span>Correo electronico</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required/>
                            <span>Numero de celular</span>
                        </div>
                        <div className="inputBox w100">
                            <textarea required></textarea>
                            <span>Escriba su mensaje aquí...</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="submit" value="Enviar"/>
                        </div>
                    </div>
                </div>
                <div className="contact-info">
                    <div>
                        <h2>Informacion de contacto</h2>
                        <ul className="info">
                            <li>
                                <span>
                                <FontAwesomeIcon className='ul__icon' icon={faLocationDot} />
                                </span>
                                <span><b>Antigua Panamericana<br></br>
                                        Sur 927, Lurín 15841, Perú<br></br>
                                        codigo postal(?)</b>
                                </span>
                            </li>
                            <li>
                                <span>
                                <FontAwesomeIcon className='ul__icon' icon={faEnvelope} />
                                </span>
                                <span><b>ememcasac@gmail.com</b></span>
                            </li>
                            <li>
                                <span>
                                <FontAwesomeIcon className='ul__icon' icon={faPhone} />
                                </span>
                                <span><b>952153395</b></span>
                            </li>
                        </ul>
                    </div>
                    <ul className="sci">
                        <li><a href="https://www.facebook.com/gruas.ememca.96" target="_blank" rel="noreferrer"><FontAwesomeIcon className='ul__icon-contact' icon={faFacebook} /></a></li>
                        <li><a href="https://www.instagram.com/ememcagruas/" target="_blank" rel="noreferrer"><FontAwesomeIcon className='ul__icon-contact' icon={faInstagram} /></a></li>
                        <li><a href="https://www.linkedin.com/company/gr%C3%BAas-ememca-per%C3%BA/" target="_blank" rel="noreferrer"><FontAwesomeIcon className='ul__icon-contact' icon={faLinkedin}/></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Contact