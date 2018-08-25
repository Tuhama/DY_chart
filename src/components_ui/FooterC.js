import React,{Component} from "react";
import { Layout} from 'antd';

const Footer= Layout;

class FooterC extends Component {


    render() {
        return (
            <Footer style={{textAlign: 'center'}}>
               Design ©2018 Created by
            </Footer>
        );
    };
}

export default FooterC;