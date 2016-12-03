import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Button } from 'antd'
import styles from './Home.css'

class Home extends Component {
  clickHandle () {
    const { router } = this.props
    router.push('test')
  }
  render () {
    const { homeReducer, toggleClassName } = this.props
    const { className } = homeReducer
    return (
      <div>
        <h1 className={ className ? styles.blue : '' }>Hello</h1>
        <Button
          onClick={ () => toggleClassName(!className) }
        >
          click to change color
        </Button>
        <br />
        <br />
        <Button
          onClick={ () => this.clickHandle() }
        >
          click to test page
        </Button>
      </div>
    )
  }
}

export default withRouter(Home)
