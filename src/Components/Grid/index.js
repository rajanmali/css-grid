import React from "react";
import "../../Styles/Grid.scss";

class Grid extends React.Component {
  state = {
    gridItemCount: 0,
    gridArray: []
  };

  componentDidMount() {
    this.setState({ gridItemCount: this.props.gridItemCount }, () => {
      this.handleGridUpdate();
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.gridItemCount !== this.props.gridItemCount) {
      this.setState({ gridItemCount: this.props.gridItemCount }, () => {
        this.handleGridUpdate();
      });
    }
  }

  handleGridCountChange = event => {
    this.setState({ gridItemCount: parseInt(event.target.value) });
  };

  handleGridUpdate = () => {
    this.state.gridItemCount > 0 &&
      this.setState({
        gridArray: new Array(this.state.gridItemCount).fill("")
      });
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
