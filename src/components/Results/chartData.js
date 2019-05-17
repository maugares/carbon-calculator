export const optionsEuro = {
    maintainAspectRatio: false,
    legend: {
        display: true,
        usePointStyle: true,
        pointStyle: 'line'
        
    },
    scales: {
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    return '€' + value
                }
            }
        }]
    }
}

export const options = {
    maintainAspectRatio: false,
    legend: {
        display: true,
        usePointStyle: true,
        pointStyle: 'line'
        
    }
}

// export function updateChart(val) {
//     const newData = JSON.parse(JSON.stringify(initial))
//     const initialDataset = initial.datasets[0].data
//     const replacementData = initialDataset.map(value => value*(val/10))
//     newData.datasets[0].data = replacementData
//     return newData
// }
