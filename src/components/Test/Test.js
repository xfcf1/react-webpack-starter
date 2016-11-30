import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Test.css'

class Test extends Component {
  render () {
    const { homeReducer, testReducer } = this.props
    const { className } = homeReducer
    const { text } = testReducer
    return (
      <div className={ styles.red }>
        <h1>this is router test page</h1>
        <h2>{text}<span style={{ color: 'blue' }}>{`${className}`}</span></h2>
        <span style={{ fontSize: '18pt' }}><Link to='/'>link back to home page</Link></span>
      </div>
    )
  }
}

export default Test
