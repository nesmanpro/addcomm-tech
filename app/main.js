import '../css/index.css';
import myChart from './components/chartGraphic';
import items from './components/batches';
import Home from './pages/Home';

class App {
    constructor() {
        document.body.style.opacity = '1';
        this._createHome();
        this._createChart();
        this._showItems();
    }

    _createChart() {
        myChart();
    }

    _showItems() {
        items();
    }

    _createHome() {
        this.home = new Home();
    }


}

new App();

