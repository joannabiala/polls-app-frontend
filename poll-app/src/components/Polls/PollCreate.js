import React from 'react';
import { Field, reduxForm } from 'redux-form';

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

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Tytuł ankiety"
        />
        <Field
          name="description"
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

  if (!formValues.title) {
    errors.title = 'Wprowadź tytuł ankiety!';
  }

  if (!formValues.description) {
    errors.description = 'Wprowadź opis ankiety!';
  }

  return errors;
};

export default reduxForm({
  form: 'pollCreate',
  validate
})(PollCreate);