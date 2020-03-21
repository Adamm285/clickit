import React, {Component} from "react";
import TodoItem from './TodoItem';
// creates the components that is imports to app.js
import PropTypes from 'prop-types';
// 
class Todos extends Component {
  Shuffle = (todos) => {
    todos.sort(() => Math.random() - 0.5);
    return todos;
  }
  render(){
    // this.Shuffle(this.props.todos);
    return this.Shuffle(this.props.todos).map((todo) => (
      <TodoItem 
      key={todo.id} 
      todo={todo} 
      markComplete= {this.props.markComplete}
     />
    ))
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}


export default Todos;
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