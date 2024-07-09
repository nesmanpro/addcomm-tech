import Chart from 'chart.js/auto';


export default function myChart() {

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: ' Total',
                data: [344, 100, 32, 30],
                backgroundColor: [
                    '#03a9f4',
                    '#22c55e',
                    '#ff7b1c',
                    '#d32f2f',
                ],
                borderWidth: 0
            }]
        },

    });
}
