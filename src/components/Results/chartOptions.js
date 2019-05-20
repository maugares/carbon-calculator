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
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(',');
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
    },
    scales: {
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(',');
                    return value
                }
            }
        }]
    }
}

// export const plugins = [{
//     beforeRender: function (x, options) {
//         var c = x.chart
//         var dataset = x.data.datasets[0];
//         var yScale = x.scales['y-axis-0'];
//         var yPos = yScale.getPixelForValue(0);

//         var gradientFill = c.ctx.createLinearGradient(0, 0, 0, c.height);
//         gradientFill.addColorStop(0, 'green');
//         gradientFill.addColorStop(yPos / c.height - 0.01, 'green');
//         gradientFill.addColorStop(yPos / c.height + 0.01, 'red');
//         gradientFill.addColorStop(1, 'red');

//         var model = x.data.datasets[0]._meta[Object.keys(dataset._meta)[0]].dataset._model;
//         model.backgroundColor = gradientFill;
//     }
// }]