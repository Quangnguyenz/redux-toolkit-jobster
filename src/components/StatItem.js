import React from 'react'
import Wrapper from '../assets/wrapper/StatItems'
const StatItem = ({ count, title, icon, color, bcg }) => {
    return (
        <Wrapper color={color} bcg={bcg}>
            <header>
                <span className='count'></span>
                <span className='icon'></span>
            </header>
        </Wrapper>
    )
}
export default StatItem