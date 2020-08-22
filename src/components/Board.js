import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        isWinning={this.props.winningSquares.includes(i)}
      />
    );
  }

  render() {
    let rows = [];
    for (let y = 0; y < 3; y++) {
      let row = [];
      for (let x = 0; x < 3; x++) {
        row.push(this.renderSquare(y * 3 + x));
      }
      rows.push(<div className="board-row">{row}</div>);
    }
    return <div>{rows}</div>;
  }
}

export default Board;
