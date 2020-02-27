import React from "react";
// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: -1
  };
  // 
  render() {
    return (
        <div>
            <span className="navbar-brand navLeft" 
            onClick={this.state.count++}
            >| Score: {this.state.count} |</span>
        </div>
    );
 }
}
// 
export default Counter;