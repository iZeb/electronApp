import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class LeftPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="left_page">
                <div className="top_container">
                    <img src="" alt=""/>
                </div>
                <div className="bottom_container">
                    
                </div>
            </div>
        )
    }
}