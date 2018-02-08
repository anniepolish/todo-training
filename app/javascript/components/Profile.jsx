import React from 'react';
import Title from './Title';
class Profile extends React.Component {

  constructor(props) {
    super(props);
    var count = 0;
    this.props.tasks.forEach(function(task) {
      if (task.completed == false) {
        console.log(task);
        count++;
      }
    });
    this.state = {
      url: this.props.url,
      count: count,
      name: this.props.name
    }
  }
  componentWillReceiveProps(nextProps) {
    var count = 0;
    nextProps.tasks.forEach(function(task) {
      if (!task.completed) {
        count++;
      }
    });
    this.setState({count: count});
  }

  render() {
    if (this.state.count > 0) {
      return (
        <div>
          <img alt="profile pic" className="gravatar" height="100" src={this.state.url} />
          <h3>{this.state.name}&#39;s ToDo List</h3>
          <h3>{this.state.count} Incomplete Tasks</h3>
        </div>
      )
    } else {
      return (
        <div>
          <img alt="profile pic" className="gravatar" height="100" src={this.state.url} />
          <h3>{this.state.name}&#39;s ToDo List</h3>
          <h3>All tasks completed!</h3>
        </div>
      )
    }

  }
}

export default Profile
