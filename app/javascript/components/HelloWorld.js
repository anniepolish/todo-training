import React from 'react';
import ReactDOM from 'react-dom';
class HelloWorld extends React.Component {
  render () {
    return (
      <div>
        <div className='text-danger'>Greeting: {this.props.greeting}</div>
      </div>
    );
  }
}

//HelloWorld.propTypes = {
//  greeting: PropTypes.string
//};
export default HelloWorld
