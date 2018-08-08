
import PlainChart from "./PlainChart";


class Press_QV_Chart extends PlainChart
{
    constructor(props) {
        super(props);
        this.options = {
              yAxis: [{ //--- Primary yAxis
                    title: {
                        text: 'Pressure (hPa)'
                    }
                        },
                        { //--- Secondary yAxis
                    title: {
                        text: 'Mixing Ratio (g/kg)'
                    },
                    opposite: true
                        }
                ],
            series: [
                {
                    yAxis: 0,
                    data: props.data1
                },
                {
                    yAxis: 1,
                    data: props.data2
                }]
        };
    }


}


export default Press_QV_Chart;