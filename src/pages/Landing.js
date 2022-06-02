import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
    return (
        <main>
            <nav>
                <img src={logo} alt="logo" className='logo' />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>Tracking</span> App</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quaerat dolorum? Quaerat nemo nostrum a beatae laboriosam aperiam. Cumque dolores sapiente delectus saepe soluta sed, consectetur atque deleniti fugit inventore?</p>
                    <button className='btn btn-hero'>Login/ register</button>
                </div>
                <img src={main} alt="main" className='img main-img' />
            </div>
        </main>
    )
}

export default Landing