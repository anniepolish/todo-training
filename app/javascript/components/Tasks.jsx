import React from 'react';

import HelloWorld from './HelloWorld';
import Task from './Task';
class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({tasks: nextProps.tasks});
  }
  render () {
    console.log("tasks rendered");
    console.log(this.state.tasks);
    return (
      <div>
        {this.state.tasks.map(function (task) {
          return (
            <div>
              <Task task={task} key={task.id}/>
            </div>
          )
        })}
      </div>
    );
  }
}

//Tasks.propTypes = {
//  tasks: PropTypes.isRequired
//};
export default Tasks
