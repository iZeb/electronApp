import React, { Component } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import styles from "./Counter.css";

@inject(root => ({ counter: root.counter }))
@observer
export default class Counter extends Component {
    // constructor(props) {
    //     super(props);
    // };
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
        <div className={styles.btnGroup}>
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
