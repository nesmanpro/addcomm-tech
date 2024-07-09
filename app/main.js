import '../css/index.css';
import myChart from './components/chartGraphic';
import items from './components/batches';


class App {
    constructor() {
        document.body.style.opacity = '1';
        this._createChart();
        this._showItems();
    }

    _createChart() {
        myChart();
    }

    _showItems() {
        items();
    }

}

new App();

