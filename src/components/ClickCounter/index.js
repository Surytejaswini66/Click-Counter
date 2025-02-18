// Write your code here
import {Component} from 'react'
import './index.css'
class ClickCounter extends Component {
  state = {count: 0}
  OnIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="content">Click the button to increase the count</p>
        <button className="button" onClick={this.OnIncrement}>Click Me</button>
      </div>
    )
  }
}
export default ClickCounter
