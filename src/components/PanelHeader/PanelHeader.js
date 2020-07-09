import React from "react";

class PanelHeader extends React.Component {
  render() {
    return (
      <div style={{background:"#61dafb", height: "50px"}}
        className={
          "panel-header " +
          (this.props.size !== undefined
            ? "panel-header-" + this.props.size
            : "")
        }
      data-color="green">
        {this.props.content}
      </div>
    );
  }
}

export default PanelHeader;
