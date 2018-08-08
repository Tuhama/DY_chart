import React, { Component } from 'react';

import './App.css';
import TemperatureChart from "./charts/TemperatureChart";
import T_RH_Chart from "./charts/T_RH_Chart";
import Press_QV_Chart from "./charts/Press_QV_Chart";
import GLW_GSW_Chart from "./charts/GLW_GSW_Chart";


class App extends Component {

    render() {

        const rawdata = [
            {
                UnixTime: 1526601600,
                T: 14.4,
                QV: 4.9,
                Press: 866.3,
                GLW: 356.1,
                GSW: 0.0,
                RH: 42.
            },
            {
                UnixTime: 1526605200,
                T: 13.6,
                QV: 5.1,
                Press: 866.6,
                GLW: 353.3,
                GSW: 0.0,
                RH: 46.
            },
            {
                UnixTime: 1526608800,
                T: 12.8,
                QV: 5.2,
                Press: 867.2,
                GLW: 344.1,
                GSW: 11.9,
                RH: 50.
            },
            {
                UnixTime: 1526612400,
                T: 13.8,
                QV: 5.3,
                Press: 867.3,
                GLW: 314.4,
                GSW: 152.3,
                RH: 47.
            },
            {
                UnixTime: 1526616000,
                T: 14.2,
                QV: 4.8,
                Press: 867.5,
                GLW: 349.9,
                GSW: 222.4,
                RH: 42.
            },
            {
                UnixTime: 1526619600,
                T: 15.5,
                QV: 4.6,
                Press: 867.5,
                GLW: 273.7,
                GSW: 547.9,
                RH: 37.
            },
            {
                UnixTime: 1526623200,
                T: 16.6,
                QV: 4.4,
                Press: 867.4,
                GLW: 276.0,
                GSW: 701.8,
                RH: 32.
            },
            {
                UnixTime: 1526626800,
                T: 17.2,
                QV: 4.2,
                Press: 867.2,
                GLW: 277.3,
                GSW: 817.7,
                RH: 30.
            },
            {
                UnixTime: 1526630400,
                T: 17.8,
                QV: 4.4,
                Press: 866.9,
                GLW: 280.3,
                GSW: 885.1,
                RH: 30.
            },
            {
                UnixTime: 1526634000,
                T: 18.7,
                QV: 4.4,
                Press: 866.6,
                GLW: 285.5,
                GSW: 899.5,
                RH: 29.
            },
            {
                UnixTime: 1526637600,
                T: 19.5,
                QV: 4.3,
                Press: 866.2,
                GLW: 288.6,
                GSW: 862.7,
                RH: 27.
            },
            {
                UnixTime: 1526641200,
                T: 20.2,
                QV: 4.5,
                Press: 865.8,
                GLW: 307.8,
                GSW: 770.0,
                RH: 26.
            },
            {
                UnixTime: 1526644800,
                T: 20.7,
                QV: 4.5,
                Press: 865.4,
                GLW: 296.1,
                GSW: 645.4,
                RH: 25.
            },
            {
                UnixTime: 1526648400,
                T: 20.9,
                QV: 4.5,
                Press: 865.3,
                GLW: 298.2,
                GSW: 483.9,
                RH: 25.
            },
            {
                UnixTime: 1526652000,
                T: 20.4,
                QV: 4.9,
                Press: 865.4,
                GLW: 300.4,
                GSW: 301.3,
                RH: 29.
            },
            {
                UnixTime: 1526655600,
                T: 20.1,
                QV: 4.8,
                Press: 865.4,
                GLW: 305.2,
                GSW: 111.9,
                RH: 28.
            },
            {
                UnixTime: 1526659200,
                T: 19.1,
                QV: 5.0,
                Press: 865.6,
                GLW: 311.6,
                GSW: 0.0,
                RH: 31.
            },
            {
                UnixTime: 1526662800,
                T: 18.6,
                QV: 4.8,
                Press: 865.9,
                GLW: 295.8,
                GSW: 0.0,
                RH: 31.
            },
            {
                UnixTime: 1526666400,
                T: 18.0,
                QV: 4.8,
                Press: 866.2,
                GLW: 298.1,
                GSW: 0.0,
                RH: 33.
            },
            {
                UnixTime: 1526670000,
                T: 17.8,
                QV: 4.8,
                Press: 866.4,
                GLW: 330.3,
                GSW: 0.0,
                RH: 33.
            },
            {
                UnixTime: 1526673600,
                T: 17.6,
                QV: 4.8,
                Press: 866.2,
                GLW: 327.4,
                GSW: 0.0,
                RH: 33.
            },
            {
                UnixTime: 1526677200,
                T: 17.1,
                QV: 4.8,
                Press: 866.2,
                GLW: 316.0,
                GSW: 0.0,
                RH: 34.
            },
            {
                UnixTime: 1526680800,
                T: 16.1,
                QV: 4.5,
                Press: 866.1,
                GLW: 283.5,
                GSW: 0.0,
                RH: 34.
            },
            {
                UnixTime: 1526684400,
                T: 15.9,
                QV: 4.3,
                Press: 866.0,
                GLW: 280.4,
                GSW: 0.0,
                RH: 33.
            }
        ];


        let t_data = [];
        let rh_data = [];
        let p_data = [];
        let qv_data = [];
        let glw_data = [];
        let gsw_data = [];
        rawdata.forEach(obj => {

            let time = (obj.UnixTime * 1000);

            t_data.push([time, obj.T]);
            rh_data.push([time, obj.RH]);
            p_data.push([time, obj.Press]);
            qv_data.push([time, obj.QV]);
            glw_data.push([time, obj.GLW]);
            gsw_data.push([time, obj.GSW]);
        });

        return (

            <div className="App">
                <TemperatureChart data={t_data} city={'DAROUS'}/>

                <T_RH_Chart data1={t_data} data2={rh_data} city={'DAROUS'}/>

                <Press_QV_Chart data1={p_data} data2={qv_data} city={'DAROUS'}/>

                <GLW_GSW_Chart data1={glw_data} data2={gsw_data} city={'DAROUS'}/>
            </div>
        );
    }


}

export default App;
