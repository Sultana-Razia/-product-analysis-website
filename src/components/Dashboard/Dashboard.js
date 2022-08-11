import React from 'react';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='dashboard-container'>
            <h2>MONTH WISE SELL</h2>
            <LineChart width={700} height={500} data={data}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
            <h2>Investment VS Revenue</h2>
            <AreaChart width={700} height={500} data={data}>
                <Area dataKey={'revenue'}></Area>
                <Area dataKey={'investment'}></Area>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </AreaChart>
            <h2>Investment VS Revenue</h2>
            <BarChart width={700} height={500} data={data}>
                <Bar dataKey={'revenue'} fill="#8884d8"></Bar>
                <Bar dataKey={'investment'} fill="#82ca9d"></Bar>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
            <h2>Investment VS Revenue</h2>
            <PieChart width={500} height={500}>
                <Pie data={data} dataKey={'revenue'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                <Pie data={data} dataKey={'investment'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label></Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Dashboard;