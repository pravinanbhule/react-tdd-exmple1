import React from 'react'
import './styles.scss'
import Logo from './../../images/logoRoadMapComp.png'
const Header = (props) =>{
    return (
        <header data-test="HeaderComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test='LogoImage' src={Logo}/>
                </div>
            </div>
        </header>
    )
}

export default Header
