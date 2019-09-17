import React from 'react'
import { Pie } from 'react-chartjs-2';

const data = {
    datasets: [{
        data: [48, 17, 10, 10, 10, 5],
        backgroundColor: [
            '#e6b818',
            '#75d69c',
            '#5472d2',
            '#ff675b',
            '#5472d2c9',
            '#cec2ab'
        ],
        borderColor: "rgba(0,0,0,0)"
    }],

    labels: [
        'LINA DEVELOPMENT 48%',
        'MARKETING 17%',
        'OPERATION 10%',
        "LEGAL 10%",
        'HELPER NETWORK 10%',
        'BOUNTY 5%'
    ],
};
const options = {
    legend: {
        labels: {
            fontColor: '#fff',
            fontSize: 14,
            padding: 30
        },
        position: 'bottom'
    },
    animation: {
        duration: 2000,
        easing: 'linear'
    }
}

export default function Charts() {
    return (
        <>
            <Pie data={data} options={options} />
        </>
    );
}
