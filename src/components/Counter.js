import React, { Component } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import styles from "./Counter.css";


@inject(root => ({ counter: root.counter }))
@observer
class Counter extends Component {
  render() {
    console.log(this.props.counter.count);
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
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
          <button
            className={styles.btn}
            onClick={incrementIfOdd}
            data-tclass="btn"
          >
            odd
          </button>
          <button
            className={styles.btn}
            onClick={() => incrementAsync()}
            data-tclass="btn"
          >
            async
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;