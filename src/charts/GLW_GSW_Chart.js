
import PlainChart from "./PlainChart";


class GLW_GSW_Chart extends PlainChart
{
    constructor(props) {
        super(props);
        this.options = {
              yAxis: [{ //--- Primary yAxis
                    title: {
                        text: 'Longwave Radiation Flux  (W/m^2)'
                    }
                        },
                        { //--- Secondary yAxis
                    title: {
                        text: 'Shortwave Radiation Flux  (W/m^2)'
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


export default GLW_GSW_Chart;