import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

import React from 'react'

const AreaChartComponent = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 50 }}>

            </AreaChart>
        </ResponsiveContainer>

    )
}

export default AreaChartComponent