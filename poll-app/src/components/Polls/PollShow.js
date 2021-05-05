import React from 'react';
import {connect} from "react-redux";
import {submitForm} from "../../actions/pollsActions";
import PollForm from "./PollForm";

class PollShow extends React.Component {

  onSubmit = (formValues) => {
    this.props.submitForm(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <PollForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, {submitForm})(PollShow)