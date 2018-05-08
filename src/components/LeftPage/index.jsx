import React, {Component} from 'react';
import {observer} from 'mobx-react';
import './index.css';

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
                    <ul>
                        <li>
                            平台名称：恒彩彩票
                        </li>
                        <li>
                            账户名称：happy
                        </li>
                        <li>
                            账户余额：￥888888.888888
                            <span className="hide_balance hover hover_line right">隐藏</span>
                        </li>
                    </ul>
                </div>
                <div className="bottom_container">
                    
                </div>
            </div>
        )
    }
}