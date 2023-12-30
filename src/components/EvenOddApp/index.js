// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onChange = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    this.setState(prevState => ({count: !prevState.count}))
  }

  render() {
    const {count} = this.state
    const findResult = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">
            Count
            <span className="count"> {count}</span>
          </h1>
          <p className="description">{findResult}</p>
          <button className="button" type="button" onClick={this.onChange}>
            Increment
          </button>
          <p className="para">* Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
