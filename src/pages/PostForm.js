import { faArrowRotateBack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Example from '../components/example'
function PostForm (){
return (

    <div>
        <NavLink to='/Portafolio' className='example'><FontAwesomeIcon className='nav-main__ul_icon' activeClass='active' icon={faArrowRotateBack} />devolverse</NavLink>
        <br></br>
        <br></br>
        <Example/>
    </div>   
)
}
export default PostForm
