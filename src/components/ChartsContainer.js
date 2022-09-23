import React from 'react'
import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useSelector } from 'react-redux';

const ChartsContainer = () => {
    const [barChart, setBarChart] = useState(true)
    const { monthlyApplication: data } = useSelector((store) => store.allJobs)
    return (
        <Wrapper>
            <h4>Monthhly Applications</h4>
            <button type='button' onClick={() => setBarChart(!barChart)}>
                {barChart ? 'Switch to Area Chart?' : 'Switch to Bar Chart?'}
            </button>
            {BarChart ? <BarChart data={data} /> : <AreaChart data={data} />}
        </Wrapper>
    )
}

export default ChartsContainer