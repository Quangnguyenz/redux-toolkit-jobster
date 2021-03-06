import React from 'react'
import { Logo } from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import { Link } from 'react-router-dom'
const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>Tracking</span> App</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quaerat dolorum? Quaerat nemo nostrum a beatae laboriosam aperiam. Cumque dolores sapiente delectus saepe soluta sed, consectetur atque deleniti fugit inventore?</p>
                    <Link to='/register' className='btn btn-hero'>Login/ register</Link>
                </div>
                <img src={main} alt="main" className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing