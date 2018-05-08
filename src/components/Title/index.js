import React from 'react'
import './index.css'

// const ipcRenderer = require('electron').ipcRenderer


export default class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  close() {
  }

  render() {
    return (
      <div className='title-container' style={{'-webkit-app-region': 'drag'}}>
        <button onClick={() => {
          this.close()
        }}>关闭
        </button>
      </div>
    )
  }
}