export const data = {
    labels: [1,2,3,4,5],
    datasets:
    [
        {
            label: "Profit after tax",
            data: [
                13000000,
                14000000,
                15000000,
                16000000,
                17000000,
            ],
            backgroundColor: "rgba(101, 188, 162, 0.3)",
            pointBackgroundColor:  "rgba(101, 188, 162, 1)",
            fill: true,
        },
        {
            label: "Profit without tax",
            data: [
                14000000,
                14500000,
                15600000,
                16700000,
                17500000,
            ],
            backgroundColor: "rgba(69, 168, 72, 0.3)",
            pointBackgroundColor:  "rgba(69, 168, 72, 1)",
            fill: true,
        }
    ]
}

export const options = {
    maintainAspectRatio: false,
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
