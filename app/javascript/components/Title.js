import React from "react"
import PropTypes from "prop-types"
class Title extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Count: {this.props.count}</div>
      </div>
    );
  }
}

Title.propTypes = {
  name: PropTypes.string,
  count: PropTypes.node
};
export default Title
