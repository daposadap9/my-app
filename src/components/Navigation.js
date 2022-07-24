import {NavLink, Outlet} from 'react-router-dom';
import React, { useState } from "react";
import '../cssComponents/Navigation.css'
import Logo from '../Img/components/navigation/logo de la empresa.PNG'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas, faHouse, faQuestion, faList, faContactBook, faSurprise, faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import {faFontAwesome, faServicestack} from '@fortawesome/free-brands-svg-icons';
library.add(fas, faFontAwesome, faFontAwesome);

const Navigation = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () =>{
        if (window.scrollY >= 20){
    setNavbar(true);
}else{
    setNavbar(false)
}
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <header>
            <nav className={navbar ? 'nav-main activo' : 'nav-main'}>
                <NavLink exact to="/"><div className='nav-main__div'>
                <img className='Logo' src={Logo} alt='logo'/><b><span className='nav_main__span'>Ememca </span> SAC</b></div></NavLink>
                <ul className="nav-menu show">
                    <li>
                        <NavLink exact to="/" activeClass="active"><FontAwesomeIcon className='nav-main__ul_icon' activeClass icon={faHouse} />Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClass="active"><FontAwesomeIcon className='nav-main__ul_icon' activeClass icon={faQuestion} />Acerca de</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portafolio" activeClass="active"><FontAwesomeIcon className='nav-main__ul_icon' activeClass icon={faList} />Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="true" activeClass="active"><FontAwesomeIcon className='nav-main__ul_icon' activeClass icon={faServicestack} />Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClass="active"><FontAwesomeIcon className='nav-main__ul_icon' activeClass icon={faContactBook} />Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to="true9" activeClass="active"><FontAwesomeIcon className='nav-main__ul_icon' activeClass icon={faSurprise} />Trabaja con nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClass="active"><FontAwesomeIcon className='nav-main__ul_icon' activeClass icon={faDoorOpen} />Iniciar sesion</NavLink>
                    </li>
                </ul>
            </nav>
            <section><Outlet/></section>        
        </header>
    );
};
export default Navigation