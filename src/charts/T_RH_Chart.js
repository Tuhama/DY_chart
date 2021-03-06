
import PlainChart from "./PlainChart";


class T_RH_Chart extends PlainChart
{
    constructor(props) {
        super(props);
        this.options = {
              yAxis: [{ //--- Primary yAxis
                    title: {
                        text: 'Temperature'
                    }
                        },
                        { //--- Secondary yAxis
                    title: {
                        text: 'Relative Humidity (%)'
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


export default T_RH_Chart;