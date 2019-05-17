export const initial = {
    labels: [1,2,3,4,5],
    datasets:
    [
        {
            label: "Profit after tax",
            data: [
                1200000,
                1300000,
                1400000,
                1500000,
                1600000
            ],
            backgroundColor: "rgba(101, 188, 162, 0.3)",
            pointBackgroundColor:  "rgba(101, 188, 162, 1)",
        },
        {
            label: "Profit without tax",
            data: [],
            backgroundColor: "rgba(69, 168, 72, 0.3)",
            pointBackgroundColor:  "rgba(69, 168, 72, 1)",
            fill: true,
        }
    ]
}

export const options = {
    maintainAspectRatio: false,
    legend: {
        display: true,
        usePointStyle: true,
        pointStyle: 'line'
        
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 10000000,
                max: 20000000,
                callback: function(value, index, values) {
                    return '€' + value
                }
            }
        }]
    }
}

export function updateChart(val) {
    const newData = JSON.parse(JSON.stringify(initial))
    const initialDataset = initial.datasets[0].data
    const replacementData = initialDataset.map(value => value*(val/10))
    newData.datasets[0].data = replacementData
    return newData
}
