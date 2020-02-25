import React, {Component} from "react";
import TodoItem from './TodoItem';
// creates the components that is imports to app.js
import PropTypes from 'prop-types';
// 
class Todos extends Component {


  render(){
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete= 
        {this.props.markComplete} />
    ))
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;

// // By extending the React.Component class, Counter inherits functionality from it
// class Counter extends React.Component {
//   // Setting the initial state of the Counter component
//   state = {
//     count: 0
//   };

//   // handleIncrement increments this.state.count by 1
//   handleIncrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count + 1 });
//     if (this.state.count > 1){
//       console.log("you guessed incorrectly")
//     }
//   };

//   // The render method returns the JSX that should be rendered
//   render() {
//     return (
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           Click a picture!
//         </div>
//         <div className="card-body">
//           <p className="card-text">Click Count: {this.state.count}</p>
//           <button className="btn btn-primary" onClick={this.handleIncrement}>
//             Increment
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
//   //design webpage layout
//       // fixed navbar
//       // container for all the images to shuffle
//       // jumbotron with "Clicky game" and instructions
//       // navbar with "clicky game" on the left
//       // navbar with click result "You Guessed Correctly" or You guesses incorrectly in center
//       // navbar with your score/ top score on the left, top score is not persistant
//       // sticky footer
//   // Render 12 different images on the page 
//   // on click for each image that changes the data state
//   // on click for each image makes click result in navbar flash blue or red
//   // on click resets image locations
//   // use data state to keep track of score
//   // if user clicks on an image that has already been clicked score resets