import React from 'react'
import { render } from 'react-dom'
// import Home from 'components/Home'

describe('Hello', () => {
  it('should render correct contents', () => {
    render(<h1 id='hello'>Hello</h1>, document.querySelector('#app'))

    expect(document.querySelector('#hello').textContent)
      .to.equal('Hello')
  })
})
