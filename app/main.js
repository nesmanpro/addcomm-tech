import '../css/index.css';
import myChart from './components/chartGraphic';


class App {
    constructor() {
        document.body.style.opacity = '1';
        this._createChart();
    }

    _createChart() {
        myChart();
    }

}

new App();

