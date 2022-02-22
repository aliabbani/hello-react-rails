import React from "react"
import PropTypes from "prop-types"

class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  title: PropTypes.string
};
export default Greeting
