import React, {Component} from "react";
// imported in from the first file in components
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';



class App extends Component {
  state = {
    count: 0,
    todos: [{
      id: 1,
      img: "img/chickentender.jpg",
      completed: true
    }, {
      id: 2,
      img: "img/chickensalad.jpg",
      completed: true
    }, {
      id: 3,
      img: "img/cuban.jpg",
      completed: true
    }, {
      id: 4,
      img: "img/eggsalad.jpg",
      completed: true
    }, {
      id: 5,
      img: "img/ham.jpg",
      completed: true
    }, {
      id: 6,
      img: "img/hamturkey.jpg",
      completed: true
    }, {
      id: 7,
      img: "img/italian.jpg",
      completed: true
    }, {
      id: 8,
      img: "img/meatball.jpg",
      completed: true
    }, {
      id: 9,
      img: "img/mojo.jpg",
      completed: true
    }, {
      id: 10,
      img: "img/philly.jpg",
      completed: true
    }, {
      id: 11,
      img: "img/roastbeef.jpg",
      completed: true
    }, {
      id: 12,
      img: "img/tuna.jpg",
      completed: true
    }, {
      id: 13,
      img: "img/turkey.jpg",
      completed: true
    }, {
      id: 14,
      img: "img/ultimate.jpg",
      completed: true
    }, {
      id: 15,
      img: "img/veggie.jpg",
      completed: true
    }, {
      id: 16,
      img: "img/orangeblue.jpg",
      completed: true
    }]
  }
  // 
  // 
  componentDidMount() {
    if(window.innerWidth < 640){
      let aryNew = this.state.todos;
      aryNew.pop();
      this.setState({todos: aryNew});

      // aryNew // [23, 24, 15, 35, 42] 
      // let cutElements = arryNew.splice(-2)
      // cutElements // [24, 15]
      // aryNew // [23, 35, 42]
    }
  }
  scoreKeeper = () => {
    let count = this.state.count
    count++
    this.setState({count: count})
    this.score++
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          this.scoreKeeper();
        }
        if (todo.id === id && !todo.completed !== true) {
          todo.completed = !todo.completed;
          alert("you lost your score is " + this.state.count)
          window.location.reload(false);
        }
        return todo;
      })
    });
    console.log(id);
  }
  render() {
    return ( 
    <div className = "container" >
      <Header count = {this.state.count}/> 
      <div className = "row" >
          <Todos 
          todos = {this.state.todos} 
          markComplete = {this.markComplete}
          /> 
      </div > 
      <Footer />
    </div>
    )
  }
}

export default App;