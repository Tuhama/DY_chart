
import PlainChart from "./PlainChart";


class TemperatureChart extends PlainChart
{
    constructor(props) {
        super(props);
        this.options = {

            yAxis: {
                title: {
                    text: 'Temperature (C)',
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