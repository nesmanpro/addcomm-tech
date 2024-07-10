import Chart from 'chart.js/auto';


let chartInstance = null;
const ctx = document.getElementById('myChart');
const graphStatus = document.getElementById('graphic-status');
const graphTotal = document.getElementById('graphic-total');
const graphRunning = document.getElementById('graphic-running');
const graphSuccess = document.getElementById('graphic-success');
const graphScheduled = document.getElementById('graphic-scheduled');
const graphError = document.getElementById('graphic-error');

const graphics = (data, days) => {


    let total, running, success, scheduled, error;

    if (data) {
        total = data.reduce((acc, numb) => {
            return acc + (numb.categoria.running + numb.categoria.success + numb.categoria.scheduled + numb.categoria.error)
        }, 0);
        running = data.reduce((acc, numb) => {
            return acc + numb.categoria.running
        }, 0);
        success = data.reduce((acc, numb) => {
            return acc + numb.categoria.success
        }, 0);
        scheduled = data.reduce((acc, numb) => {
            return acc + numb.categoria.scheduled
        }, 0);
        error = data.reduce((acc, numb) => {
            return acc + numb.categoria.error
        }, 0);

        const runningPercent = Math.floor((running / total) * 100);
        const successPercent = Math.floor((success / total) * 100);
        const scheduledPercent = Math.floor((scheduled / total) * 100);
        const errorPercent = Math.floor((error / total) * 100);


        graphStatus.innerHTML = `in last ${days} days`;
        graphTotal.innerHTML = `${total}`;
        graphRunning.innerHTML = `
        <div class="dot__color color__info"></div>
        <h2>${running}</h2>
        <p>(${runningPercent}%)</p>`;
        graphSuccess.innerHTML = `
        <div class="dot__color color__positive"></div>
        <h2>${success}</h2>
        <p>(${successPercent}%)</p>`;
        graphScheduled.innerHTML = `
        <div class="dot__color color__warning"></div>
        <h2>${scheduled}</h2>
        <p>(${scheduledPercent}%)</p>`;
        graphError.innerHTML = `
        <div class="dot__color color__negative"></div>
        <h2>${error}</h2>
        <p>(${errorPercent}%)</p>`;

    } else {
        graphStatus.innerHTML = `in last 0 days`;
        graphTotal.innerHTML = `0`;
        graphRunning.innerHTML = `
        <div class="dot__color color__info"></div>
        <h2>0</h2>
        <p>(0%)</p>`;
        graphSuccess.innerHTML = `
        <div class="dot__color color__positive"></div>
        <h2>0</h2>
        <p>(0%)</p>`;
        graphScheduled.innerHTML = `
        <div class="dot__color color__warning"></div>
        <h2>0</h2>
        <p>(0%)</p>`;
        graphError.innerHTML = `
        <div class="dot__color color__negative"></div>
        <h2>0</h2>
        <p>(0%)</p>`;
    }





    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: ' Total',
                data: data ? [running, success, scheduled, error] : [5, 1, 1, 1],
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

export default graphics;




