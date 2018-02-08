import React from 'react';
//import PropTypes from "prop-types"
import Tasks from './Tasks';
import CreateForm from './CreateForm';
//import Profile from './Profile';
class Wrapper extends React.Component {
  render() {
    ReactRailsUJS.mountComponents()
    return (
      <div class="row">
        <aside class="col-md-4">

          <section class="micropost_form">
            <CreateForm />
          </section>
        </aside>
        <div class="col-md-8">
          <Tasks tasks={this.props.tasks} />
        </div>
      </div>
    )
  }
}

export default Wrapper
