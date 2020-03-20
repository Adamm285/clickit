import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  render() {
    return (
        <div>
            <span className="navbar-brand navLeft"
            >| Score: {this.props.count} |</span>
        </div>
    );
 }
}

// 
export default Counter;