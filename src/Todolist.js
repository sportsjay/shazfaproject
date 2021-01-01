import React from "react";
import Todo from "./todo.js";

export default class Todolist extends React.Component {
  state = {
    first: "this is my first state",
    checked: false,
    listOfTodo: ["Nonton", "Tidur", "Makan", "Main Game"],
    newTodo: "",
  };
  componentDidMount() {
    console.log(this);
  }

  onSubmit = () => {
    let currentTodo = this.state.listOfTodo;
    currentTodo.push(this.state.newTodo);
    this.setState({
      listOfTodo: currentTodo,
      newTodo: "",
    });
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: "lightblue",
          borderRadius: 0,
          padding: 15,
          color: "black",
        }}
      >
        <div style={styles.div1}>
          <h2>What do you want to do today?</h2>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 10,
                padding: 5,
              }}
            >
              <form>
                <label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.newTodo}
                    placeholder="write more please..."
                    onChange={(event) => {
                      console.log(event);
                      let addTodo = event.target.value;
                      this.setState({ newTodo: addTodo });
                    }}
                    style={{
                      margin: 10,
                    }}
                  />
                </label>
              </form>
              <button
                onClick={() => {
                  this.onSubmit();
                }}
              >
                Add
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: 10,
              }}
            >
              {this.state.listOfTodo.map((todo) => {
                return <Todo todoName={todo} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let styles = {
  div1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: "10",
    backgroundColor: "lightpink",
  },
};
