
import PlainChart from "./PlainChart";
import Highcharts from 'highcharts';

class TemperatureChart extends PlainChart
{
    constructor(props) {
        super(props);
        this.options = {

            yAxis: {
                title: {
                    text: '',
                },
            },

            series: [
                {
                   data: props.data
                }],

        };
    }


}
export default TemperatureChart;