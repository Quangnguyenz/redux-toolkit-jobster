import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'
const Landing = () => {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

const Wrapper = styled.main`
nav{
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: auto 0;
    height: var(--nav-height);
    display: flex;
    align-items: center;
}
`

export default Landing