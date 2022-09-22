import React from 'react'

import React, { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useSelector } from 'react-redux';

const ChartsContainer = () => {
    const [BarChart, setBarChart] = useState(true)
    const { monthlyApplication: data } = useSelector((store) => store.allJobs)
    return (
        <Wrapper>
            <h4>Monthhly Applications</h4>
            <button type='button' onClick={() => setBarChart(!barChart)}>
                {barChart}
            </button>
        </Wrapper>
    )
}

export default ChartsContainer