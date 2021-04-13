import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import {createPoll} from '../../actions';

class PollCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues)=> {
    this.props.createPoll(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="poll_name"
          component={this.renderInput}
          label="Tytuł ankiety"
        />
        <Field
          name="poll_description"
          component={this.renderInput}
          label="Opis ankiety"
        />
        <button className="ui button primary">Wyślij</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.poll_name) {
    errors.poll_name = 'Wprowadź tytuł ankiety!';
  }

  if (!formValues.poll_description) {
    errors.poll_description = 'Wprowadź opis ankiety!';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'pollCreate',
  validate
})(PollCreate);


export default connect(null, {createPoll})(formWrapped);