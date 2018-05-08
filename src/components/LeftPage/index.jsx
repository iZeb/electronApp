import React, {Component} from 'react';
import {observer} from 'mobx-react';

import logo from './Img/logo.png';

@observer
export default class LeftPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="left_page left">
                <div className="top_container">
                    <img src={logo} alt="恒彩彩票"/>
                </div>
                <div className="bottom_container">
                    
                </div>
            </div>
        )
    }
}