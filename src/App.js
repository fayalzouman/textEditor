import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    style: [],
    color: "black"
  };

  selectColor = color => {
    this.setState({ color: color });
  };

  selectStyle = (style) => {
    let styleArray = this.state.style.map(style)
  });

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button style={styles[style]} key={style}>
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.selectColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={{ color: this.state.color }} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
