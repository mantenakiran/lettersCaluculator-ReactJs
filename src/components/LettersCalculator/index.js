// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letters: 0}

  calculateFunction = event => {
    const count = event.target.value.length
    this.setState({letters: count})
  }

  render() {
    const {letters} = this.state

    return (
      <div className="bg-container">
        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />

        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="inputId" className="parse-text">
              Enter the phrase
            </label>
            <div>
              <input
                id="inputId"
                onChange={this.calculateFunction}
                placeholder="Enter the phrase"
                className="inputEl"
              />
            </div>
            <div>
              <p className="button">No.of letters: {letters}</p>
            </div>
          </div>
        </div>

        <img
          className="image2"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}
export default LettersCalculator
