import React, { Component } from "react";
// imported in from the first file in components
import Todos from "./components/Todos";
import './App.css';



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        img: "./img/chickentender.jpg",
        completed: false
      }, {
        id: 2,
        img: "./img/chickensalad.jpg",
        completed: false
      }, {
        id: 3,
        img: "./img/cuban.jpg",
        completed: false
      }, {
        id: 4,
        img: "./img/eggsalad.jpg",
        completed: false
      }, {
        id: 5,
        img: "./img/ham.jpg",
        completed: false
      }, {
        id: 6,
        img: "./img/hamturkey.jpg",
        completed: false
      }, {
        id: 7,
        img: "./img/italian.jpg",
        completed: false
      }, {
        id: 8,
        img: "./img/meatball.jpg",
        completed: false
      }, {
        id: 9,
        img: "./img/mojo.jpg",
        completed: false
      }, {
        id: 10,
        img: "./img/orangeblue.jpg",
        completed: false
      }, {
        id: 11,
        img: "./img/philly.jpg",
        completed: false
      }, {
        id: 12,
        img: "./img/roastbeef.jpg",
        completed: false
      }, {
        id: 13,
        img: "./img/tuna.jpg",
        completed: false
      }, {
        id: 14,
        img: "../../turkey.jpg",
        completed: false
      }, {
        id: 15,
        img: "./img/ulitimate.jpg",
        completed: false
      }, {
        id: 16,
        img: "./img/veggie.jpg",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
   this.setState({ todos: this.state.todos.map(todo => {
     if (todo.id === id){
      todo.completed = !todo.completed;
     }
     return todo;
   })
   
  });
  console.log(this.state);
  }

  render() {
    return ( 
    <div> 
      {/* once todos was imported at the top we can use it in the app below */ } 
        <Todos todos={this.state.todos} markComplete= {this.markComplete}/>
    </div>
    )
  }
}

export default App;