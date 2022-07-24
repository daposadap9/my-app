import '../cssComponents/Login.css' 
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
    return (
      <div classname="bodyLogin">
        <div class="box-form">
          <div class="left">
            <div className='background-left'>
            <div class="overlay">
              <h1>Gruas Ememca</h1>
              <p className='p-login'>¡Aqui amamos lo que hacemos!</p>
                <div class="buttn">			
                <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} className='margin-left'></FontAwesomeIcon>Ingresar con facebook</a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} className='margin-left'></FontAwesomeIcon>Ingresar con twitter</a>
                </div>
                </div>
                </div>
            </div>
        
        <div class="right">
		<h5>Ingreso de colaboradores</h5>
		<p className='p-login'>No tienes cuenta? <a href="#">crea tu cuenta</a> tarda menos de un minuto</p>
		<div class="inputs">
			<input type="text" placeholder="Usuario"/>
			<br/>
			<input type="password" placeholder="Ingresa tu contraseña"/>
		</div>
			
			<br/><br/>
			
		<div class="remember-me--forget-password">		
	<label>
		<input type="checkbox" name="item" checked/>
		<span class="text-checkbox">Recordarme</span>
	</label>
			<p className='p-login'><a href="#">olvidaste tu contraseña?</a></p>
		</div>
			
			<br/>
			<button className='button-login'><a href="#">ingresar</a></button>
	</div>
	
</div>
</div>
    );
};
export default Login