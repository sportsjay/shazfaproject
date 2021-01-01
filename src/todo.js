import React from "react";

export default class Todo extends React.Component {
  state = {
    checked: false,
  };

  render() {
    return (
      <div>
        <form>
          <label
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              name="todo"
              type="checkbox"
              checked={this.state.checked}
              style={{
                margin: 10,
              }}
              onClick={() => {
                this.setState({ checked: !this.state.checked });
              }}
            />
            <p
              style={{
                margin: 0,
                textDecorationLine: this.state.checked
                  ? "line-through"
                  : "none",
              }}
            >
              {this.props.todoName}
            </p>
          </label>
        </form>
      </div>
    );
  }
}
