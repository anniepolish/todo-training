import React from 'react';
//import PropTypes from "prop-types"
class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user, //???
      input_content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState(
      {input_content: e.target.value} //can do this bc only one field
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    $.post('/tasks', {utf8:"✓", task:{content: this.state.input_content}, commit: "Create"});
  }

  render() {
    return (
      <div className="col-md-8">
        <h2>New Task:</h2>
        <form onSubmit={this.handleSubmit} remote="true">
          <input
            name="content"
            placeholder='New Task'
            value={this.state.input_content}
            onChange={this.handleChange} />
          <input type='submit' className="btn btn-primary" value='Create' />
        </form>
      </div>
    );
  }
}

export default CreateForm
