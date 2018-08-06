import '../App.css';
import Highcharts from 'highcharts';
import React , { Component } from "react";



class PlainChart extends Component {

    constructor(props) {
        super(props);
        this.chartContainer = React.createRef();
    }


    componentDidMount() {
        this.options.time   = {useUTC : false};
        this.options.title  = {text: this.props.city};
        this.options.chart  = {type: 'line'};
        this.options.xAxis  = {
            type: 'datetime',
            tickInterval: 3600 * 1000,
        };

        this.chart = new Highcharts[this.props.type || 'Chart'](
            this.chartContainer.current,
            this.options
        );
    }
    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {
        return <div ref={this.chartContainer} />;
    }
}
export default PlainChart;