import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      done: this.props.task.completed,
      name: this.props.task.content
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({done: nextProps.task.completed});
  }
  render () {
    if (!this.state.done) {
      var href = "/tasks/"+this.state.task.id
      return (
        <div>
          <h4>
            <a style={{fontSize: '30px'}} data-remote="true" rel="nofollow" data-method="post" href={href}>
              &#x25a2;
            </a>
            {this.state.name}
          </h4>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.name}
        </div>
      )
    }
  }
}

//Task.propTypes = {
//  task: PropTypes.isRequired
//};
export default Task
