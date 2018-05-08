import React, {Component} from "react";
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";

@inject(root => ({counter: root.counter}))
@observer
export default class Counter extends Component {
  render() {
    console.log(this.props);
    const {
      increment,
      decrement,
      count
    } = this.props.counter;
    return (
      <div>
        <div className={`counter`}>
          {count}
        </div>
        <div>
          <button onClick={increment}>
            加
          </button>
          <button onClick={decrement}>
            减
          </button>
        </div>
      </div>
    );
  }
}
