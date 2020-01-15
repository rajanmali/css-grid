import React from "react";
import "../../Styles/Grid.scss";

class Grid extends React.Component {
  state = {
    gridItemCount: 0,
    gridArray: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.gridItemCount !== prevState.gridItemCount) {
      return { gridItemCount: nextProps.gridItemCount };
    } else return null;
  }

  componentDidUpdate(prevState) {
    if (prevState.gridItemCount !== this.state.gridItemCount) {
      this.handleGridUpdate();
    }
  }

  handleGridCountChange = event => {
    this.setState({ gridItemCount: parseInt(event.target.value) });
  };

  handleGridUpdate = () => {
    this.setState({ gridArray: new Array(this.state.gridItemCount).fill("") });
  };

  render() {
    const { gridArray } = this.state;
    const { unicode } = this.props;
    return (
      <>
        <div className="input--container">
          <input
            value={this.state.gridItemCount}
            className="input--field"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={this.handleGridCountChange}
          />
          <button className="update--button" onClick={this.handleGridUpdate}>
            Update Grid
          </button>
        </div>
        <div
          className={
            unicode ? "unicode--grid--container" : "dense--grid--container"
          }
        >
          {gridArray.map((_, index) => {
            return (
              <div
                className={
                  unicode ? "unicode--grid--element" : "dense--grid--element"
                }
                key={`grid-${index}`}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Grid;
