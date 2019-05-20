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